import Image from "next/image";
import Link from "next/link";

export default function HourBellPage() {
  return (
    <main className="min-h-screen bg-[#f5edda] px-6 py-10 text-[#2a2118]">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-2xl flex-col justify-center">
        <Image
          src="/hour-bell/app-icon.png"
          alt="Hour Bell app icon"
          width={96}
          height={96}
          className="mb-8 rounded-3xl shadow-sm"
          priority
        />

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#8b6f3e]">
          Quad.codes app
        </p>
        <h1 className="font-[var(--font-hour-bell)] text-5xl font-semibold leading-tight tracking-[-0.04em] sm:text-7xl">
          Hour Bell
        </h1>
        <p className="mt-6 max-w-xl text-xl leading-8 text-[#5c4a38]">
          A tiny local app for gentle recurring chimes. Choose hourly, half-hourly,
          every few hours, or your own hours.
        </p>

        <div className="mt-10 flex flex-wrap gap-3 text-sm font-medium">
          <Link
            href="/hour-bell/privacy"
            className="rounded-full bg-[#2a2118] px-5 py-3 text-[#fff8ea] transition hover:bg-[#443424]"
          >
            Privacy Policy
          </Link>
          <Link
            href="/hour-bell/support"
            className="rounded-full border border-[#cfb987] px-5 py-3 text-[#2a2118] transition hover:bg-[#eadbb8]"
          >
            Support
          </Link>
        </div>
      </div>
    </main>
  );
}
