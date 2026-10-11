import { LegalDocument } from "@/components/legal/LegalDocument";
import { useT } from "@/lib/i18n";
import { TERMS_DOC } from "@/lib/legal-pages";

export function TermsPage() {
  const { lang } = useT();
  return <LegalDocument doc={TERMS_DOC[lang]} />;
}

export default TermsPage;
