import { useLocation } from "@remix-run/react";

export function useLocaleAwareLink() {
  const location = useLocation();
  const locale = location.pathname.split("/")[1];

  return (path: string) => {
    if (locale === "es") {
      return `/${locale}${path}`;
    }
    return path;
  };
}
