import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Hour Bell",
  description: "Hour Bell privacy policy.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f5edda] px-6 py-10 text-[#2a2118]">
      <article className="mx-auto max-w-2xl">
        <Link href="/hour-bell" className="text-sm font-medium text-[#8b6f3e] hover:text-[#2a2118]">
          ← Hour Bell
        </Link>

        <h1 className="mt-10 font-[var(--font-hour-bell)] text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-[#7a6348]">Last updated: 2026-06-02</p>

        <div className="mt-10 space-y-8 text-lg leading-8 text-[#4d3f30]">
          <section>
            <h2 className="mb-2 font-[var(--font-hour-bell)] text-2xl font-semibold text-[#2a2118]">
              Summary
            </h2>
            <p>
              Hour Bell is designed to be a small local utility. It does not require an
              account and does not collect, sell, or share personal data.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-[var(--font-hour-bell)] text-2xl font-semibold text-[#2a2118]">
              Local data
            </h2>
            <p>
              The app stores your chime settings and basic diagnostic state locally on
              your device, such as whether chimes are enabled, which schedule and sound
              you selected, notification permission state, and recent scheduling status.
              This information stays on your device and is not sent to us.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-[var(--font-hour-bell)] text-2xl font-semibold text-[#2a2118]">
              Notifications
            </h2>
            <p>
              Hour Bell asks for notification permission so it can schedule local chimes
              using your device’s notification system. You can change notification
              permissions at any time in your device settings.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-[var(--font-hour-bell)] text-2xl font-semibold text-[#2a2118]">
              Analytics, ads, and tracking
            </h2>
            <p>
              Hour Bell does not include ads, analytics, third-party tracking, or user
              profiling.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-[var(--font-hour-bell)] text-2xl font-semibold text-[#2a2118]">
              Contact
            </h2>
            <p>
              If you have questions about this privacy policy, use the contact details on
              the <Link href="/hour-bell/support" className="underline decoration-[#c4a464] underline-offset-4">support page</Link>.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
