import Button from '../../components/ui/Button'
import Icon from '../../components/ui/Icon'
import SectionHeading from '../../components/ui/SectionHeading'

export const metadata = {
  title: 'Partners - One Song Foundation',
  alternates: { canonical: '/partners' },
}

export default function Partners() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="page-hero">
        <div className="container-os page-hero__inner">
          <span className="os-eyebrow">Partnerships</span>
          <h1 className="page-hero__title">Better <em>together</em></h1>
          <p className="page-hero__lead">
            We believe in the power of collaboration. If you are an organization, treatment center,
            or individual interested in partnering with One Song Foundation to expand access to
            transformative care, we would love to connect with you.
          </p>
        </div>
      </section>

      {/* Become a partner */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-os cta__inner">
          <SectionHeading
            align="center"
            eyebrow="Become a partner"
            title={<>We fund <em>excellent care</em></>}
            size="md"
          />
          <div className="max-w-2xl mx-auto text-center flex flex-col gap-4">
            <p className="m-0">
              At One Song, we are always looking to partner with treatment centers providing excellent
              care. If you believe you are offering exceptional mental health or addiction treatment
              services, we would love to meet you and learn more about what you do.
            </p>
            <p className="m-0">
              We understand that excellent care is not cheap, and many clients may not have the
              financial means to afford it. That&apos;s what we hope to address at One Song. By
              providing scholarships or grants, we can help more clients access transformative
              treatment and increase the effectiveness of their care.
            </p>
          </div>
          <Button
            variant="primary"
            href="mailto:partnerships@onesongfoundation.org?subject=Partnership%20Inquiry"
            external
            iconRight={<Icon name="mail" size={16} />}
          >
            partnerships@onesongfoundation.org
          </Button>
        </div>
      </section>

      {/* Our partners & affiliates */}
      <section className="section section--sunken">
        <div className="container-os cta__inner">
          <SectionHeading
            align="center"
            eyebrow="Our partners &amp; affiliates"
            title="A growing circle of care"
            lead="Organizations that share our commitment to accessible, quality care."
            size="md"
          />
          <div className="partner-cards">
            <a
              href="https://www.embodiedrecovery.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="partner-card"
            >
              <span className="os-badge os-badge--brand">Partner</span>
              <img src="/embodiedrecovery.svg" alt="Embodied Recovery" className="partner-card__logo" />
              <p>
                Outpatient mental health and addiction treatment in Campbell, California, integrating
                psychological, biological, social, and spiritual elements of care.
              </p>
              <span className="partner-card__cta">
                embodiedrecovery.com <Icon name="external-link" size={14} />
              </span>
            </a>
            <a
              href="https://www.meloscenter.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="partner-card"
            >
              <span className="os-badge os-badge--accent">Affiliate</span>
              <span className="partner-card__melos">
                <img src="/meloscenter.png" alt="" className="partner-card__melos-mark" />
                Melos Center
              </span>
              <p>
                A generative space dedicated to recovering the heart&apos;s melody — through dance,
                embodied breathwork, teachings, meditation, and community.
              </p>
              <span className="partner-card__cta">
                meloscenter.org <Icon name="external-link" size={14} />
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
