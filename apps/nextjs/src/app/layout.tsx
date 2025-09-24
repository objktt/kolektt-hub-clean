import { ClerkProvider } from "@clerk/nextjs";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

import "~/styles/globals.css";

import { NextDevtoolsProvider } from "@next-devtools/core";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { cn } from "@saasfly/ui";
import { Toaster } from "@saasfly/ui/toaster";

import { TailwindIndicator } from "~/components/tailwind-indicator";
import { ThemeProvider } from "~/components/theme-provider";
import { i18n } from "~/config/i18n-config";
import { siteConfig } from "~/config/site";

// import { Suspense } from "react";
// import { PostHogPageview } from "~/config/providers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../styles/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata = {
  title: {
    default: "Kolektt - All your collections begin here",
    template: `%s | Kolektt`,
  },
  description: "Smart platform for analog collectors. Easily collect, manage, and trade your collection with camera-based automatic recognition, metadata collection, and investment insights.",
  keywords: [
    "Kolektt", 
    "collect", 
    "collection", 
    "vinyl", 
    "record", 
    "analog", 
    "collecting", 
    "BPM Collect", 
    "Kolektt Hub", 
    "metadata", 
    "AI recognition", 
    "trading", 
    "community"
  ],
  authors: [
    {
      name: "Objktt Studio",
    },
  ],
  creator: "Objktt Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kolektt.com",
    title: "Kolektt — All your collections begin here.",
    description: "Smart platform for analog collectors. Easily collect, manage, and trade your collection with camera-based automatic recognition, metadata collection, and investment insights.",
    siteName: "Kolektt",
    images: [
      {
        url: "/images/assets/ogg.png",
        width: 1200,
        height: 630,
        alt: "Kolektt - All your collections begin here",
      },
    ],
  },
  icons: {
    icon: "/images/fav-icon/icon.png",
    apple: "/images/fav-icon/icon.png",
  },
  metadataBase: new URL("https://kolektt.com"),
  // manifest: `${siteConfig.url}/site.webmanifest`,
};

// 개발 모드 체크
const isDev = process.env.NODE_ENV === 'development' || process.env.IS_DEBUG === 'true';

// Clerk Provider Wrapper 컴포넌트
const ConditionalClerkProvider = ({ children }: { children: React.ReactNode }) => {
  if (isDev) {
    return <>{children}</>;
  }
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConditionalClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        {/*<Suspense>*/}
        {/*  <PostHogPageview />*/}
        {/*</Suspense>*/}
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
            fontHeading.variable,
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={true}
          >
            <NextDevtoolsProvider>{children}</NextDevtoolsProvider>
            <Analytics />
            <SpeedInsights />
            <Toaster />
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </ConditionalClerkProvider>
  );
}
