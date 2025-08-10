"use client";

import PageTransition from "@/components/customs/PageTransition";
import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme.provider";
import { Open_Sans, Raleway } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const raleway = Raleway({
  weight: "700",
  variable: "--font-raleway",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  weight: "400",
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
  }, [pathname]);

  return (
    <ThemeProvider>
      <div
        className={cn(
          "min-h-screen bg-background font-raleway text-foreground antialiased",
          raleway.variable,
          openSans.variable
        )}
        style={{ fontFamily: "var(--font-raleway)" }}
      >
        {loading ? (
          <PageTransition onFinish={() => setLoading(false)} />
        ) : (
          <>
            <Header />
            <main>{children}</main>
            <Toaster />
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}
