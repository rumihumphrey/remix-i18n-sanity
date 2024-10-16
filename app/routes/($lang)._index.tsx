import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData, Link, Form } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { Facebook, Instagram, Twitter, ChevronDown } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";
import sanityClient from "~/sanityClient";
import i18next from "~/i18next.server";
import LanguageSwitcher from "~/components/LanguageSwitcher";

export let loader: LoaderFunction = async ({ request }: any) => {
  let locale = await i18next.getLocale(request);
  const data = await sanityClient.fetch(
    `*[_type == "post" && language == "${locale}"]`
  );
  const heroImage = "https://via.placeholder.com/1200x600?text=El+Yunque+Hero";
  const exploreImages = [
    {
      src: "https://via.placeholder.com/400x300?text=Flora",
      alt: "Flora",
      title: "Diverse Flora",
      description: "Discover the unique plant life of El Yunque",
    },
    {
      src: "https://via.placeholder.com/400x300?text=Fauna",
      alt: "Fauna",
      title: "Exotic Fauna",
      description: "Encounter the wildlife that calls El Yunque home",
    },
    {
      src: "https://via.placeholder.com/400x300?text=Waterfall",
      alt: "Waterfall",
      title: "Natural Wonders",
      description: "Experience breathtaking waterfalls and vistas",
    },
  ];
  const news = [
    {
      title: "New Species Discovered",
      description:
        "Researchers have identified a new frog species in El Yunque.",
    },
    {
      title: "Trail Restoration Project",
      description: "Volunteers needed for upcoming trail maintenance work.",
    },
  ];
  const galleryImages = Array.from({ length: 8 }, (_, i) => ({
    src: `https://via.placeholder.com/400x300?text=Gallery+Image+${i + 1}`,
    alt: `Gallery Image ${i + 1}`,
  }));

  return { data, locale, heroImage, exploreImages, news, galleryImages };
};

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { data, locale, heroImage, exploreImages, news, galleryImages } =
    useLoaderData<typeof loader>();
  let { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/64?text=Logo"
              alt={t("elYunqueLogoAlt")}
              className="h-8 w-8"
            />
            <span className="hidden font-bold sm:inline-block">
              {t("elYunque")}
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/about">{t("about")}</Link>
            <Link to="/visit">{t("visit")}</Link>
            <Link to="/flora-fauna">{t("floraFauna")}</Link>
            <Link to="/conservation">{t("conservation")}</Link>
            <Link to="/research">{t("research")}</Link>
            <Link to="/education">{t("education")}</Link>
            <Link to="/gallery">{t("gallery")}</Link>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <LanguageSwitcher />
          </div>
        </div>
      </header> */}

      <main>
        <section className="relative">
          <img
            src={heroImage}
            alt="El Yunque Rainforest"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">
                Welcome to El Yunque National Forest
              </h1>
              <p className="text-xl mb-6">
                Discover Puerto Rico's Natural Wonder
              </p>
              <Button size="lg">Plan Your Visit</Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Explore El Yunque
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {exploreImages.map((image, index) => (
                <div key={index} className="text-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                  <p>{image.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {t("latestNewsEvents")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {news.map((item, index) => (
                <div key={index} className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {t(item.title)}
                  </h3>
                  <p className="mb-4">{t(item.description)}</p>
                  <Button variant="outline">{t("readMore")}</Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Image Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover rounded-lg hover:opacity-80 transition-opacity"
                />
              ))}
            </div>
            <div className="text-center mt-8">
              <Button>View Full Gallery</Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Stay Connected
            </h2>
            <div className="max-w-md mx-auto">
              <Form method="post" className="flex gap-2">
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <Button type="submit">Subscribe</Button>
              </Form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About El Yunque</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about">Our Mission</Link>
                </li>
                <li>
                  <Link to="/about/history">History</Link>
                </li>
                <li>
                  <Link to="/about/team">Our Team</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Visit</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/visit/plan">Plan Your Trip</Link>
                </li>
                <li>
                  <Link to="/visit/trails">Trails</Link>
                </li>
                <li>
                  <Link to="/visit/faq">FAQ</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/volunteer">Volunteer</Link>
                </li>
                <li>
                  <Link to="/donate">Donate</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
            <p>&copy; 2023 El Yunque National Forest. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const resources = [
  {
    href: "https://remix.run/start/quickstart",
    text: "Quick Start (5 min)",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M8.51851 12.0741L7.92592 18L15.6296 9.7037L11.4815 7.33333L12.0741 2L4.37036 10.2963L8.51851 12.0741Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: "https://remix.run/start/tutorial",
    text: "Tutorial (30 min)",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M4.561 12.749L3.15503 14.1549M3.00811 8.99944H1.01978M3.15503 3.84489L4.561 5.2508M8.3107 1.70923L8.3107 3.69749M13.4655 3.84489L12.0595 5.2508M18.1868 17.0974L16.635 18.6491C16.4636 18.8205 16.1858 18.8205 16.0144 18.6491L13.568 16.2028C13.383 16.0178 13.0784 16.0347 12.915 16.239L11.2697 18.2956C11.047 18.5739 10.6029 18.4847 10.505 18.142L7.85215 8.85711C7.75756 8.52603 8.06365 8.21994 8.39472 8.31453L17.6796 10.9673C18.0223 11.0653 18.1115 11.5094 17.8332 11.7321L15.7766 13.3773C15.5723 13.5408 15.5554 13.8454 15.7404 14.0304L18.1868 16.4767C18.3582 16.6481 18.3582 16.926 18.1868 17.0974Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: "https://remix.run/docs",
    text: "Remix Docs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "https://rmx.as/discord",
    text: "Join Discord",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M15.0686 1.25995L14.5477 1.17423L14.2913 1.63578C14.1754 1.84439 14.0545 2.08275 13.9422 2.31963C12.6461 2.16488 11.3406 2.16505 10.0445 2.32014C9.92822 2.08178 9.80478 1.84975 9.67412 1.62413L9.41449 1.17584L8.90333 1.25995C7.33547 1.51794 5.80717 1.99419 4.37748 2.66939L4.19 2.75793L4.07461 2.93019C1.23864 7.16437 0.46302 11.3053 0.838165 15.3924L0.868838 15.7266L1.13844 15.9264C2.81818 17.1714 4.68053 18.1233 6.68582 18.719L7.18892 18.8684L7.50166 18.4469C7.96179 17.8268 8.36504 17.1824 8.709 16.4944L8.71099 16.4904C10.8645 17.0471 13.128 17.0485 15.2821 16.4947C15.6261 17.1826 16.0293 17.8269 16.4892 18.4469L16.805 18.8725L17.3116 18.717C19.3056 18.105 21.1876 17.1751 22.8559 15.9238L23.1224 15.724L23.1528 15.3923C23.5873 10.6524 22.3579 6.53306 19.8947 2.90714L19.7759 2.73227L19.5833 2.64518C18.1437 1.99439 16.6386 1.51826 15.0686 1.25995ZM16.6074 10.7755L16.6074 10.7756C16.5934 11.6409 16.0212 12.1444 15.4783 12.1444C14.9297 12.1444 14.3493 11.6173 14.3493 10.7877C14.3493 9.94885 14.9378 9.41192 15.4783 9.41192C16.0471 9.41192 16.6209 9.93851 16.6074 10.7755ZM8.49373 12.1444C7.94513 12.1444 7.36471 11.6173 7.36471 10.7877C7.36471 9.94885 7.95323 9.41192 8.49373 9.41192C9.06038 9.41192 9.63892 9.93712 9.6417 10.7815C9.62517 11.6239 9.05462 12.1444 8.49373 12.1444Z"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];
