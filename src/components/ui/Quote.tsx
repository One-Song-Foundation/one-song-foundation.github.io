import React from 'react'

interface QuoteProps {
  children: React.ReactNode
  name?: string
  role?: string
  size?: 'md' | 'lg'
  className?: string
}

/** Editorial pull quote / testimonial with attribution. */
export default function Quote({ children, name, role, size = 'md', className = '' }: QuoteProps) {
  const cls = ['os-quote', size === 'lg' ? 'os-quote--lg' : '', className].filter(Boolean).join(' ')
  return (
    <figure className={cls} style={{ margin: 0 }}>
      <span className="os-quote__mark" aria-hidden="true">&ldquo;</span>
      <blockquote className="os-quote__text" style={{ margin: 0 }}>{children}</blockquote>
      {(name || role) ? (
        <figcaption className="os-quote__attr">
          <span>
            {name ? <span className="os-quote__name" style={{ display: 'block' }}>{name}</span> : null}
            {role ? <span className="os-quote__role">{role}</span> : null}
          </span>
        </figcaption>
      ) : null}
    </figure>
  )
}
