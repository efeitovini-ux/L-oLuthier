import type { ReactNode } from 'react'
import { Pauta } from './Pauta'

type Props = {
  children: ReactNode
  className?: string
  /** A pauta de cinco fios antes do texto. */
  pauta?: boolean
}

/** Rótulo de seção: Inter 600, caixa alta, letter-spacing 0.2em. */
export function Rotulo({ children, className = 'text-latao', pauta = true }: Props) {
  return (
    <p
      className={`flex items-center gap-4 font-sans text-[0.68rem] font-semibold uppercase tracking-rotulo ${className}`}
    >
      {pauta && <Pauta className="w-10 shrink-0" />}
      {children}
    </p>
  )
}
