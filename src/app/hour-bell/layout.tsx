import type { Metadata } from "next";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-hour-bell" });

export const metadata: Metadata = {
  title: "Hour Bell",
  description: "Gentle recurring chimes for your day.",
};

export default function HourBellLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={fraunces.variable}>{children}</div>;
}
