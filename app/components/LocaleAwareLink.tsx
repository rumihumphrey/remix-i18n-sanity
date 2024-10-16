// app/components/LocaleAwareLink.tsx
import { Link } from "@remix-run/react";
import { useLocaleAwareLink } from "~/utils/localeUtils";

export default function LocaleAwareLink({ to, children, ...props }) {
  const localeAwareLink = useLocaleAwareLink();
  const href = localeAwareLink(to);

  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
}
