import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — Hour Bell",
  description: "Hour Bell support and troubleshooting.",
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#f5edda] px-6 py-10 text-[#2a2118]">
      <article className="mx-auto max-w-2xl">
        <Link href="/hour-bell" className="text-sm font-medium text-[#8b6f3e] hover:text-[#2a2118]">
          ← Hour Bell
        </Link>

        <h1 className="mt-10 font-[var(--font-hour-bell)] text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
          Support
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#4d3f30]">
          Hour Bell is a minimal app for gentle recurring chimes. If chimes are not
          playing, try the checks below.
        </p>

        <ol className="mt-10 list-decimal space-y-4 pl-6 text-lg leading-8 text-[#4d3f30]">
          <li>Open Hour Bell and make sure Chimes is on.</li>
          <li>Check that notifications are allowed for Hour Bell in your device settings.</li>
          <li>Check your device volume, mute switch, Focus, Do Not Disturb, and notification settings.</li>
          <li>Open the app’s Diagnostics section to confirm permission and scheduling status.</li>
          <li>Try selecting a sound and tapping it to preview playback.</li>
        </ol>

        <section className="mt-12 rounded-3xl bg-[#eadbb8] p-6 text-[#4d3f30]">
          <h2 className="font-[var(--font-hour-bell)] text-2xl font-semibold text-[#2a2118]">
            Contact
          </h2>
          <p className="mt-3 leading-7">
            You can also use the {" "}
            <Link href="https://quad.codes/contact" className="underline decoration-[#c4a464] underline-offset-4">
              Quad.codes contact page
            </Link>.
          </p>
          <ul className="mt-4 space-y-2 leading-7">
            <li>
              Email: {" "}
              <Link href="mailto:help@pvinis.com" className="underline decoration-[#c4a464] underline-offset-4">
                help@pvinis.com
              </Link>
            </li>
            <li>
              Twitter: {" "}
              <Link href="https://x.com/pvinis" className="underline decoration-[#c4a464] underline-offset-4">
                @pvinis
              </Link>
            </li>
            <li>
              Bluesky: {" "}
              <Link href="https://bsky.app/profile/pav.vin" className="underline decoration-[#c4a464] underline-offset-4">
                @pav.vin
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
