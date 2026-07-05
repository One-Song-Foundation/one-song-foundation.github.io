import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'flat' | 'raised' | 'soft' | 'inverse'
  interactive?: boolean
  accent?: boolean
}

/** Warm surface container. The default has a soft sand border; use `raised` for floating panels. */
export default function Card({ children, variant = 'flat', interactive = false, accent = false, className = '', ...rest }: CardProps) {
  const cls = ['os-card', `os-card--${variant}`, interactive ? 'os-card--interactive' : '', className].filter(Boolean).join(' ')
  return (
    <div className={cls} {...rest}>
      {accent ? <div className="os-card__accent" aria-hidden="true" /> : null}
      {children}
    </div>
  )
}
