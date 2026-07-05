import React from 'react'

interface SectionHeadingProps {
  eyebrow?: string
  title: React.ReactNode
  lead?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  align?: 'start' | 'center'
  tone?: 'default' | 'light'
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}

/**
 * Section heading lockup: eyebrow + serif title (+ optional lead).
 * Use <em> inside `title` for an italic evergreen emphasis phrase.
 */
export default function SectionHeading({ eyebrow, title, lead, size = 'md', align = 'start', tone = 'default', as = 'h2', className = '' }: SectionHeadingProps) {
  const Title = as
  const cls = ['os-heading', `os-heading--${size}`, align === 'center' ? 'os-heading--center' : '', tone === 'light' ? 'os-heading--light' : '', className].filter(Boolean).join(' ')
  return (
    <div className={cls}>
      {eyebrow ? <span className="os-heading__eyebrow">{eyebrow}</span> : null}
      <Title className="os-heading__title">{title}</Title>
      {lead ? <p className="os-heading__lead">{lead}</p> : null}
    </div>
  )
}
