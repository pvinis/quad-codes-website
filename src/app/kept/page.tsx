import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "When it's part of you, keep it",
    text: "A habit that has stuck goes on your Kept shelf, with its history, and stops asking. Kept suggests it once a habit has clearly stuck, and never for things like medication.",
  },
  {
    title: "No account",
    text: "Your habits stay on your own devices. Pair a second one with a QR code, an iPhone with an Android phone too, and they sync, sealed so nothing in between can read them.",
  },
  {
    title: "Streaks that are fair",
    text: "Skip a day when you're ill or travelling, pause a habit for a season, or mark a day failed. Days can end at 4am, so a late night still counts for its evening.",
  },
  {
    title: "Widgets everywhere",
    text: "Check things off from the home screen and the lock screen, Control Center on iPhone, and a Quick Settings tile on Android.",
  },
];

const screens = [
  { src: "/kept/today.png", alt: "Today, with a habit that looks like part of you" },
  { src: "/kept/moment.png", alt: "A habit kept, with its stamp" },
  { src: "/kept/shelf.png", alt: "The Kept shelf" },
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

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#ff5a36]">
          Quad.codes app
        </p>
        <h1 className="text-5xl font-bold leading-tight tracking-[-0.04em] sm:text-7xl">Kept</h1>
        <p className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-[#6b5e55] sm:text-3xl">
          Habits you keep.
        </p>
        <p className="mt-6 max-w-2xl text-xl leading-8 text-[#4a3f38]">
          A habit tracker for iPhone, iPad and Android. Check things off, keep your streaks going, and
          when a habit has become part of you, keep it.
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

        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8">
          {screens.map((screen) => (
            <Image
              key={screen.src}
              src={screen.src}
              alt={screen.alt}
              width={598}
              height={1300}
              className="h-auto w-full rounded-[1.5rem] shadow-lg ring-1 ring-[rgba(0,0,0,0.06)] sm:rounded-[2.25rem]"
            />
          ))}
        </div>

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
