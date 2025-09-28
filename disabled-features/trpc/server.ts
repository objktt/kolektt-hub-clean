import "server-only";

import { cookies } from "next/headers";
import {
  createTRPCProxyClient,
  loggerLink,
  TRPCClientError,
} from "@trpc/client";

import { AppRouter } from "@saasfly/api";

import { transformer } from "./shared";
import { observable } from "@trpc/server/observable";
import { callProcedure } from "@trpc/server";
import { TRPCErrorResponse } from "@trpc/server/rpc";
import { cache } from "react";
import { appRouter } from "../../../../packages/api/src/root";
// Conditional Clerk usage
const isDev =
  process.env.NODE_ENV === "development" || process.env.IS_DEBUG === "true";
const hasValidClerkKey =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY !== "1" &&
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith("pk_");

// Mock auth function for development or invalid Clerk keys
const mockAuth = () => Promise.resolve({ userId: null });

// Conditionally import and use Clerk auth
let auth: any;
try {
  if (!isDev && hasValidClerkKey) {
    const { auth: clerkAuth } = require("@clerk/nextjs/server");
    auth = clerkAuth;
  } else {
    auth = mockAuth;
  }
} catch (error) {
  // Fallback to mock auth if Clerk import fails
  auth = mockAuth;
}

type AuthObject = { userId: string | null };

export const createTRPCContext = async (opts: {
  headers: Headers;
  auth: AuthObject;
  // eslint-disable-next-line @typescript-eslint/require-await
}) => {
  return {
    userId: opts.auth.userId,
    ...opts,
  };
};

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = cache(async () => {
  return createTRPCContext({
    headers: new Headers({
      cookie: cookies().toString(),
      "x-trpc-source": "rsc",
    }),
    auth: await auth(),
  });
});

export const trpc = createTRPCProxyClient<AppRouter>({
  transformer,
  links: [
    loggerLink({
      enabled: (op) =>
        process.env.NODE_ENV === "development" ||
        (op.direction === "down" && op.result instanceof Error),
    }),
    /**
     * Custom RSC link that lets us invoke procedures without using http requests. Since Server
     * Components always run on the server, we can just call the procedure as a function.
     */
    () =>
      ({ op }) =>
        observable((observer) => {
          createContext()
            .then((ctx) => {
              return callProcedure({
                procedures: appRouter._def.procedures,
                path: op.path,
                rawInput: op.input,
                ctx,
                type: op.type,
              });
            })
            .then((data) => {
              observer.next({ result: { data } });
              observer.complete();
            })
            .catch((cause: TRPCErrorResponse) => {
              observer.error(TRPCClientError.from(cause));
            });
        }),
  ],
});
export { type RouterInputs, type RouterOutputs } from "@saasfly/api";
