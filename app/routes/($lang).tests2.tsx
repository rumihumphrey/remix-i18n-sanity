import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import {
  useLoaderData,
  Link,
  useNavigate,
  useLocation,
  Form,
} from "@remix-run/react";
import i18next from "~/i18next.server";
import { client } from "~/sanity/client";
import { HOME_QUERY } from "~/sanity/queries";
import { useQuery } from "@sanity/react-loader";
import { type LoaderFunctionArgs } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import { urlFor } from "~/sanity/image";
import { loadQuery } from "~/sanity/loader.server";
import { Button } from "~/components/ui/button";

export let loader: LoaderFunction = async ({ request, params }: any) => {
  let locale = await i18next.getLocale(request);
  const data = await client.fetch(`*[_type == "homepage"]`);
  return { data: data[0], locale, params };
};

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const { locale } = useLoaderData<{ locale: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageSwitch = () => {
    const newLocale = locale === "es" ? "en" : "es";
    i18n.changeLanguage(newLocale);

    // Construct the new path based on the current path and new locale
    const newPath =
      newLocale === "es"
        ? `/es${location.pathname.replace(/^\/es/, "")}`
        : location.pathname.replace(/^\/es/, "");
    console.log(newPath);
    // Navigate to the new path
    navigate(newPath, { replace: true });
  };

  return (
    <div className="ml-auto flex items-center space-x-4">
      <Button variant="outline" onClick={handleLanguageSwitch}>
        {locale === "es" ? "Switch to English" : "Cambiar a Español"}
      </Button>
    </div>
  );
}

export default function Tests() {
  const { data } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-green-50">
      {/* Header */}
      <header className="bg-green-800 text-white p-4 md:p-6 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">El Yunque Rainforest</div>
          <ul className="flex space-x-6 text-lg">
            {data.headerLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.href} className="hover:text-green-400">
                  {link.label}
                </Link>
              </li>
            ))}
            <LanguageSwitcher />
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative w-full h-[30vh] bg-cover bg-center flex items-center justify-center p-6 md:p-6 md:p-8"
        style={{
          backgroundImage: `url('https://via.placeholder.com/1200x600')`,
        }}
      >
        <div className="bg-black bg-opacity-50 text-white p-4 md:p-6 md:p-16 rounded-lg text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {data.heroSection.title}
          </h1>
          <p className="text-xl md:text-2xl">{data.heroSection.description}</p>
          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition-all">
            {data.heroSection.buttonLabel}
          </button>
        </div>
      </section>

      {/* Quick Links */}
      <section
        id="flora-fauna"
        className="p-10 md:p-20 grid gap-10 grid-cols-1 md:grid-cols-3"
      >
        {data.quickLinks.map((link, index) => (
          <div
            key={index}
            className="bg-white p-10 rounded-lg shadow-md text-left hover:shadow-xl transition-all"
          >
            <h2 className="text-3xl font-bold mb-4">{link.title}</h2>
            <img src={link.image} alt={link.alt} className="mb-4 rounded-lg" />
            <p className="mb-6">{link.description}</p>
            <Link
              to={link.href}
              className="text-green-700 hover:text-green-900 font-semibold"
            >
              Learn More &rarr;
            </Link>
          </div>
        ))}
      </section>

      {/* Featured Content */}
      <section className="p-10 md:p-20">
        <h2 className="text-4xl font-bold mb-12 text-left">Recent Updates</h2>
        <div className="bg-white p-10 rounded-lg shadow-md md:flex items-start">
          <img
            src={data.recentUpdate.image}
            alt={data.recentUpdate.alt}
            className="mb-6 md:mb-0 md:mr-8 rounded-lg"
          />
          <div>
            <h3 className="text-3xl font-bold mb-4">
              {data.recentUpdate.title}
            </h3>
            <p className="mb-6">{data.recentUpdate.description}</p>
            <Link
              to={data.recentUpdate.href}
              className="text-green-700 hover:text-green-900 font-semibold"
            >
              Read More &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* History & Significance Section */}
      <section id="about" className="p-10 md:p-20 bg-green-100">
        <h2 className="text-4xl font-bold mb-12 text-left">
          {data.historySection.title}
        </h2>
        <div className="bg-white p-10 rounded-lg shadow-md text-left">
          <p className="mb-6">{data.historySection.description}</p>
          <Link
            to={data.historySection.href}
            className="text-green-700 hover:text-green-900 font-semibold"
          >
            Learn More &rarr;
          </Link>
        </div>
      </section>

      {/* Ecology & Conservation Section */}
      <section id="conservation" className="p-10 md:p-20">
        <h2 className="text-4xl font-bold mb-12 text-left">
          {data.conservationSection.title}
        </h2>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          {data.conservationSection.items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-lg shadow-md text-left"
            >
              <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
              <p className="mb-6">{item.description}</p>
              <Link
                to={item.href}
                className="text-green-700 hover:text-green-900 font-semibold"
              >
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Educational Resources Section */}
      <section className="p-10 md:p-20 bg-green-100">
        <h2 className="text-4xl font-bold mb-12 text-left">
          {data.educationSection.title}
        </h2>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          {data.educationSection.items.map((resource, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-lg shadow-md text-left"
            >
              <h3 className="text-3xl font-bold mb-4">{resource.title}</h3>
              <p className="mb-6">{resource.description}</p>
              <Link
                to={resource.href}
                className="text-green-700 hover:text-green-900 font-semibold"
              >
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer - Contact & Support Section */}
      <footer id="contact" className="bg-green-800 text-white p-10 md:p-16">
        <div className="container mx-auto text-left">
          <h2 className="text-3xl font-bold mb-6">
            {data.contactSection.title}
          </h2>
          <p className="mb-6">{data.contactSection.description}</p>
          <Link
            to={data.contactSection.href}
            className="text-green-400 hover:text-green-500 font-semibold"
          >
            Contact Us &rarr;
          </Link>
          <div className="mt-8">
            <p>Follow us:</p>
            <div className="flex justify-start space-x-4 mt-4">
              <a href="#" className="hover:text-green-500">
                Facebook
              </a>
              <a href="#" className="hover:text-green-500">
                Twitter
              </a>
              <a href="#" className="hover:text-green-500">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
