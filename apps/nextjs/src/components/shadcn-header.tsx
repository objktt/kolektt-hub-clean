"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { cn } from "@saasfly/ui"
import { Button } from "@saasfly/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@saasfly/ui/sheet"
import type { Locale } from "~/config/i18n-config"

interface ShadcnHeaderProps {
  lang: Locale
}

export function ShadcnHeader({ lang }: ShadcnHeaderProps) {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Force X button to be black */}
      <style jsx global>{`
        [data-radix-dialog-content] button[data-radix-dialog-close] {
          color: #111827 !important;
        }
        [data-radix-dialog-content] button[data-radix-dialog-close] svg {
          color: #111827 !important;
        }
      `}</style>
    <header
      className="fixed top-4 inset-x-0 z-50"
    >
      <div>
        <div className="mx-auto w-[90%] px-4 sm:px-6 lg:px-8">
          <div className={cn(
            "rounded-2xl border transition-all duration-300 ease-in-out",
            isScrolled 
              ? "bg-white/[0.99] backdrop-blur-lg shadow-md border-gray-200/50" 
              : "bg-white/[0.99] backdrop-blur-md shadow-sm border-gray-200/40"
          )}>
            <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center space-x-2">
            <span className="font-black text-2xl text-gray-900 hover:text-gray-700 transition-colors">
              Kolektt
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <Link 
              href={`/${lang}/bpm-collect`}
              className="text-gray-700 hover:text-gray-900 hover:bg-gray-100/80 px-3 py-2 text-base font-bold rounded-md transition-all"
            >
              BPM Collect
            </Link>
            
            <Link 
              href={`/${lang}/hub`}
              className="text-gray-700 hover:text-gray-900 hover:bg-gray-100/80 px-3 py-2 text-base font-bold rounded-md transition-all"
            >
              Kolektt Hub
            </Link>
            
            <Link 
              href={`/${lang}/about`}
              className="text-gray-700 hover:text-gray-900 hover:bg-gray-100/80 px-3 py-2 text-base font-bold rounded-md transition-all"
            >
              About
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="flex items-center">
            <Button className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white shadow-sm" asChild>
              <Link href={`/${lang}/hub`}>Enter Kolektt Hub</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden ml-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100/80">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[300px] !bg-white border-l border-gray-200" 
                style={{ 
                  backgroundColor: '#ffffff',
                  '--foreground': '#111827',
                  '--muted-foreground': '#6b7280'
                } as React.CSSProperties}
              >
                <SheetHeader className="text-left">
                  <SheetTitle className="text-xl font-bold !text-gray-900" style={{ color: '#111827' }}>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-1 mt-6">
                  <Link
                    href={`/${lang}/bpm-collect`}
                    className="text-base font-medium !text-gray-900 hover:!text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-lg transition-all"
                    style={{ color: '#111827' }}
                  >
                    BPM Collect
                  </Link>
                  <Link
                    href={`/${lang}/hub`}
                    className="text-base font-medium !text-gray-900 hover:!text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-lg transition-all"
                    style={{ color: '#111827' }}
                  >
                    Kolektt Hub
                  </Link>
                  <Link
                    href={`/${lang}/about`}
                    className="text-base font-medium !text-gray-900 hover:!text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-lg transition-all"
                    style={{ color: '#111827' }}
                  >
                    About
                  </Link>
                  <div className="pt-6 border-t border-gray-200 mt-6">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                      <Link href={`/${lang}/hub`}>Enter Kolektt Hub</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

