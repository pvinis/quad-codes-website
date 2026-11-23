import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "No account. Just your devices.",
    text: "Your habits live on your own devices, not in an account, and Kept works offline. Pair another iPhone, iPad or Android phone with a QR code and they keep each other up to date, sealed end to end: directly when they're nearby, or through a relay that can't read them. No ads, no tracking.",
  },
  {
    title: "Streaks that are fair",
    text: "Ill, travelling, or just a hard week? Skip the day and your streak stays safe. Pause a habit for a season, or mark a day failed. Let your day end at 4am, so a late night still counts for the evening it belongs to.",
  },
  {
    title: "When it sticks, keep it",
    text: "Once a habit has clearly become part of you, Kept suggests moving it to your Kept shelf, with its whole history. It stops asking, and your list stays short.",
  },
  {
    title: "See how it's going",
    text: "Every habit has its current and best streak, the last 30 days, a calendar, and six months at a glance. On iPad, see four weeks of every habit on one screen.",
  },
  {
    title: "Reminders at your usual time",
    text: "Pick a time, or let Kept learn when you usually do it, day by day. It only reminds you on days a habit is due and not done yet.",
  },
  {
    title: "Widgets everywhere",
    text: "Check things off from the home screen and the lock screen, see what's up next, or keep a habit's month in view. There's a Control Center control on iPhone and a Quick Settings tile on Android.",
  },
];

const screens = [
  { src: "/kept/today.png", alt: "Today, with a strip of recent days for each habit" },
  { src: "/kept/skip.png", alt: "A habit's menu, with Skip today, Failed and Pause" },
  { src: "/kept/keep-it.png", alt: "Kept suggesting to keep a habit that looks like part of you" },
  { src: "/kept/detail.png", alt: "A habit's streaks, last 30 days and calendar" },
];

export default function KeptPage() {
  return (
    <main className="min-h-screen bg-[#fbf6ef] px-6 py-16 text-[#1f1a17]">
      <div className="mx-auto max-w-4xl">
        <Image
          src="/kept/app-icon.png"
          alt="Kept app icon"
          width={96}
          height={96}
          className="mb-8 rounded-[22%] shadow-sm"
          priority
        />

        <p className="mb-4 inline-block rounded-[999px] bg-[#ff5a36]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#e8492a]">
          Local-first · No account
        </p>
        <h1 className="text-5xl font-bold leading-tight tracking-[-0.04em] sm:text-7xl">Kept</h1>
        <p className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-[#6b5e55] sm:text-3xl">
          Your habits, on your devices.
        </p>
        <p className="mt-6 max-w-2xl text-xl leading-8 text-[#4a3f38]">
          Kept is a local-first habit tracker for iPhone, iPad and Android. Your habits live on your
          own devices, not in an account, and sync between them is sealed end to end. Check things
          off, keep your streaks going, and when a habit has become part of you, keep it.
        </p>

        <div className="mt-10 flex flex-wrap gap-3 text-sm font-medium">
          <Link
            href="/kept/support"
            className="rounded-[999px] bg-[#ff5a36] px-5 py-3 text-white transition hover:bg-[#e8492a]"
          >
            Support
          </Link>
          <Link
            href="/kept/privacy"
            className="rounded-[999px] border border-[#f2c9b9] px-5 py-3 text-[#1f1a17] transition hover:bg-[#f7e6dc]"
          >
            Privacy Policy
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {screens.map((screen) => (
            <Image
              key={screen.src}
              src={screen.src}
              alt={screen.alt}
              width={600}
              height={1303}
              className="h-auto w-full rounded-[1.25rem] shadow-lg ring-1 ring-[rgba(0,0,0,0.06)] sm:rounded-[1.75rem]"
            />
          ))}
        </div>
        <Image
          src="/kept/ipad.png"
          alt="Kept on iPad: Today next to a habit's streaks and calendar"
          width={1200}
          height={832}
          className="mt-4 h-auto w-full rounded-lg shadow-lg ring-1 ring-[rgba(0,0,0,0.06)] sm:mt-6 sm:rounded-xl"
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {features.map((feature) => (
            <section key={feature.title}>
              <h2 className="text-xl font-semibold tracking-[-0.01em]">{feature.title}</h2>
              <p className="mt-2 leading-7 text-[#4a3f38]">{feature.text}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
