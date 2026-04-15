import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'

const PINK     = '#d94391'
const PINK_DIM = 'rgba(217,67,145,0.12)'
const LAST_UPDATED = 'April 05, 2026'

// ─── TABLE OF CONTENTS ───────────────────────────────────────────────────────
const TOC = [
  { id: 'infocollect',   label: '1. What Information Do We Collect?' },
  { id: 'infouse',       label: '2. How Do We Process Your Information?' },
  { id: 'legalbases',    label: '3. What Legal Bases Do We Rely On To Process Your Personal Information?' },
  { id: 'whoshare',      label: '4. When And With Whom Do We Share Your Personal Information?' },
  { id: 'cookies',       label: '5. Do We Use Cookies And Other Tracking Technologies?' },
  { id: 'ai',            label: '6. Do We Offer Artificial Intelligence-Based Products?' },
  { id: 'sociallogins',  label: '7. How Do We Handle Your Social Logins?' },
  { id: 'inforetain',    label: '8. How Long Do We Keep Your Information?' },
  { id: 'infosafe',      label: '9. How Do We Keep Your Information Safe?' },
  { id: 'infominors',    label: '10. Do We Collect Information From Minors?' },
  { id: 'privacyrights', label: '11. What Are Your Privacy Rights?' },
  { id: 'DNT',           label: '12. Controls For Do-Not-Track Features' },
  { id: 'policyupdates', label: '13. Do We Make Updates To This Notice?' },
  { id: 'contact',       label: '14. How Can You Contact Us About This Notice?' },
  { id: 'request',       label: '15. How Can You Review, Update, Or Delete The Data We Collect From You?' },
]

// ─── SECTIONS ────────────────────────────────────────────────────────────────
const sections = [
  // ── SECTION 1 ──
  {
    id: 'infocollect',
    title: '1. What Information Do We Collect?',
    subsections: [
      {
        subtitle: 'Personal information you disclose to us',
        intro: 'We collect personal information that you provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.',
        note: 'The personal information we collect may include the following:',
        items: ['Names', 'Email addresses', 'Passwords'],
      },
      {
        subtitle: 'Sensitive information',
        intro: 'When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:',
        items: ['Financial data'],
      },
      {
        subtitle: 'Payment data',
        body: 'We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number and the security code associated with your payment instrument. All payment data is handled and stored by RevenueCat. You may find their privacy notice at: https://www.revenuecat.com/privacy',
      },
      {
        subtitle: 'Social media login data',
        body: 'We may provide you with the option to register with us using your existing social media account details, like your Facebook, X, or other social media account. If you choose to register in this way, we will collect certain profile information about you from the social media provider.',
      },
      {
        subtitle: 'Application data',
        intro: 'If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:',
        items: [
          'Mobile Device Access — We may request access or permission to certain features from your mobile device, including camera and storage. You may change our access or permissions in your device\'s settings.',
          'Mobile Device Data — We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information, browser type, IP address, and information about the features of our application(s) you accessed.',
          'Push Notifications — We may request to send you push notifications regarding your account or certain features of the application(s). You may turn these off in your device\'s settings.',
        ],
        body_after: 'All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.',
      },
      {
        subtitle: 'Information automatically collected',
        body: 'We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information.\n\nWe also collect information through cookies and similar technologies.',
        items: [
          'Log and Usage Data — Service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services, including your IP address, device information, browser type, and your activity in the Services.',
          'Device Data — Information about your computer, phone, tablet, or other device you use to access the Services, including your IP address, device and application identification numbers, location, browser type, hardware model, and system configuration information.',
        ],
      },
      {
        subtitle: 'Google API',
        body: 'Our use of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.',
      },
      {
        subtitle: 'Information collected from other sources',
        body: 'We may obtain information about you from other sources, such as public databases, joint marketing partners, affiliate programs, data providers, and social media platforms. This information includes mailing addresses, job titles, email addresses, phone numbers, intent data, IP addresses, social media profiles, and custom profiles, for purposes of targeted advertising and event promotion.\n\nIf you interact with us on a social media platform using your social media account (e.g., Facebook or X), we receive personal information about you from such platforms such as your name, email address, and gender.',
      },
    ],
  },

  // ── SECTION 2 ──
  {
    id: 'infouse',
    title: '2. How Do We Process Your Information?',
    intro: 'We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes only with your prior explicit consent.',
    list: [
      'To facilitate account creation and authentication and otherwise manage user accounts.',
      'To deliver and facilitate delivery of services to the user.',
      'To respond to user inquiries and offer support to users.',
      'To send administrative information to you — details about our products and services, changes to our terms and policies.',
      'To request feedback and to contact you about your use of our Services.',
      'To send you marketing and promotional communications (with your consent; you may opt out at any time).',
      'To protect our Services through fraud monitoring and prevention.',
      'To evaluate and improve our Services, products, marketing, and your experience.',
      'To identify usage trends and better understand how our Services are being used.',
      'To comply with our legal obligations, respond to legal requests, and exercise or defend our legal rights.',
    ],
  },

  // ── SECTION 3 ──
  {
    id: 'legalbases',
    title: '3. What Legal Bases Do We Rely On To Process Your Information?',
    body: 'We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law — with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.\n\nWe may process your information if you have given us specific permission (express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (implied consent). You can withdraw your consent at any time.\n\nIn some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including:',
    list: [
      'If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way.',
      'For investigations and fraud detection and prevention.',
      'For business transactions provided certain conditions are met.',
      'If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim.',
      'For identifying injured, ill, or deceased persons and communicating with next of kin.',
      'If we have reasonable grounds to believe an individual has been, is, or may be a victim of financial abuse.',
      'If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records.',
      'If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced.',
      'If the collection is solely for journalistic, artistic, or literary purposes.',
      'If the information is publicly available and is specified by the regulations.',
      'We may disclose de-identified information for approved research or statistics projects, subject to ethics oversight and confidentiality commitments.',
    ],
  },

  // ── SECTION 4 ──
  {
    id: 'whoshare',
    title: '4. When And With Whom Do We Share Your Personal Information?',
    body: 'We may share information in specific situations described in this section and/or with the following third parties.\n\nWe may share your data with third-party vendors, service providers, contractors, or agents ("third parties") who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties designed to help safeguard your personal information.',
    subsections: [
      {
        subtitle: 'Third parties we may share personal information with',
        items: [
          'AI Service Providers — OpenAI',
          'Allow Users to Connect to Their Third-Party Accounts — Google account and Plaid',
          'Cloud Computing Services — Supabase',
          'Invoice and Billing — RevenueCat',
          'User Account Registration and Authentication — Google Sign-In',
          'Website Testing — TestFlight',
        ],
      },
      {
        subtitle: 'Other sharing situations',
        items: [
          'Business Transfers — We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.',
        ],
      },
    ],
  },

  // ── SECTION 5 ──
  {
    id: 'cookies',
    title: '5. Do We Use Cookies And Other Tracking Technologies?',
    body: 'We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.\n\nWe also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements or to tailor advertisements to your interests.\n\nSpecific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.',
  },

  // ── SECTION 6 ──
  {
    id: 'ai',
    title: '6. Do We Offer Artificial Intelligence-Based Products?',
    body: 'We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, "AI Products"). These tools are designed to enhance your experience and provide you with innovative solutions.\n\nWe provide the AI Products through third-party service providers ("AI Service Providers"), including OpenAI. Your input, output, and personal information will be shared with and processed by these AI Service Providers. You must not use the AI Products in any way that violates the terms or policies of any AI Service Provider.',
    subsections: [
      {
        subtitle: 'Our AI Products are designed for the following functions',
        items: ['Image analysis', 'AI automation', 'Natural language processing', 'AI insights'],
      },
      {
        subtitle: 'How to opt out',
        items: ['Log in to your account settings and update your user account.'],
      },
    ],
    body_after: 'All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties, ensuring high security and safeguards throughout the process.',
  },

  // ── SECTION 7 ──
  {
    id: 'sociallogins',
    title: '7. How Do We Handle Your Social Logins?',
    body: 'Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or X logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public.\n\nWe will use the information we receive only for the purposes described in this Privacy Notice. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information.',
  },

  // ── SECTION 8 ──
  {
    id: 'inforetain',
    title: '8. How Long Do We Keep Your Information?',
    body: 'We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.\n\nWe will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us to keep your personal information for longer than three (3) months past the termination of the user\'s account.\n\nWhen we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.',
  },

  // ── SECTION 9 ──
  {
    id: 'infosafe',
    title: '9. How Do We Keep Your Information Safe?',
    body: 'We aim to protect your personal information through a system of organizational and technical security measures.\n\nWe have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.\n\nAlthough we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.',
  },

  // ── SECTION 10 ──
  {
    id: 'infominors',
    title: '10. Do We Collect Information From Minors?',
    body: 'We do not knowingly collect, solicit data from, or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction, nor do we knowingly sell such personal information.\n\nBy using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent\'s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us.',
  },

  // ── SECTION 11 ──
  {
    id: 'privacyrights',
    title: '11. What Are Your Privacy Rights?',
    body: 'In some regions (like Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure, (iii) to restrict the processing of your personal information, (iv) if applicable, to data portability, and (v) not to be subject to automated decision-making. If a decision that produces legal or similarly significant effects is made solely by automated means, we will inform you, explain the main factors, and offer a simple way to request human review.\n\nYou may review, change, or terminate your account at any time, depending on your country, province, or state of residence.',
    subsections: [
      {
        subtitle: 'Account information',
        items: [
          'Log in to your account settings and update your user account.',
          'Contact us using the contact information provided.',
        ],
        body_after: 'Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.',
      },
    ],
    body_after: 'If you have questions or comments about your privacy rights, you may email us at hamza.daqa@gmail.com.',
  },

  // ── SECTION 12 ──
  {
    id: 'DNT',
    title: '12. Controls For Do-Not-Track Features',
    body: 'Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.',
  },

  // ── SECTION 13 ──
  {
    id: 'policyupdates',
    title: '13. Do We Make Updates To This Notice?',
    body: 'Yes, we will update this notice as necessary to stay compliant with relevant laws.\n\nWe may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.',
  },

  // ── SECTION 14 ──
  {
    id: 'contact',
    title: '14. How Can You Contact Us About This Notice?',
    body: 'If you have questions or comments about this notice, you may contact us by post at:\n\nFilana\nMontreal, Quebec\nCanada\n\nEmail: hamza.daqa@gmail.com',
  },

  // ── SECTION 15 ──
  {
    id: 'request',
    title: '15. How Can You Review, Update, Or Delete The Data We Collect From You?',
    body: 'Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law.\n\nTo request to review, update, or delete your personal information, please contact us at hamza.daqa@gmail.com.',
  },
]

// ─── RENDER HELPERS ──────────────────────────────────────────────────────────

function renderBody(text) {
  return text.split('\n').map((line, i) => {
    if (!line.trim()) return <br key={i} />
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

function BulletList({ items, dimmer = false }) {
  return (
    <ul className="flex flex-col gap-2.5 text-[15px] mt-1">
      {items.map((item, j) => (
        <li key={j} className="flex items-start gap-3"
          style={{ color: dimmer ? 'rgba(255,255,255,0.38)' : 'rgba(255,255,255,0.45)' }}>
          <span
            className="mt-[5px] w-3.5 h-3.5 rounded-full flex-shrink-0 flex items-center justify-center"
            style={{ background: PINK_DIM }}
          >
            <svg width="7" height="5" viewBox="0 0 8 6" fill="none">
              <path d="M1 3l2 2 4-4" stroke={PINK} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

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

      <article className="max-w-3xl mx-auto px-6 py-16 pb-32">

        {/* Intro paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-[15px] leading-relaxed flex flex-col gap-3"
          style={{ color: 'rgba(255,255,255,0.45)' }}
        >
          <p>
            This Privacy Notice for <span style={{ color: 'rgba(255,255,255,0.72)' }}>Filana</span> describes how and why we might access, collect, store, use, and/or share your personal information when you use our Services, including when you download and use our mobile application (Filana) or engage with us in other related ways, including any marketing or events.
          </p>
          <p>
            <span style={{ color: 'rgba(255,255,255,0.72)', fontWeight: 600 }}>Questions or concerns?</span> Reading this Privacy Notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at{' '}
            <a href="mailto:hamza.daqa@gmail.com" style={{ color: PINK, textDecoration: 'underline' }}>hamza.daqa@gmail.com</a>.
          </p>
        </motion.div>

        {/* Summary of Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 rounded-2xl p-6"
          style={{ background: 'rgba(217,67,145,0.06)', border: '1px solid rgba(217,67,145,0.14)' }}
        >
          <h2 className="text-[17px] font-semibold text-white mb-4 tracking-tight">Summary of Key Points</h2>
          <div className="flex flex-col gap-3 text-[14px]" style={{ color: 'rgba(255,255,255,0.42)' }}>
            {[
              ['What personal information do we process?', 'We may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.'],
              ['Do we process any sensitive personal information?', 'We may process sensitive personal information (such as financial data) when necessary with your consent or as otherwise permitted by applicable law.'],
              ['Do we collect any information from third parties?', 'We may collect information from public databases, marketing partners, social media platforms, and other outside sources.'],
              ['How do we process your information?', 'We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.'],
              ['How do we keep your information safe?', 'We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet can be guaranteed 100% secure.'],
              ['What are your rights?', 'Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.'],
            ].map(([q, a], i) => (
              <p key={i}><span style={{ color: 'rgba(255,255,255,0.68)', fontWeight: 600 }}>{q} </span>{a}</p>
            ))}
          </div>
        </motion.div>

        {/* Table of Contents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-[20px] font-semibold text-white mb-5 tracking-tight">Table of Contents</h2>
          <ol className="flex flex-col gap-2">
            {TOC.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-[14px] transition-colors duration-150"
                  style={{ color: PINK, textDecoration: 'none' }}
                  onMouseEnter={e => (e.target.style.opacity = '0.7')}
                  onMouseLeave={e => (e.target.style.opacity = '1')}
                >
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </motion.div>

        {/* ── Divider ── */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '64px' }} />

        {/* Main sections */}
        {sections.map((section, i) => (
          <motion.div
            key={i}
            id={section.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.04 }}
            className="mb-14 scroll-mt-28"
          >
            <h2 className="text-[20px] font-semibold text-white mb-5 tracking-tight">
              {section.title}
            </h2>

            {section.intro && (
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {section.intro}
              </p>
            )}

            {section.body && (
              <div className="flex flex-col gap-2 text-[15px] mb-4">
                {renderBody(section.body)}
              </div>
            )}

            {section.list && <BulletList items={section.list} />}

            {section.body_after && (
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {section.body_after}
              </p>
            )}

            {section.subsections?.map((sub, j) => (
              <div key={j} className="mt-7">
                <h3 className="text-[14px] font-semibold mb-3 tracking-wide uppercase"
                  style={{ color: PINK, letterSpacing: '0.08em', fontSize: '12px' }}>
                  {sub.subtitle}
                </h3>
                {sub.intro && (
                  <p className="text-[15px] leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {sub.intro}
                  </p>
                )}
                {sub.note && (
                  <p className="text-[15px] mb-2" style={{ color: 'rgba(255,255,255,0.38)' }}>
                    {sub.note}
                  </p>
                )}
                {sub.body && (
                  <div className="flex flex-col gap-2 text-[15px] mb-3">
                    {renderBody(sub.body)}
                  </div>
                )}
                {sub.items && <BulletList items={sub.items} dimmer />}
                {sub.body_after && (
                  <p className="mt-3 text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)' }}>
                    {sub.body_after}
                  </p>
                )}
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