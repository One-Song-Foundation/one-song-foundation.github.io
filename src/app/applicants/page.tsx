import Button from '../../components/ui/Button'
import Icon from '../../components/ui/Icon'
import SectionHeading from '../../components/ui/SectionHeading'

export const metadata = {
  title: 'Applicants - One Song Foundation',
  alternates: { canonical: '/applicants' },
}

const STEPS = [
  {
    title: 'Connect with a partner treatment center',
    body: 'Our scholarship program works through referrals from our partner treatment centers. Start by reaching out to a treatment center about your care needs.',
  },
  {
    title: 'Get referred for a scholarship',
    body: 'If you demonstrate financial need, the treatment center will refer you to One Song Foundation and provide you with our scholarship application.',
  },
  {
    title: 'We review your application',
    body: 'We personally review each application. Our focus is on understanding your financial situation and how we can help make treatment accessible for you.',
  },
  {
    title: 'Funds go directly to your treatment',
    body: 'If approved, scholarship funds are paid directly to the treatment center on your behalf. This ensures the funds are used for your care and treatment services.',
  },
]

export default function Applicants() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="page-hero">
        <div className="container-os page-hero__inner">
          <span className="os-eyebrow">Scholarship program</span>
          <h1 className="page-hero__title">Financial support for your <em>recovery journey</em></h1>
          <p className="page-hero__lead">
            One Song Foundation offers scholarships that help offset the cost of mental health and
            addiction treatment for individuals facing financial barriers. We believe access to
            quality care should be available to everyone, regardless of ability to pay.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-os">
          <SectionHeading eyebrow="How it works" title="Four steps to support" size="md" />
          <div className="help-steps help-steps--four">
            {STEPS.map((step, i) => (
              <div key={step.title} className="help-step">
                <span className="help-step__n">0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important information */}
      <section className="section section--sunken">
        <div className="container-os">
          <SectionHeading eyebrow="Good to know" title="Important information" size="md" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            <div className="help-card">
              <span className="help-card__icon"><Icon name="shield-check" size={20} /></span>
              <p>
                <strong>Scholarship funds are paid directly to treatment centers</strong>, not to
                applicants. This ensures that funds are used for their intended purpose: supporting
                your treatment and recovery.
              </p>
            </div>
            <div className="help-card">
              <span className="help-card__icon"><Icon name="hand-heart" size={20} /></span>
              <p>
                Our application focuses on understanding your <strong>financial need</strong>. Medical
                and clinical assessments are handled by the treatment center, not by One Song
                Foundation.
              </p>
            </div>
            <div className="help-card">
              <span className="help-card__icon"><Icon name="clock" size={20} /></span>
              <p>
                We review applications personally and typically respond within{' '}
                <strong>5&ndash;7 business days</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For treatment centers */}
      <section className="section">
        <div className="container-os cta__inner">
          <SectionHeading
            align="center"
            eyebrow="For treatment centers"
            title={<>Partner with us to expand <em>access to care</em></>}
            lead="We are always happy to partner with treatment centers who share our commitment to accessible, quality care. If your organization would like to become a referral partner, we'd love to hear from you."
            size="md"
          />
          <div className="cta__buttons">
            <Button
              variant="primary"
              href="mailto:info@onesongfoundation.org"
              external
              iconRight={<Icon name="mail" size={16} />}
            >
              Contact us about partnering
            </Button>
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="section quote-band">
        <div className="container-os cta__inner">
          <SectionHeading
            align="center"
            eyebrow="Questions?"
            title="We're here to help"
            lead="If you have questions about our scholarship program or the application process, please don't hesitate to reach out."
            size="sm"
          />
          <a
            href="mailto:info@onesongfoundation.org"
            className="text-green-700 text-lg font-semibold hover:text-green-900 transition-colors"
          >
            info@onesongfoundation.org
          </a>
        </div>
      </section>
    </main>
  )
}
