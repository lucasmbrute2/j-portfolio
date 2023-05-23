import { ButtonHTMLAttributes } from 'react'

interface CtaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function CtaButton({ children, ...rest }: CtaButtonProps) {
  return <button {...rest}>{children}</button>
}
