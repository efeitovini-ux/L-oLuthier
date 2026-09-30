import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type Props = {
  children: ReactNode
  className?: string
  atraso?: number
}

/** Revelação ao rolar: entra de baixo com opacidade, 500 ms, ease-out. */
export function Reveal({ children, className, atraso = 0 }: Props) {
  const reduzir = useReducedMotion()

  if (reduzir) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: atraso }}
    >
      {children}
    </motion.div>
  )
}

/** Mesma entrada, mas em cascata para os filhos de uma lista. */
export function RevealLista({
  children,
  className,
  passo = 0.05,
}: Props & { passo?: number }) {
  const reduzir = useReducedMotion()

  if (reduzir) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial="oculto"
      whileInView="visivel"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ visivel: { transition: { staggerChildren: passo } } }}
    >
      {children}
    </motion.div>
  )
}

export const itemDaLista = {
  oculto: { opacity: 0, y: 14 },
  visivel: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}
