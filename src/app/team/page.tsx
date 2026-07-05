import Image from 'next/image'
import Card from '../../components/ui/Card'
import Icon from '../../components/ui/Icon'

export const metadata = {
  title: 'Team - One Song Foundation',
}

export default function Bio() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="page-hero">
        <div className="container-os page-hero__inner">
          <span className="os-eyebrow">Our team</span>
          <h1 className="page-hero__title">The people behind the <em>one song</em></h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-os flex flex-col items-center gap-8">
          <Card variant="raised" className="team-card w-full max-w-2xl">
            <Image
              src="/chris.png"
              alt="Chris Chen"
              width={180}
              height={180}
              className="team-card__photo"
            />
            <h2>Christopher Chen</h2>
            <div className="team-card__role">Founder</div>
            <p>
              Chris Chen is a software engineer in recovery who found healing through breath,
              movement, and meditation. After years of navigating depression, emotional exhaustion,
              and unhealthy coping habits, he began practicing Sundo — a Korean Taoist meditation —
              which helped him break free from dependency, come off antidepressants, and reconnect
              with a sense of purpose.
            </p>
            <p>
              Through this journey, Chris realized that recovery isn&apos;t just about letting go of
              what harms us — it&apos;s about rediscovering our love for ourselves.
            </p>
            <p>
              He founded the One Song Foundation so that everyone — regardless of background, status,
              or resources — could have equal access to excellent care. With a background in
              blockchain and fintech, and a deep personal commitment to recovery, Chris is building
              bridges between ancient wisdom and modern tools to help others rediscover their rhythm —
              their one song.
            </p>
            <div className="team-card__links">
              <a href="https://www.linkedin.com/in/cchen408/" target="_blank" rel="noopener noreferrer">
                <Icon name="linkedin" size={18} />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:chris@onesongfoundation.org">
                <Icon name="mail" size={18} />
                <span>chris@onesongfoundation.org</span>
              </a>
              <a
                href="https://www.meloscenter.org/blog/www-meloscenter-org-blog--how-an-ancient-practice-helped-me-rebuild-my-health"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="external-link" size={18} />
                <span>Chris&apos;s story: How an ancient practice helped me rebuild my health</span>
              </a>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
