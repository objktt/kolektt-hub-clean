import type { Config } from "tailwindcss";

import baseConfig from "@saasfly/tailwind-config";

export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
    "../../tooling/ui/src/**/*.{ts,tsx}"
  ],
  presets: [baseConfig],
} satisfies Config;
