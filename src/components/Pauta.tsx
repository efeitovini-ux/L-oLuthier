import { motion, useReducedMotion } from 'framer-motion'

type Props = {
  className?: string
  linhas?: number
  /** Desenha os fios da esquerda para a direita ao entrar na tela. */
  animar?: boolean
}

/**
 * Os cinco fios da pauta — o motivo estrutural do site.
 *
 * Quando anima, cada fio se desenha da esquerda para a direita em cascata,
 * como quem risca a pauta na folha.
 */
export function Pauta({ className = '', linhas = 5, animar = true }: Props) {
  const reduzir = useReducedMotion()

  if (!animar || reduzir) {
    return (
      <span aria-hidden="true" className={`flex flex-col gap-[3px] ${className}`}>
        {Array.from({ length: linhas }, (_, i) => (
          <span key={i} className="block h-px w-full bg-latao/60" />
        ))}
      </span>
    )
  }

  return (
    <span aria-hidden="true" className={`flex flex-col gap-[3px] ${className}`}>
      {Array.from({ length: linhas }, (_, i) => (
        <motion.span
          key={i}
          className="block h-px w-full origin-left bg-latao/60"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.07 }}
        />
      ))}
    </span>
  )
}
