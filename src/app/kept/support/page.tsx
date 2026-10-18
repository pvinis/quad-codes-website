import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — Kept",
  description: "Kept support and troubleshooting.",
};

const link = "underline decoration-[#ff5a36]/50 underline-offset-4 hover:decoration-[#ff5a36]";

const questions = [
  {
    question: "My devices aren't syncing.",
    answer:
      "Pair them from Settings › Devices, by scanning one's QR code with the other. Devices sync while Kept is open on them: nearby ones directly, and others through the relay whenever each one opens the app. An Android phone needs to be on the same Wi-Fi as the other device to sync nearby.",
  },
  {
    question: "A reminder didn't come.",
    answer:
      "Check that notifications are allowed for Kept in your device's settings, and that Focus or Do Not Disturb isn't holding them. Kept only reminds you on days a habit is due and not done yet, and never for a paused or kept habit.",
  },
  {
    question: "Something I checked off after midnight counts for the wrong day.",
    answer:
      "Settings › Day ends at sets when your day ends, from midnight to 6am. Until then, it's still the day before.",
  },
  {
    question: "Where did a habit go?",
    answer:
      "Paused habits are under Paused at the bottom of Today, and kept ones on the Kept shelf just below. Habits you stopped are in Settings › Archived.",
  },
  {
    question: "What do the colored squares mean?",
    answer: "Settings › What the squares mean explains each one.",
  },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#fbf6ef] px-6 py-10 text-[#1f1a17]">
      <article className="mx-auto max-w-2xl">
        <Link href="/kept" className="text-sm font-medium text-[#ff5a36] hover:text-[#1f1a17]">
          ← Kept
        </Link>

        <h1 className="mt-10 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">Support</h1>
        <p className="mt-6 text-lg leading-8 text-[#4a3f38]">
          Kept is a habit tracker for iPhone, iPad and Android. If something isn&apos;t working, the
          answers below may help. If not, get in touch.
        </p>

        <div className="mt-10 space-y-8">
          {questions.map((item) => (
            <section key={item.question}>
              <h2 className="text-xl font-semibold">{item.question}</h2>
              <p className="mt-2 text-lg leading-8 text-[#4a3f38]">{item.answer}</p>
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-[1.5rem] bg-[#f7e6dc] p-6 text-[#4a3f38]">
          <h2 className="text-2xl font-semibold text-[#1f1a17]">Contact</h2>
          <p className="mt-3 leading-7">
            You can also use the{" "}
            <Link href="https://quad.codes/contact" className={link}>
              Quad.codes contact page
            </Link>
            .
          </p>
          <ul className="mt-4 space-y-2 leading-7">
            <li>
              Email:{" "}
              <Link href="mailto:help@pvinis.com" className={link}>
                help@pvinis.com
              </Link>
            </li>
            <li>
              Twitter:{" "}
              <Link href="https://x.com/pvinis" className={link}>
                @pvinis
              </Link>
            </li>
            <li>
              Bluesky:{" "}
              <Link href="https://bsky.app/profile/pav.vin" className={link}>
                @pav.vin
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
