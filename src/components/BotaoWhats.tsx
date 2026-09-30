import type { ReactNode } from 'react'
import { site } from '../data/site'
import { IconeWhats } from './IconeWhats'

type Props = {
  children?: ReactNode
  className?: string
  tamanho?: 'normal' | 'grande'
}

/** Bloco sólido de tinta sobre o papel — 14,9:1. Cantos retos. */
export function BotaoWhats({
  children = 'Falar no WhatsApp',
  className = '',
  tamanho = 'normal',
}: Props) {
  const medida =
    tamanho === 'grande' ? 'px-9 py-5 text-xs gap-4' : 'px-7 py-4 text-[0.68rem] gap-3'

  return (
    <a
      href={site.whatsapp.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center bg-tinta font-sans font-semibold uppercase tracking-rotulo text-papel transition-colors duration-200 hover:bg-brasa ${medida} ${className}`}
    >
      <IconeWhats className={tamanho === 'grande' ? 'h-5 w-5' : 'h-4 w-4'} />
      {children}
    </a>
  )
}

/** Botão flutuante, sempre ao alcance do polegar. */
export function BotaoFlutuante() {
  return (
    <a
      href={site.whatsapp.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-tinta text-papel shadow-lg shadow-tinta/25 transition-colors duration-200 hover:bg-brasa sm:h-16 sm:w-16"
    >
      <IconeWhats className="h-6 w-6 sm:h-7 sm:w-7" />
    </a>
  )
}
