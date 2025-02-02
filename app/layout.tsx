import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { absoluteUrl } from "@/utils/absoluteUrl";
import { navItems } from "@/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Toxic Dev',
    default: 'Toxic Dev'
  },
  description: ' Hello, I\'m Tyler, a passionate front-end developer based in Canada. I specialize in crafting dynamic and responsive websites that bring your dreams and ideas to life.',
  openGraph: {
    url: "https://toxicdev.me",
    title: {
      template: '%s | Toxic Dev',
      default: 'Toxic Dev'
    },
    description: ' Hello, I\'m Tyler, a passionate front-end developer based in Canada. I specialize in crafting dynamic and responsive websites that bring your dreams and ideas to life.',
    images: "/banners/meta.png",
    siteName: "Toxic Dev",
  },
  twitter: {
    card: 'summary_large_image',
    creator: "@TheRealToxicDev",
    title: {
      template: '%s | Toxic Dev',
      default: 'Toxic Dev'
    },
    description: ' Hello, I\'m Tyler, a passionate front-end developer based in Canada. I specialize in crafting dynamic and responsive websites that bring your dreams and ideas to life.',
    images: "/banners/meta.png",
  },
  metadataBase: absoluteUrl()
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-white dark:bg-black-100"}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
