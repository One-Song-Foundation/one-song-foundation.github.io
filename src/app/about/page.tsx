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
            eyebrow="What we've seen work well"
            title="Qualities we&apos;ve seen make a difference"
            lead="These aren&apos;t requirements — they&apos;re what we&apos;ve noticed in programs doing remarkable work. Excellent care takes many forms, and we&apos;re always glad to learn from models that look different."
            size="lg"
          />
          <div className="values">
            <Card variant="flat" className="value">
              <span className="value__icon"><Icon name="sparkles" size={22} /></span>
              <h3>A thoughtfully designed curriculum</h3>
              <ul>
                <li>Often blends psychological and somatic approaches</li>
                <li>Clients describe lasting change and a felt shift in their experience of life</li>
                <li>Thinks carefully about what happens after treatment ends</li>
              </ul>
            </Card>
            <Card variant="flat" className="value">
              <span className="value__icon"><Icon name="users" size={22} /></span>
              <h3>High-touch, personal care</h3>
              <ul>
                <li>Group sizes kept intentionally small, so no one becomes a number</li>
                <li>A generous ratio of clinicians to clients</li>
                <li>Enough attention that clients feel genuinely known</li>
              </ul>
            </Card>
            <Card variant="flat" className="value">
              <span className="value__icon"><Icon name="leaf" size={22} /></span>
              <h3>A deeply rooted staff culture</h3>
              <ul>
                <li>Staff who live what they teach, often having walked a similar path themselves</li>
                <li>A culture of presence, integrity, and authenticity</li>
                <li>A shared commitment to the mission that shows up in daily practice</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
