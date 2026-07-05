'use client'

import { useState } from 'react'
import DonationModal from '../components/DonationModal'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Icon from '../components/ui/Icon'
import Logo from '../components/ui/Logo'
import Quote from '../components/ui/Quote'
import SectionHeading from '../components/ui/SectionHeading'

const PILLARS = [
  { icon: 'hand-heart', title: 'Bridge the financial gap', body: 'We cover the difference between what insurance pays and what treatment actually costs.' },
  { icon: 'clock', title: 'Fund longer stays', body: 'We support access to longer, more impactful stays in treatment — real healing takes time.' },
  { icon: 'compass', title: 'Navigate the system', body: 'We help individuals and families navigate a complex and often hostile system.' },
  { icon: 'shield-check', title: 'Dignity-based care', body: 'We provide dignity-based, person-centered care options.' },
  { icon: 'leaf', title: 'Champion lasting recovery', body: 'We champion lasting recovery and work to reduce recidivism.' },
  { icon: 'sparkles', title: 'Educate and advocate', body: 'We offer education and advocacy to reduce stigma and inspire hope.' },
] as const

export default function Home() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false)
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="hero">
        <div className="container-os hero__grid">
          <div className="hero__copy">
            <span className="os-eyebrow">Creating pathways to healing</span>
            <h1 className="hero__title">Supporting the journey back to <em>self love</em>.</h1>
            <p className="hero__lead">
              Every person deserves access to effective, transformative treatment for mental health
              and addiction. Yet for too many, financial barriers and insurance limitations block the
              road to recovery. We bridge this gap — offering financial support for treatment that
              saves lives, restores dignity, and empowers lasting change.
            </p>
            <div className="hero__cta">
              <Button
                variant="accent"
                size="lg"
                iconRight={<Icon name="heart" size={18} />}
                onClick={() => setIsDonationModalOpen(true)}
              >
                Donate today
              </Button>
              <Button variant="secondary" size="lg" href="/applicants">Get help</Button>
            </div>
            <div className="hero__trust">
              <Icon name="shield-check" size={16} />
              <span>501(c)(3) nonprofit public charity &middot; Donations are tax-deductible</span>
            </div>
          </div>
          <div className="hero__media">
            <div
              className="photo-frame"
              style={{
                aspectRatio: '4 / 5',
                background: 'linear-gradient(150deg, var(--green-100), var(--sand-100))',
                borderRadius: 'var(--radius-xl)',
              }}
            >
              <Logo variant="mark" height={260} />
              <span className="photo-frame__label" style={{ color: 'var(--text-faint)' }}>
                The one song — a single continuous, imperfect, whole stroke
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem — dark band */}
      <section className="section band">
        <div className="container-os">
          <div className="band__grid">
            <div>
              <span className="os-eyebrow" style={{ color: 'var(--amber-300)' }}>The problem</span>
              <h2 className="band__title">Too many people are shut out of recovery.</h2>
              <p className="band__lead">
                Insurance policies often deny or limit access to the most effective mental health and
                addiction treatment options.
              </p>
            </div>
            <div className="band__body">
              <p>
                Even when coverage exists, it frequently falls short — leaving individuals and their
                families with unaffordable bills and incomplete care. These gaps lead to
                <strong> higher relapse rates</strong>, <strong>prolonged suffering</strong>, and, too
                often, <strong>preventable deaths</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution — pillars */}
      <section className="section">
        <div className="container-os">
          <SectionHeading
            eyebrow="The solution"
            title={<>We help people overcome the obstacles in the way of <em>true healing</em></>}
            lead="Through donor-supported funding, we close the gaps in our system — one person, one family, one community at a time. Together, we create new pathways to healing."
            size="lg"
          />
          <div className="pillars pillars--three">
            {PILLARS.map((p) => (
              <Card key={p.title} variant="flat" className="pillar">
                <span className="pillar__icon"><Icon name={p.icon} size={24} /></span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="section section--sunken">
        <div className="container-os feature">
          <div
            className="photo-frame feature__media"
            style={{
              aspectRatio: '5 / 4',
              background: 'linear-gradient(150deg, var(--amber-100), var(--green-100))',
              borderRadius: 'var(--radius-xl)',
            }}
          >
            <span className="photo-frame__motif" style={{ color: 'rgba(31,92,77,0.13)' }}>
              <Icon name="music" size={64} />
            </span>
            <span className="photo-frame__label" style={{ color: 'var(--text-faint)' }}>
              Remembering the deeper melody
            </span>
          </div>
          <div className="feature__body">
            <SectionHeading
              eyebrow="Our philosophy"
              title={<>The <em>one song</em> beneath all things</>}
              size="md"
            />
            <p>
              The name of our foundation comes from the ancient idea of the &ldquo;one song&rdquo; — a
              unifying thread of love and truth that lives beneath all things.
            </p>
            <p>
              Recovery is not just about surviving — it&apos;s about remembering this deeper melody,
              buried beneath trauma, addiction, and despair. For those walking the path of recovery,
              hearing that song again can mean the difference between life and death.
            </p>
            <p>
              By helping individuals find their way back to this song, we help them reclaim their
              lives — and in doing so, we all heal.
            </p>
          </div>
        </div>
      </section>

      {/* A sacred journey + ripple effect */}
      <section className="section">
        <div className="container-os">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card variant="soft" accent>
              <h3 className="text-lg font-semibold mb-4">We believe recovery is a sacred journey</h3>
              <ul className="mission-list">
                <li><Icon name="circle-check" size={18} />One that demands courage, support, and time</li>
                <li><Icon name="circle-check" size={18} />One that deserves community investment</li>
                <li><Icon name="circle-check" size={18} />One that leads to the release of each person&apos;s unique gifts to the world</li>
              </ul>
            </Card>
            <Card variant="soft" accent>
              <h3 className="text-lg font-semibold mb-4">When one person reconnects with their true self</h3>
              <ul className="mission-list">
                <li><Icon name="circle-check" size={18} />Families begin to breathe easier</li>
                <li><Icon name="circle-check" size={18} />Children feel safer</li>
                <li><Icon name="circle-check" size={18} />Generational cycles can shift</li>
                <li><Icon name="circle-check" size={18} />Communities begin to change</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Collective quote band */}
      <section className="section quote-band">
        <div className="container-os quote-band__inner">
          <Quote size="lg">
            Recovery is never just personal — it&apos;s collective. Your support helps restore the
            song not just in one soul, but in the many lives they touch.
          </Quote>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="container-os cta__inner">
          <SectionHeading
            align="center"
            size="lg"
            eyebrow="How you can help"
            title={<>Your gift opens a door <em>today</em></>}
            lead="When you give, you're not just funding treatment. You're restoring hope. You're dissolving shame. You're changing a life. Join us in the movement to break barriers and bring healing where it's needed most."
          />
          <div className="cta__buttons">
            <Button
              variant="accent"
              size="lg"
              iconRight={<Icon name="heart" size={18} />}
              onClick={() => setIsDonationModalOpen(true)}
            >
              Donate now
            </Button>
            <Button variant="secondary" size="lg" href="/about">Learn more</Button>
          </div>
        </div>
      </section>

      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
    </main>
  )
}
