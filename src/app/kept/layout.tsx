import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kept: Habits you keep",
  description:
    "A habit tracker for iPhone, iPad and Android, with no account. When a habit has become part of you, keep it.",
};

export default function KeptLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
