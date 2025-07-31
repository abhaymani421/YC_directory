import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import path from "path";
import { Toaster } from "@/components/ui/toaster";
import "easymde/dist/easymde.min.css"; //markdown plugin also requires additional CSS
//we have added local fonts in our fonts folder, which we are using locally in out project, without using any external services like google fonts

const workSans = localFont({
  src: [
    {
      path: "./fonts/workSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/workSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/workSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/workSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/workSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/workSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/workSans-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/workSans-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-work-sans",
});
export const metadata: Metadata = {
  title: "YC Directory",
  description: "Pitch, Vote and Grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.variable}>
        {children}
        <Toaster />{" "}
        {/*if something goes wrong, we use this to diaplay a shadcn toast */}
      </body>
    </html>
  );
}
