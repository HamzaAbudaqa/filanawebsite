// ─────────────────────────────────────────────────────────────────────────────
// Filana Terms of Service — single source of truth.
// Consumed by both src/pages/TermsPage.jsx (React) and
// scripts/prerender-legal.mjs (static HTML build). Keep this file framework-free
// (pure data, no imports) so Node can import it directly at build time.
// ─────────────────────────────────────────────────────────────────────────────

export const LAST_UPDATED = 'June 25, 2026'
export const CONTACT_EMAIL = 'hamza.daqa@gmail.com'

export const TOC = [
  { id: 'agreement',        label: '1. Agreement to These Terms' },
  { id: 'service',          label: '2. The Filana Service' },
  { id: 'eligibility',      label: '3. Eligibility' },
  { id: 'account',          label: '4. Your Account' },
  { id: 'subscription',     label: '5. Subscription, Billing, and Trials' },
  { id: 'acceptableuse',    label: '6. Acceptable Use' },
  { id: 'content',          label: '7. Your Content and Data' },
  { id: 'ai',               label: '8. AI Features and Accuracy' },
  { id: 'noadvice',         label: '9. No Professional Advice' },
  { id: 'thirdparty',       label: '10. Third-Party Services' },
  { id: 'ip',               label: '11. Intellectual Property' },
  { id: 'warranties',       label: '12. Disclaimer of Warranties' },
  { id: 'liability',        label: '13. Limitation of Liability' },
  { id: 'indemnification',  label: '14. Indemnification' },
  { id: 'termination',      label: '15. Termination' },
  { id: 'law',              label: '16. Governing Law and Venue' },
  { id: 'changes',          label: '17. Changes to These Terms' },
  { id: 'contact',          label: '18. Contact' },
]

export const sections = [
  {
    id: 'agreement',
    title: '1. Agreement to These Terms',
    body: 'These Terms of Service ("Terms") govern your access to and use of Filana\'s mobile application, marketing website, and related services (collectively, the "Service"). By creating an account or using the Service you agree to these Terms. If you do not agree, do not use the Service.',
  },
  {
    id: 'service',
    title: '2. The Filana Service',
    body: 'Filana is an AI-assisted bookkeeping tool for small businesses and self-employed individuals in Canada. The Service includes automated transaction classification, receipt matching, expense categorization, and tax estimation features. Filana is not a substitute for professional accounting, legal, or tax advice and does not file tax returns on your behalf.',
  },
  {
    id: 'eligibility',
    title: '3. Eligibility',
    body: 'You must be at least 18 years old and capable of forming a binding contract under the laws of your jurisdiction. The Service is intended for users in Canada. You are responsible for compliance with local laws if you use it elsewhere.',
  },
  {
    id: 'account',
    title: '4. Your Account',
    items: [
      'You must provide accurate information when creating your account and keep it current.',
      'You are responsible for safeguarding your credentials and for all activity that occurs under your account.',
      'Notify us immediately at hamza.daqa@gmail.com if you suspect unauthorized access.',
      'One person or business per account; account sharing is not permitted.',
    ],
  },
  {
    id: 'subscription',
    title: '5. Subscription, Billing, and Trials',
    items: [
      'Filana Pro is offered on a subscription basis (monthly or yearly), purchased through the Apple App Store or Google Play and managed by RevenueCat.',
      'A free trial may be offered for new subscribers. If a trial is provided, you will not be charged until the trial ends.',
      'Subscriptions auto-renew at the end of each billing period unless canceled at least 24 hours before renewal.',
      'Refund and cancellation policies are determined by the App Store or Google Play. To cancel, manage your subscription in your device\'s subscription settings.',
      'Prices are stated in the app at purchase and may change with at least 30 days\' notice for renewals.',
    ],
  },
  {
    id: 'acceptableuse',
    title: '6. Acceptable Use',
    intro: 'You agree not to:',
    items: [
      'Use the Service to violate any law or regulation.',
      'Upload content you do not have the right to upload, including receipts or banking data belonging to others without authorization.',
      'Attempt to reverse-engineer, decompile, or extract source code from the Service.',
      'Interfere with, probe, or attempt to disrupt the Service\'s infrastructure or security.',
      'Use automated means to access the Service without our written permission.',
      'Use the Service to build a competing product.',
    ],
  },
  {
    id: 'content',
    title: '7. Your Content and Data',
    items: [
      'You retain ownership of all data you upload or input into Filana ("Your Content").',
      'You grant Filana a limited, worldwide, non-exclusive license to host, process, and display Your Content solely as needed to operate the Service for you.',
      'We may process Your Content through third-party AI providers (see our Privacy Policy) strictly for the purpose of producing the features you use.',
      'You can export your data and delete your account at any time from Settings → Delete Account.',
    ],
  },
  {
    id: 'ai',
    title: '8. AI Features and Accuracy',
    body: 'Filana uses machine learning and large language models to categorize transactions, extract receipt data, and answer questions. AI output may be incorrect or incomplete. You are responsible for reviewing and verifying the accuracy of categorizations, tax estimates, and any other AI output before relying on them. Filana\'s tax estimates are educational projections, not filings.',
  },
  {
    id: 'noadvice',
    title: '9. No Professional Advice',
    body: 'Information provided by Filana, including categorizations, deduction suggestions, tax estimates, and assistant responses, is provided for informational purposes only and does not constitute accounting, tax, legal, or financial advice. Consult a qualified professional before relying on any output for tax filings or business decisions.',
  },
  {
    id: 'thirdparty',
    title: '10. Third-Party Services',
    body: 'The Service integrates with third-party services such as Plaid (banking), Google (Gmail), the Apple App Store, and Google Play. Your use of those services is governed by their own terms. Filana is not responsible for outages, errors, or changes in third-party services.',
  },
  {
    id: 'ip',
    title: '11. Intellectual Property',
    body: 'All right, title, and interest in the Service, including software, designs, trademarks, and content, are and will remain the exclusive property of Filana and its licensors. These Terms do not grant you any rights to our trademarks or branding.',
  },
  {
    id: 'warranties',
    title: '12. Disclaimer of Warranties',
    body: 'THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR ACCURATE.',
  },
  {
    id: 'liability',
    title: '13. Limitation of Liability',
    body: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, FILANA AND ITS AFFILIATES WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR RELATING TO YOUR USE OF THE SERVICE. OUR AGGREGATE LIABILITY FOR ANY CLAIM UNDER THESE TERMS IS LIMITED TO THE GREATER OF (A) THE AMOUNT YOU PAID FILANA IN THE 12 MONTHS PRECEDING THE CLAIM, OR (B) CAD $50.',
  },
  {
    id: 'indemnification',
    title: '14. Indemnification',
    body: 'You agree to indemnify and hold harmless Filana from any claims, damages, or expenses arising from (a) Your Content, (b) your violation of these Terms, or (c) your violation of any law or third-party right.',
  },
  {
    id: 'termination',
    title: '15. Termination',
    items: [
      'You may stop using the Service and delete your account at any time.',
      'We may suspend or terminate your access if you violate these Terms, create risk for Filana or other users, or for prolonged inactivity.',
      'Sections that by their nature should survive termination (payment, IP, disclaimers, liability, governing law) will survive.',
    ],
  },
  {
    id: 'law',
    title: '16. Governing Law and Venue',
    body: 'These Terms are governed by the laws of the Province of Quebec and the federal laws of Canada applicable therein, without regard to conflict-of-laws principles. The courts located in Montreal, Quebec, will have exclusive jurisdiction over any disputes, subject to mandatory consumer-protection laws of your province of residence.',
  },
  {
    id: 'changes',
    title: '17. Changes to These Terms',
    body: 'We may update these Terms from time to time. Material changes will be announced in the app and by email at least 30 days before they take effect. Continued use after the effective date constitutes acceptance.',
  },
  {
    id: 'contact',
    title: '18. Contact',
    body: 'Questions about these Terms? Email ' + CONTACT_EMAIL + '.',
  },
]
