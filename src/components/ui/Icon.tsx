import React from 'react'

/* One Song Foundation icon set.
 * Geometry copied from Lucide (https://lucide.dev, ISC license): 24×24, 2px stroke,
 * round caps & joins, no fill. Curated to the glyphs the brand actually uses. */
type IconNode = [string, Record<string, string | number>]

export const OS_ICONS: Record<string, IconNode[]> = {
  'heart': [['path', { d: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' }]],
  'hand-heart': [
    ['path', { d: 'M11 14h2a2 2 0 0 0 2-2 2 2 0 0 0-2-2H9.5L7 12.5' }],
    ['path', { d: 'm12 18-4-4' }],
    ['path', { d: 'M2 13.5 7 18l4-4' }],
    ['path', { d: 'M18 12a2.5 2.5 0 1 0-3.5-3.5L13 10l-1.5-1.5A2.5 2.5 0 1 0 8 12l5 5 5-5Z' }],
  ],
  'arrow-right': [['path', { d: 'M5 12h14' }], ['path', { d: 'm12 5 7 7-7 7' }]],
  'check': [['path', { d: 'M20 6 9 17l-5-5' }]],
  'circle-check': [['circle', { cx: 12, cy: 12, r: 10 }], ['path', { d: 'm9 12 2 2 4-4' }]],
  'x': [['path', { d: 'M18 6 6 18' }], ['path', { d: 'm6 6 12 12' }]],
  'menu': [['path', { d: 'M4 6h16' }], ['path', { d: 'M4 12h16' }], ['path', { d: 'M4 18h16' }]],
  'mail': [['rect', { x: 2, y: 4, width: 20, height: 16, rx: 2 }], ['path', { d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' }]],
  'phone': [['path', { d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' }]],
  'map-pin': [['path', { d: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' }], ['circle', { cx: 12, cy: 10, r: 3 }]],
  'music': [['path', { d: 'M9 18V5l12-2v13' }], ['circle', { cx: 6, cy: 18, r: 3 }], ['circle', { cx: 18, cy: 16, r: 3 }]],
  'shield-check': [['path', { d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z' }], ['path', { d: 'm9 12 2 2 4-4' }]],
  'sparkles': [
    ['path', { d: 'M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z' }],
    ['path', { d: 'M20 3v4' }], ['path', { d: 'M22 5h-4' }], ['path', { d: 'M4 17v2' }], ['path', { d: 'M5 18H3' }],
  ],
  'users': [['path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' }], ['circle', { cx: 9, cy: 7, r: 4 }], ['path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87' }], ['path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' }]],
  'clock': [['circle', { cx: 12, cy: 12, r: 10 }], ['path', { d: 'M12 6v6l4 2' }]],
  'external-link': [['path', { d: 'M15 3h6v6' }], ['path', { d: 'M10 14 21 3' }], ['path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' }]],
  'life-buoy': [['circle', { cx: 12, cy: 12, r: 10 }], ['circle', { cx: 12, cy: 12, r: 4 }], ['path', { d: 'm4.93 4.93 4.24 4.24' }], ['path', { d: 'm14.83 9.17 4.24-4.24' }], ['path', { d: 'm14.83 14.83 4.24 4.24' }], ['path', { d: 'm9.17 14.83-4.24 4.24' }]],
  'leaf': [['path', { d: 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z' }], ['path', { d: 'M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12' }]],
  'compass': [['circle', { cx: 12, cy: 12, r: 10 }], ['path', { d: 'm16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36z' }]],
  'linkedin': [['path', { d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' }], ['rect', { x: 2, y: 9, width: 4, height: 12 }], ['circle', { cx: 4, cy: 4, r: 2 }]],
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof OS_ICONS
  size?: number
  strokeWidth?: number
}

/** Stroke icon (Lucide geometry). 24px grid, inherits `color` via currentColor. */
export default function Icon({ name, size = 20, strokeWidth = 2, className = '', style = {}, ...rest }: IconProps) {
  const nodes = OS_ICONS[name]
  if (!nodes) return null
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: 'inline-block', flexShrink: 0, verticalAlign: 'middle', ...style }}
      aria-hidden="true"
      {...rest}
    >
      {nodes.map(([t, props], i) => React.createElement(t, { key: i, ...props }))}
    </svg>
  )
}
