import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/layouts/ClientLayout";

export const metadata: Metadata = {
  title: "Adi Munawar | Portfolio",
  description: "Fullstack Developer Portfolio by Adi Munawar",
  openGraph: {
    title: "Adi Munawar | Portfolio",
    description: "Fullstack Developer Portfolio by Adi Munawar",
    url: "https://adimunawar-dev.vercel.app/",
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
