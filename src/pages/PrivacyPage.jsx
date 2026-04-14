import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'

const PINK     = '#d94391'
const PINK_DIM = 'rgba(217,67,145,0.12)'
const LAST_UPDATED = 'April 13, 2026'

const sections = [
  {
    title: '1. Introduction',
    body: `Filana ("we", "our", or "us") is committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and the choices you have regarding your information when you use the Filana mobile application and any associated services (collectively, the "Service").\n\nBy using Filana you agree to the collection and use of information as described in this policy. If you do not agree, please discontinue use of the Service.`,
  },
  {
    title: '2. Information We Collect',
    subsections: [
      {
        subtitle: '2.1 Information you provide',
        items: [
          'Account credentials — name, email address, and password when you register.',
          'Financial account details — credentials used to connect your bank or credit card accounts via our third-party data providers.',
          'Receipts and photos — images you upload or capture through the receipt-scanning feature.',
          'Support communications — messages you send to our support team.',
        ],
      },
      {
        subtitle: '2.2 Information collected automatically',
        items: [
          'Transaction data — transaction records retrieved from connected financial accounts.',
          'Usage data — features accessed, session duration, and in-app interactions.',
          'Device information — device model, operating system version, and a unique device identifier.',
          'Log data — IP address, crash reports, and performance diagnostics.',
        ],
      },
      {
        subtitle: '2.3 Information from third parties',
        items: [
          'Financial data aggregators — we use bank-level third-party providers (such as Plaid or similar) to securely retrieve your transaction data. Their own privacy policies apply to data they hold.',
        ],
      },
    ],
  },
  {
    title: '3. How We Use Your Information',
    list: [
      'To provide, operate, and improve the Service.',
      'To categorize transactions and generate financial insights using AI models.',
      'To authenticate your identity and keep your account secure.',
      'To send you transactional emails and, with your consent, product updates.',
      'To respond to your support requests.',
      'To comply with applicable legal obligations.',
      'To detect, investigate, and prevent fraud or abuse.',
    ],
  },
  {
    title: '4. How We Share Your Information',
    body: `We do not sell your personal information. We may share data with:\n\n**Service providers** — companies that help us operate the Service (cloud hosting, analytics, payment processors). They are contractually bound to process data only as instructed.\n\n**Financial data aggregators** — to connect your accounts as directed by you.\n\n**Legal authorities** — when required by law, court order, or to protect the rights and safety of our users and the public.\n\n**Business transfers** — in the event of a merger, acquisition, or asset sale, your data may transfer to the new entity, subject to the same privacy commitments.`,
  },
  {
    title: '5. Data Security',
    body: `We implement industry-standard safeguards to protect your information:\n\n• All data is encrypted in transit using TLS 1.2 or higher.\n• Sensitive data at rest is encrypted using AES-256.\n• We maintain read-only access to connected financial accounts — Filana can never initiate transactions.\n• Access to production systems is restricted to authorised employees and audited regularly.\n\nNo method of transmission or storage is 100% secure. We encourage you to use a strong, unique password and to contact us immediately if you suspect unauthorised access.`,
  },
  {
    title: '6. Data Retention',
    body: `We retain your personal data for as long as your account is active or as needed to provide the Service. If you delete your account, we will remove or anonymise your data within 30 days, except where we are required to retain it for legal, regulatory, or fraud-prevention purposes.`,
  },
  {
    title: '7. Your Rights and Choices',
    list: [
      'Access — request a copy of the personal data we hold about you.',
      'Correction — ask us to correct inaccurate or incomplete data.',
      'Deletion — request that we delete your account and associated data.',
      'Portability — receive your data in a structured, machine-readable format.',
      'Opt-out of marketing — unsubscribe from promotional emails at any time using the link in those emails or via app settings.',
      'Connected accounts — disconnect any linked financial account at any time from the app.',
    ],
    body_after: 'To exercise any of these rights, contact us at privacy@filana.app. We will respond within 30 days.',
  },
  {
    title: '8. Children\'s Privacy',
    body: `Filana is not directed at children under the age of 13 (or 16 in the European Economic Area). We do not knowingly collect personal information from children. If you believe a child has provided us with their data, please contact us and we will delete it promptly.`,
  },
  {
    title: '9. International Transfers',
    body: `Your data may be processed in countries other than your own. When we transfer data outside of the European Economic Area, we rely on Standard Contractual Clauses or other lawful transfer mechanisms approved by the relevant authorities.`,
  },
  {
    title: '10. Third-Party Links',
    body: `The Service may contain links to third-party websites or services. We are not responsible for their privacy practices and encourage you to review their policies before sharing any information.`,
  },
  {
    title: '11. Changes to This Policy',
    body: `We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page and, for material changes, notify you via email or an in-app notice. Continued use of the Service after changes become effective constitutes your acceptance of the revised policy.`,
  },
  {
    title: '12. Contact Us',
    body: `If you have questions or concerns about this Privacy Policy or our data practices, please reach out:\n\nFilana Privacy Team\nEmail: privacy@filana.app\nMailing address: 123 Finance St, San Francisco, CA 94105, United States`,
  },
]

function renderBody(text) {
  return text.split('\n').map((line, i) => {
    if (!line.trim()) return <br key={i} />
    // Bold **text**
    const parts = line.split(/(\*\*[^*]+\*\*)/)
    return (
      <p key={i} className="mb-0 leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
        {parts.map((part, j) =>
          part.startsWith('**') && part.endsWith('**')
            ? <span key={j} style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 600 }}>{part.slice(2, -2)}</span>
            : part
        )}
      </p>
    )
  })
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: '#050505' }}>
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-12 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-6 text-[12px] font-medium tracking-widest uppercase"
            style={{ background: PINK_DIM, color: PINK, letterSpacing: '0.15em' }}
          >
            Legal
          </div>
          <h1 className="text-[40px] md:text-[58px] font-bold tracking-tight text-white leading-[1.05] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.22)' }}>
            Last updated: {LAST_UPDATED}
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 py-16 pb-32">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-12"
          >
            <h2 className="text-[20px] font-semibold text-white mb-4 tracking-tight">
              {section.title}
            </h2>

            {section.body && (
              <div className="flex flex-col gap-2 text-[15px]">
                {renderBody(section.body)}
              </div>
            )}

            {section.list && (
              <ul className="flex flex-col gap-2.5 text-[15px] mt-1">
                {section.list.map((item, j) => (
                  <li key={j} className="flex items-start gap-3" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    <span
                      className="mt-[4px] w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center"
                      style={{ background: PINK_DIM }}
                    >
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path d="M1 3l2 2 4-4" stroke={PINK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {section.body_after && (
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {section.body_after}
              </p>
            )}

            {section.subsections && section.subsections.map((sub, j) => (
              <div key={j} className="mt-6">
                <h3 className="text-[14px] font-semibold mb-3" style={{ color: 'rgba(255,255,255,0.60)' }}>
                  {sub.subtitle}
                </h3>
                <ul className="flex flex-col gap-2.5 text-[15px]">
                  {sub.items.map((item, k) => (
                    <li key={k} className="flex items-start gap-3" style={{ color: 'rgba(255,255,255,0.40)' }}>
                      <span
                        className="mt-[4px] w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center"
                        style={{ background: PINK_DIM }}
                      >
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                          <path d="M1 3l2 2 4-4" stroke={PINK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        ))}

        {/* Bottom rule */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '40px' }} />
        <p className="text-[13px] text-center" style={{ color: 'rgba(255,255,255,0.18)' }}>
          &copy; 2026 Filana. All rights reserved.
        </p>
      </article>
    </div>
  )
}
