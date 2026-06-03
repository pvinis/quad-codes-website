import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Link from "next/link";

const portfolioItems = [
  {
    name: "Hour Bell",
    description: "A tiny local app for gentle recurring chimes.",
    link: "/hour-bell",
    image: "/hour-bell/app-icon.png",
  },
  {
    name: "Browsers Party",
    description:
      "The most complete collection of browser info on the internet.",
    link: "https://browsers.party",
    image:
      "https://raw.githubusercontent.com/pvinis/browsers-party/refs/heads/main/public/image.webp",
  },
  {
    name: "LeanScaper Mobile App",
    description:
      "A field app for landscape crews to record huddles, make requests, and get AI-powered support.",
    link: "https://apps.apple.com/us/app/leanscaper-ai/id6754711316",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/13/e5/5a/13e55a32-6c7d-4205-ea5d-3307e67998a3/app-icon-0-0-1x_U007epad-0-1-sRGB-85-220.png/512x512bb.jpg",
  },
  {
    name: "LeanScaper Website",
    description:
      "Part of the LeanScaper redesign for an AI-powered platform built for landscaping businesses.",
    link: "https://leanscaper.com",
    image:
      "https://cdn.prod.website-files.com/690925c63cf367c8a9d2bbdb/69c13ad68558c110717d9331_Website%20Homepage%20Callout.avif",
  },
  {
    name: "Autographer Mobile App",
    description:
      "A signature style generator for creating custom electronic signatures, logos, and watermarks.",
    link: "https://apps.apple.com/us/app/autographer/id6499551485",
    image:
      "https://static1.squarespace.com/static/664daca4df8aed12af51f098/t/664efb0e4e285262c5a581bc/1716452112804/Autographer-Logo.jpg?format=1500w",
  },
  {
    name: "PaceVer",
    description:
      "A versioning specification for mobile apps with native and over-the-air release channels.",
    link: "https://pacever.org",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 240">
        <rect width="420" height="240" rx="32" fill="#111827" />
        <path
          d="M72 122h284"
          fill="none"
          stroke="#f9fafb"
          strokeLinecap="round"
          strokeWidth="14"
        />
        <circle cx="108" cy="122" r="30" fill="#60a5fa" />
        <circle cx="210" cy="122" r="30" fill="#fbbf24" />
        <circle cx="312" cy="122" r="30" fill="#34d399" />
        <text
          x="210"
          y="58"
          fill="#f9fafb"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="34"
          fontWeight="700"
          textAnchor="middle"
        >
          PaceVer
        </text>
        <text
          x="108"
          y="185"
          fill="#dbeafe"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="18"
          fontWeight="700"
          textAnchor="middle"
        >
          MARKETING
        </text>
        <text
          x="210"
          y="185"
          fill="#fef3c7"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="18"
          fontWeight="700"
          textAnchor="middle"
        >
          NATIVE
        </text>
        <text
          x="312"
          y="185"
          fill="#d1fae5"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="18"
          fontWeight="700"
          textAnchor="middle"
        >
          OTA
        </text>
      </svg>
    ),
  },
  {
    name: "Markdown Viewer",
    description: "An easy way to display markdown notes as full webpages.",
    link: "https://md.quad.codes",
    image: "/mdtw.png",
  },
  {
    name: "Are.na",
    description:
      "Online software for saving and organizing the content that is important to you.",
    link: "https://are.na",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.38 88.986">
        <path d="M148.93 62.356l-20.847-16.384c-1.276-1-1.276-2.642 0-3.645l20.848-16.38c1.28-1.002 1.815-2.695 1.19-3.76-.626-1.062-2.374-1.44-3.88-.84l-24.79 9.874c-1.507.606-2.927-.22-3.153-1.83L114.57 2.926C114.34 1.317 113.13 0 111.877 0c-1.247 0-2.456 1.317-2.68 2.925l-3.73 26.467c-.228 1.61-1.646 2.434-3.155 1.83l-24.38-9.71c-1.512-.602-3.975-.602-5.483 0l-24.384 9.71c-1.508.604-2.928-.22-3.154-1.83L41.186 2.925C40.956 1.317 39.748 0 38.5 0c-1.252 0-2.463 1.317-2.688 2.925l-3.73 26.467c-.226 1.61-1.645 2.434-3.153 1.83L4.14 21.35c-1.507-.603-3.252-.223-3.878.838-.625 1.066-.092 2.76 1.184 3.76l20.85 16.38c1.277 1.003 1.277 2.645 0 3.646L1.446 62.356C.166 63.358-.364 65.152.26 66.34c.627 1.19 2.372 1.668 3.877 1.064l24.567-9.866c1.51-.603 2.914.218 3.125 1.828l3.544 26.696c.214 1.607 1.618 2.923 3.12 2.923 1.5 0 2.905-1.315 3.12-2.923l3.55-26.696c.21-1.61 1.62-2.43 3.122-1.828l24.164 9.698c1.506.606 3.97.606 5.477 0l24.16-9.698c1.504-.603 2.91.218 3.125 1.828l3.55 26.696c.212 1.607 1.617 2.923 3.115 2.923 1.502 0 2.907-1.315 3.12-2.923l3.55-26.696c.216-1.61 1.62-2.43 3.124-1.828l24.57 9.866c1.5.604 3.25.125 3.876-1.063.627-1.186.094-2.98-1.185-3.982zM95.89 46.18L77.53 60.315c-1.285.99-3.393.99-4.674 0L54.49 46.18c-1.284-.99-1.294-2.62-.02-3.625l18.4-14.493c1.274-1.005 3.363-1.005 4.638 0l18.4 14.493c1.277 1.004 1.267 2.634-.02 3.626z"></path>
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CodeIcon className="w-6 h-6" />
          <span className="text-lg font-semibold">Quad.codes</span>
        </div>
        <div className="text-sm font-medium gap-6 flex items-center">
          <Link href="https://pav.gg/cvmd">Pavlos Vinieratos</Link>
          <Link href="https://pav.gg/cvmd">My CV</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </header>

      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto grid gap-12">
          <section>
            <h2 className="text-3xl font-bold mb-4">Services</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                <p className="text-muted-foreground">
                  I create modern, responsive, and user-friendly websites using
                  the latest technologies.
                </p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  Mobile Development
                </h3>
                <p className="text-muted-foreground">
                  I develop cross-platform mobile apps that provide a seamless
                  user experience.
                </p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                <p className="text-muted-foreground">
                  I design intuitive and visually appealing user interfaces that
                  enhance the overall user experience.
                </p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Consulting</h3>
                <p className="text-muted-foreground">
                  I provide expert advice and guidance to help you make informed
                  decisions for your project.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {portfolioItems.map((item) => (
                <Link href={item.link} key={item.name}>
                  <Card>
                    <CardHeader className="size-[370px] flex items-center justify-center">
                      {item.svg ? (
                        item.svg
                      ) : (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      )}
                    </CardHeader>
                    <CardContent>
                      <h3 className="text-xl font-semibold mb-2">
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="text-sm">&copy; 2024 Quad.codes</div>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="text-sm hover:underline" prefetch={false}>
            Contact
          </Link>
        </div>
      </footer>
    </div>
  );
}

function CodeIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
