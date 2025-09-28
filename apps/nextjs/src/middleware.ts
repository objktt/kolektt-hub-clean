import { middleware } from "./utils/clerk";

export const config = {
  matcher: ["/((?!_next|videos|3d).*)", "/", "/(api|trpc)(.*)"],
};

export default middleware;
