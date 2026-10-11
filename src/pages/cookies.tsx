import { LegalDocument } from "@/components/legal/LegalDocument";
import { useT } from "@/lib/i18n";
import { COOKIES_DOC } from "@/lib/cookie-statement";

export function CookiesPage() {
  const { lang } = useT();
  return <LegalDocument doc={COOKIES_DOC[lang]} />;
}

export default CookiesPage;
