import { middleware } from "./utils/clerk";

export const config = {
  matcher: [
    "/((?!_next|videos).*)",
    "/",
    "/(api|trpc)(.*)"
  ],
};

export default middleware;
