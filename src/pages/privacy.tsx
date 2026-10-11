import { LegalDocument } from "@/components/legal/LegalDocument";
import { useT } from "@/lib/i18n";
import { PRIVACY_DOC } from "@/lib/legal-pages";

export function PrivacyPage() {
  const { lang } = useT();
  return <LegalDocument doc={PRIVACY_DOC[lang]} />;
}

export default PrivacyPage;
