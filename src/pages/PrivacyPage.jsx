import LegalPage from '../components/LegalPage'
import { LAST_UPDATED, CONTACT_EMAIL, INTRO, SUMMARY, TOC, sections } from '../content/privacy'

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="What we collect, why we collect it, and how you stay in control of your data."
      lastUpdated={LAST_UPDATED}
      email={CONTACT_EMAIL}
      intro={INTRO}
      summary={SUMMARY}
      toc={TOC}
      sections={sections}
    />
  )
}
