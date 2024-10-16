import { useTranslation } from "react-i18next";
import {
  Link,
  useLoaderData,
  useNavigate,
  useLocation,
} from "@remix-run/react";
import { Button } from "~/components/ui/button";

export default function LanguageSwitcher() {
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

    // Navigate to the new path
    window.location.href = newPath;
  };

  return (
    <div className="ml-auto flex items-center space-x-4">
      <Button variant="outline" onClick={handleLanguageSwitch}>
        {locale === "es" ? "Switch to English" : "Cambiar a Español"}
      </Button>
    </div>
  );
}
