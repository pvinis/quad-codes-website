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
        <p className="mt-3 text-sm text-[#7a6b61]">Last updated: 2026-10-18</p>

        <div className="mt-10 space-y-8 text-lg leading-8 text-[#4a3f38]">
          <section>
            <h2 className="mb-2 text-2xl font-semibold text-[#1f1a17]">Summary</h2>
            <p>
              Kept doesn&apos;t need an account, and doesn&apos;t collect, sell or share your personal
              data. Your habits stay on your own devices. When your devices sync through the internet,
              what passes between them is sealed, so nothing in between, us included, can read it.
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
            <h2 className="mb-2 text-2xl font-semibold text-[#1f1a17]">
              Analytics, ads, and tracking
            </h2>
            <p>
              Kept has no ads, analytics, third-party tracking or profiling. If you&apos;ve chosen to
              share analytics with app developers in your device&apos;s settings, Apple or Google may
              send us crash reports. If you test a beta through TestFlight, Apple passes on the
              feedback and crash reports you choose to send.
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
