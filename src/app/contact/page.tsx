import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Quad.codes",
  description: "Contact Quad.codes and Pavlos Vinieratos.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f6f3ea] px-6 py-10 text-[#1f2937]">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-xl flex-col justify-center">
        <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
          ← Quad.codes
        </Link>

        <h1 className="mt-10 text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
          Contact
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          For app support, project questions, or anything else, use one of these.
        </p>

        <ul className="mt-10 space-y-4 text-lg">
          <li>
            Email: {" "}
            <Link href="mailto:help@pvinis.com" className="font-medium underline underline-offset-4">
              help@pvinis.com
            </Link>
          </li>
          <li>
            Twitter: {" "}
            <Link href="https://x.com/pvinis" className="font-medium underline underline-offset-4">
              @pvinis
            </Link>
          </li>
          <li>
            Bluesky: {" "}
            <Link href="https://bsky.app/profile/pav.vin" className="font-medium underline underline-offset-4">
              @pav.vin
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
