import Card from '../../components/ui/Card'
import Icon from '../../components/ui/Icon'
import SectionHeading from '../../components/ui/SectionHeading'

export const metadata = {
  title: 'About - One Song Foundation',
  alternates: { canonical: '/about' },
}

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="page-hero">
        <div className="container-os page-hero__inner">
          <span className="os-eyebrow">About One Song Foundation</span>
          <h1 className="page-hero__title">Our <em>mission</em></h1>
          <p className="page-hero__lead">
            Our mission is to create pathways to healing by providing financial support for mental
            health and addiction treatment, ensuring everyone has access to transformative care
            regardless of their background or resources.
          </p>
        </div>
      </section>

      {/* How we help */}
      <section className="section">
        <div className="container-os cta__inner">
          <SectionHeading
            align="center"
            eyebrow="How we help"
            title={<>Closing the gap between insurance and <em>excellent care</em></>}
            size="md"
          />
          <Card variant="soft" className="w-full max-w-2xl mx-auto">
            <ul className="mission-list">
              <li><Icon name="circle-check" size={18} />Bridges the financial gap between insurance and actual treatment costs</li>
              <li><Icon name="circle-check" size={18} />Grants longer, more impactful stays in treatment</li>
              <li><Icon name="circle-check" size={18} />Promotes excellence in treatment</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Qualities of Exceptional Treatment */}
      <section className="section section--sunken">
        <div className="container-os">
          <SectionHeading
            eyebrow="What sets our partners apart"
            title="Qualities of exceptional treatment"
            lead="We look for treatment centers that offer care worth fighting for."
            size="lg"
          />
          <div className="values">
            <Card variant="flat" className="value">
              <span className="value__icon"><Icon name="sparkles" size={22} /></span>
              <h3>Innovative &amp; curated curriculum</h3>
              <ul>
                <li>Blends psychological and somatic wisdom</li>
                <li>Clients achieve lasting change and a felt shift in their experience of life</li>
                <li>Provides a strong post-graduation program</li>
              </ul>
            </Card>
            <Card variant="flat" className="value">
              <span className="value__icon"><Icon name="users" size={22} /></span>
              <h3>High-touch, intimate and meaningful care</h3>
              <ul>
                <li>Group sizes are intentionally small — 6 to 8 clients maximum</li>
                <li>Dual facilitation in each group (3–4 clients per clinician)</li>
                <li>Clients don&apos;t get lost in the shuffle</li>
              </ul>
            </Card>
            <Card variant="flat" className="value">
              <span className="value__icon"><Icon name="leaf" size={22} /></span>
              <h3>Deeply rooted staff culture</h3>
              <ul>
                <li>Staff live their recovery and have experienced the change they help others achieve</li>
                <li>They embody presence, integrity, and authentic recovery</li>
                <li>They are committed to the mission of the organization and a living example</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
