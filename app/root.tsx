import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import React, { useEffect } from "react";
import { useLoaderData, Link, Form } from "@remix-run/react";
import LanguageSwitcher from "~/components/LanguageSwitcher";
import { json } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node";
import { useChangeLanguage } from "remix-i18next/react";
import { useTranslation } from "react-i18next";
import i18next from "~/i18next.server";
import "./tailwind.css";
import LocaleAwareLink from "~/components/LocaleAwareLink";

export const loader: any = async ({ request }: any) => {
  let locale = await i18next.getLocale(request);
  let ENV = {
    SANITY_STUDIO_PROJECT_ID: process.env.SANITY_STUDIO_PROJECT_ID,
    SANITY_STUDIO_DATASET: process.env.SANITY_STUDIO_DATASET,
    SANITY_STUDIO_URL: process.env.SANITY_STUDIO_URL,
    SANITY_STUDIO_STEGA_ENABLED: process.env.SANITY_STUDIO_STEGA_ENABLED,
  };
  return json({ locale, ENV });
};

export let handle = {
  // In the handle export, we can add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  // TIP: In most cases, you should set this to your defaultNS from your i18n config
  // or if you did not set one, set it to the i18next default namespace "translation"
  i18n: "common",
};

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  let { locale, ENV } = useLoaderData<typeof loader>();
  let { i18n } = useTranslation();
  useChangeLanguage(locale);
  let { t } = useTranslation();

  // useEffect(() => {
  //   console.log("Locale changed:", locale);
  // }, [locale]);

  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <LocaleAwareLink
              className="mr-6 flex items-center space-x-2"
              to="/"
            >
              <img
                src="https://via.placeholder.com/64?text=Logo"
                alt={t("elYunqueLogoAlt")}
                className="h-8 w-8"
              />
              <span className="hidden font-bold sm:inline-block">
                {t("elYunque")}
              </span>
            </LocaleAwareLink>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <LocaleAwareLink to="/test">{t("visit")}</LocaleAwareLink>
              {/* <Link to="/visit">{t("visit")}</Link>
              <Link to="/flora-fauna">{t("floraFauna")}</Link>
              <Link to="/conservation">{t("conservation")}</Link>
              <Link to="/research">{t("research")}</Link>
              <Link to="/education">{t("education")}</Link>
              <Link to="/gallery">{t("gallery")}</Link> */}
            </nav>
            <div className="ml-auto flex items-center space-x-4">
              <LanguageSwitcher />
            </div>
          </div>
        </header>

        {children}
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
