import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * Fio de latão no topo que preenche conforme a página rola.
 * É a régua de quanto da partitura já foi lida.
 */
export function ProgressoPauta() {
  const { scrollYProgress } = useScroll()
  const suave = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: suave }}
      className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-latao"
    />
  )
}
