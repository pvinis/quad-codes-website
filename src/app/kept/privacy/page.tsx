import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Kept",
  description: "Kept privacy policy.",
};

const link = "underline decoration-[#ff5a36]/50 underline-offset-4 hover:decoration-[#ff5a36]";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#fbf6ef] px-6 py-10 text-[#1f1a17]">
      <article className="mx-auto max-w-2xl">
        <Link href="/kept" className="text-sm font-medium text-[#ff5a36] hover:text-[#1f1a17]">
          ← Kept
        </Link>

        <h1 className="mt-10 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-[#7a6b61]">Last updated: 2026-11-21</p>

        <div className="mt-10 space-y-8 text-lg leading-8 text-[#4a3f38]">
          <section>
            <h2 className="mb-2 text-2xl font-semibold text-[#1f1a17]">Summary</h2>
            <p>
              Kept doesn&apos;t need an account, and doesn&apos;t sell or share your personal data.
              Your habits stay on your own devices. When your devices sync through the internet, what
              passes between them is sealed, so nothing in between, us included, can read it.
            </p>
            <p className="mt-4">
              From version 1.1, Kept sends crash reports, and anonymous stats about how it&apos;s used
              where you allow them. Neither ever includes your habits or your name, and you can turn
              either off in Settings › Privacy.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold text-[#1f1a17]">What stays on your device</h2>
            <p>
              Kept keeps your habits on your device: their names, icons, colors, schedules and
              reminder times, the days you marked done, skipped or failed and when you marked them,
              pauses, the habits you kept, and your settings. On iPhone and iPad its widgets read the
              same data. It also keeps the names and models of your devices, for the Devices list.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold text-[#1f1a17]">Syncing your devices</h2>
            <p>
              Syncing is optional, and only starts once you pair a second device by scanning its QR
              code. The code carries a key that only your devices hold.
            </p>
            <p className="mt-4">
              Nearby, your devices find each other on the local network and sync directly, encrypted
              with that key. Away from each other, they sync through Kept&apos;s relay, which we run
              on Cloudflare. Everything your devices send it is sealed with your key, so the relay
              can&apos;t read your habits or change them. It keeps the sealed changes so a device that
              comes online later can catch up. It sees a random id for your group of devices, how big
              each change is and when it arrives, and when your devices connect. It sees the IP
              address a connection comes from, and keeps it only as a salted hash, to limit abuse.
            </p>
            <p className="mt-4">
              If you&apos;d like your group&apos;s sealed changes removed from the relay, get in touch
              (see below).
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold text-[#1f1a17]">Backups</h2>
            <p>
              Your device&apos;s own backups, to iCloud or Google, can include your habits, under your
              account with Apple or Google. On Android, only the habits are backed up; the key your
              devices share is not.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold text-[#1f1a17]">Icon suggestions</h2>
            <p>
              When you name a habit, Kept can suggest an icon for it. On devices that have one, it
              asks the language model built into the device (Apple Intelligence on iPhone and iPad,
              Gemini Nano on Android). That runs on the device itself: the name isn&apos;t sent
              anywhere.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold text-[#1f1a17]">Reminders</h2>
            <p>
              Reminders are local notifications, scheduled on your device. Kept asks for permission to
              send them, and you can change that at any time in your device&apos;s settings.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold text-[#1f1a17]">Crash reports</h2>
            <p>
              When Kept crashes or runs into an error, it sends a crash report: what went wrong in the
              app&apos;s code and what the app was doing, the app&apos;s version, the version of iOS or
              Android, and the device&apos;s model. It never includes your habits, your device&apos;s
              name or your sync key. Sentry processes crash reports for us, in the United States, under the safeguards EU law requires for such transfers, and keeps them for 30 days.
            </p>
            <p className="mt-4">
              Crash reports are on from the start, so we can fix what breaks; we rely on our
              legitimate interest in keeping Kept working. You can turn them off in Settings ›
              Privacy.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold text-[#1f1a17]">Anonymous usage stats</h2>
            <p>
              Kept can send anonymous stats about how it&apos;s used, so we can see what helps and what
              to improve:
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-6">
              <li>the app&apos;s version, and the version of iOS or Android</li>
              <li>whether it runs on a phone, a tablet or a foldable</li>
              <li>your App Store country, or your phone&apos;s region on Android, and its language</li>
              <li>how many habits you have, on what kinds of schedules, and how many have reminders</li>
              <li>how many devices you&apos;ve paired, and whether they&apos;re iPhones or Android phones</li>
              <li>which features you use, like checking off, skipping a day, pausing, widgets and reminders</li>
            </ul>
            <p className="mt-4">
              They carry a random ID that isn&apos;t tied to you, and starts fresh every year. They
              never include your habits&apos; names, notes or history, your device&apos;s name, your
              sync key, your location or your IP address. PostHog processes them for us in the EU, and
              keeps them for up to 25 months.
            </p>
            <p className="mt-4">
              In the EU and the EEA, Brazil, South Korea, India and China, Kept asks before sending any
              stats, and sends none unless you say yes: there, we rely on your consent. Everywhere
              else, Kept tells you once, after you&apos;ve used it a few times, and sends them unless
              you turn them off: there, we rely on our legitimate interest in improving Kept. Either
              way, Settings › Privacy has a switch, and &ldquo;What&apos;s shared&rdquo; there lists
              exactly what&apos;s sent.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold text-[#1f1a17]">Ads and tracking</h2>
            <p>
              Kept has no ads, and doesn&apos;t track you: nothing it sends is linked to you, combined
              with data from other companies&apos; apps or websites, or used for advertising. If
              you&apos;ve chosen to share analytics with app developers in your device&apos;s
              settings, Apple or Google may also send us crash reports. If you test a beta through
              TestFlight, Apple passes on the feedback and crash reports you choose to send.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold text-[#1f1a17]">Your choices</h2>
            <p>
              You can turn crash reports and stats off at any time in Settings › Privacy, and nothing
              more is sent from then on. Because what&apos;s sent isn&apos;t linked to you, we
              can&apos;t pick out one person&apos;s reports to show or delete them; if you have
              questions, get in touch (see below).
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold text-[#1f1a17]">Changes</h2>
            <p>
              If this policy changes, the new version will be here, with the date it changed at the
              top.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold text-[#1f1a17]">Contact</h2>
            <p>
              If you have questions about this privacy policy, use the contact details on the{" "}
              <Link href="/kept/support" className={link}>
                support page
              </Link>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
