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

// export let loader: LoaderFunction = async ({ request, params }: any) => {
//   let locale = await i18next.getLocale(request);
//   const data = await client.fetch(`*[_type == "homepage"]`);
//   return { data: data[0], locale, params };
// };

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const initial = await loadQuery<any>(HOME_QUERY, params);
  let locale = await i18next.getLocale(request);

  return { initial, query: HOME_QUERY, params, locale };
};

// function LanguageSwitcher() {
//   const { i18n } = useTranslation();
//   const { locale } = useLoaderData<{ locale: string }>();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleLanguageSwitch = () => {
//     const newLocale = locale === "es" ? "en" : "es";
//     i18n.changeLanguage(newLocale);

//     // Construct the new path based on the current path and new locale
//     const newPath =
//       newLocale === "es"
//         ? `/es${location.pathname.replace(/^\/es/, "")}`
//         : location.pathname.replace(/^\/es/, "");

//     // Navigate to the new path
//     navigate(newPath, { replace: true });
//   };

//   return (
//     <div className="ml-auto flex items-center space-x-4">
//       <Button variant="outline" onClick={handleLanguageSwitch}>
//         {locale === "es" ? "Switch to English" : "Cambiar a Español"}
//       </Button>
//     </div>
//   );
//}

export default function Test() {
  const { initial, query, params, locale } = useLoaderData<typeof loader>();
  const { data, loading, error, encodeDataAttribute } = useQuery<
    typeof initial.data
  >(query, params, {
    // @ts-expect-error -- TODO fix the typing here
    initial,
  });

  if (error) {
    throw error;
  } else if (loading && !data) {
    return <div>Loading...</div>;
  }
  return (
    <section id="about" className="p-10 md:p-20 bg-green-100">
      <h2 className="text-4xl font-bold mb-12 text-left">Learn More</h2>
      {JSON.stringify(data.heroSection.backgroundImage)}
      <br />
      {`locale: ${locale}`}
      <img src={urlFor(data.heroSection.backgroundImage).url()} alt="" />
    </section>
  );
}
