import type {NextRequest} from "next/server";
import {fetchRequestHandler} from "@trpc/server/adapters/fetch";

import {createTRPCContext} from "@saasfly/api";
import {edgeRouter} from "@saasfly/api/edge";
// Conditional Clerk usage
const isDev = process.env.NODE_ENV === 'development' || process.env.IS_DEBUG === 'true';
const hasValidClerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && 
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY !== '1' && 
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith('pk_');

// Mock auth for development or invalid keys
const mockGetAuth = () => ({ userId: null });

let getAuth: any;
try {
  if (!isDev && hasValidClerkKey) {
    const clerkModule = require("@clerk/nextjs/server");
    getAuth = clerkModule.getAuth;
  } else {
    getAuth = mockGetAuth;
  }
} catch (error) {
  getAuth = mockGetAuth;
}

// export const runtime = "edge";
const createContext = async (req: NextRequest) => {
    return createTRPCContext({
        headers: req.headers,
        auth: getAuth(req),
    });
};

const handler = (req: NextRequest) =>
    fetchRequestHandler({
        endpoint: "/api/trpc/edge",
        router: edgeRouter,
        req: req,
        createContext: () => createContext(req),
        onError: ({error, path}) => {
            console.log("Error in tRPC handler (edge) on path", path);
            console.error(error);
        },
    });

export {handler as GET, handler as POST};
