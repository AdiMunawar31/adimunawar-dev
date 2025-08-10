import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/layouts/ClientLayout";

export const metadata: Metadata = {
  title: "D2Y Dev | Portfolio",
  description: "Fullstack Developer Portfolio by D2Y",
  openGraph: {
    title: "MyApp",
    description: "Best Next.js Boilerplate",
    url: "https://myapp.com",
    siteName: "MyApp",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
