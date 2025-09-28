import type { Config } from "tailwindcss";

import baseConfig from "@saasfly/tailwind-config";

export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
    "../../tooling/ui/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-sans)",
          ...require("tailwindcss/defaultTheme").fontFamily.sans,
        ],
        heading: [
          "var(--font-heading)",
          ...require("tailwindcss/defaultTheme").fontFamily.sans,
        ],
      },
    },
  },
  presets: [baseConfig],
} satisfies Config;
