import LegalPage from '../components/LegalPage'
import { LAST_UPDATED, CONTACT_EMAIL, TOC, sections } from '../content/terms'

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      subtitle="The agreement between you and Filana when you use the app and website."
      lastUpdated={LAST_UPDATED}
      email={CONTACT_EMAIL}
      toc={TOC}
      sections={sections}
    />
  )
}
