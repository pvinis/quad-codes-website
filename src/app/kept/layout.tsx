import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kept: Habits you keep",
  description:
    "Kept is a local-first habit tracker for iPhone, iPad and Android. No account: your habits stay on your own devices, and sync between them is sealed end to end. No ads, no tracking.",
};

export default function KeptLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
