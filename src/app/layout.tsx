import "./globals.css";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { metadatInfo } from "@/lib/metadata";
import { Bricolage_Grotesque } from "next/font/google";
import { AnalyticsTracker } from "@/components/tracker";

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = metadatInfo;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <body className={cn(font.className, "antialiased")}>
        {children}
        <AnalyticsTracker />
      </body>
    </html>
  );
}
