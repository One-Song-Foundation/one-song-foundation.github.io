import React from 'react'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost' | 'inverse'
  size?: 'sm' | 'md' | 'lg'
  block?: boolean
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  href?: string
  external?: boolean
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

/**
 * Primary action button for One Song Foundation.
 * Variants: primary (evergreen), accent (donate / dawn amber), secondary, ghost, inverse.
 * Pass `href` to render as a link (Next Link, or <a> when `external`).
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  iconLeft = null,
  iconRight = null,
  href,
  external = false,
  className = '',
  ...rest
}: ButtonProps) {
  const cls = [
    'os-btn',
    `os-btn--${variant}`,
    size !== 'md' ? `os-btn--${size}` : '',
    block ? 'os-btn--block' : '',
    className,
  ].filter(Boolean).join(' ')

  const content = (
    <>
      {iconLeft ? <span aria-hidden="true" style={{ display: 'inline-flex' }}>{iconLeft}</span> : null}
      {children}
      {iconRight ? <span aria-hidden="true" style={{ display: 'inline-flex' }}>{iconRight}</span> : null}
    </>
  )

  if (href && external) {
    return <a className={cls} href={href} target="_blank" rel="noopener noreferrer">{content}</a>
  }
  if (href) {
    return <Link className={cls} href={href}>{content}</Link>
  }
  return <button className={cls} {...rest}>{content}</button>
}
