import { Icon, type IconProps } from '@iconify/react'
import { cn } from '@nextui-org/theme'
import { forwardRef } from 'react'

type Props = {
  icon: string
  size?: number
  color?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'warning'
    | 'success'
    | 'default'
    | 'slate'
    | 'gray'
    | 'zinc'
    | 'neutral'
    | 'stone'
    | 'red'
    | 'orange'
    | 'amber'
    | 'yellow'
    | 'lime'
    | 'green'
    | 'emerald'
    | 'teal'
    | 'cyan'
    | 'sky'
    | 'blue'
    | 'indigo'
    | 'violet'
    | 'purple'
    | 'fuchsia'
    | 'pink'
    | 'rose'
    | 'foreground'
    | 'white'
    | 'black'
  className?: string
} & Omit<IconProps, 'icon' | 'width' | 'height' | 'color' | 'className'>

const colorMap: Record<string, string> = {
  primary: 'text-primary-500',
  secondary: 'text-secondary-500',
  danger: 'text-danger-500',
  warning: 'text-warning-500',
  success: 'text-success-500',
  default: 'text-default-500',
  slate: 'text-slate-500',
  gray: 'text-gray-500',
  zinc: 'text-zinc-500',
  neutral: 'text-neutral-500',
  stone: 'text-stone-500',
  red: 'text-red-500',
  orange: 'text-orange-500',
  amber: 'text-amber-500',
  yellow: 'text-yellow-500',
  lime: 'text-lime-500',
  green: 'text-green-500',
  emerald: 'text-emerald-500',
  teal: 'text-teal-500',
  cyan: 'text-cyan-500',
  sky: 'text-sky-500',
  blue: 'text-blue-500',
  indigo: 'text-indigo-500',
  violet: 'text-violet-500',
  purple: 'text-purple-500',
  fuchsia: 'text-fuchsia-500',
  pink: 'text-pink-500',
  rose: 'text-rose-500',
  foreground: 'text-foreground-500',
  white: 'text-white',
  black: 'text-black',
}

const Iconify = forwardRef<SVGSVGElement, Props>((props, ref) => {
  const { icon, size = 20, color, className, ...rest } = props
  const colorClass = color ? colorMap[color] : ''
  return (
    <Icon
      ref={ref as any}
      icon={icon}
      width={size}
      height={size}
      className={cn('pointer-events-none antialiased', colorClass, className)}
      {...rest}
    />
  )
})

Iconify.displayName = 'Iconify'

export default Iconify
