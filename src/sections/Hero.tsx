import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { BotaoWhats } from '../components/BotaoWhats'
import { Rotulo } from '../components/Rotulo'
import { Video } from '../components/Video'
import { site } from '../data/site'

export function Hero() {
  const alvo = useRef<HTMLElement>(null)
  const reduzir = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: alvo,
    offset: ['start start', 'end start'],
  })
  const escala = useTransform(scrollYProgress, [0, 1], [1, reduzir ? 1 : 1.08])

  return (
    <section id="topo" ref={alvo} className="overflow-hidden bg-papel">
      {/* Grade de largura total: o texto se alinha à coluna de 72rem,
          a mídia sangra até a borda direita da tela. */}
      <div className="grid items-stretch lg:grid-cols-[1fr_0.92fr]">
        <div className="coluna-esq py-16 pr-5 sm:pr-8 lg:py-28 lg:pr-16">
          <Rotulo>Para quem toca em orquestra</Rotulo>

          <motion.h1
            initial={reduzir ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="mt-8 font-display text-5xl font-semibold leading-[1.06] tracking-[-0.01em] text-tinta sm:text-6xl lg:text-7xl"
          >
            Instrumento de sopro é coisa de precisão.
          </motion.h1>

          <motion.p
            initial={reduzir ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.28 }}
            className="mt-7 max-w-md text-lg leading-relaxed text-apoio"
          >
            É só disso que eu cuido. Madeira e metal, um por vez.
          </motion.p>

          <motion.div
            initial={reduzir ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.42 }}
            className="mt-9 flex flex-wrap items-center gap-6"
          >
            <BotaoWhats tamanho="grande" />
            <span className="text-sm text-apoio">{site.whatsapp.numero}</span>
          </motion.div>
        </div>

        {/* O recorte fica FORA do que escala: com o overflow-hidden dentro,
            o zoom do parallax vazava e criava rolagem horizontal. */}
        <div className="min-h-[24rem] overflow-hidden lg:min-h-[38rem]">
          <motion.div style={{ scale: escala }} className="h-full w-full">
            <Video
              src="/video/hero-loop.mp4"
              poster="/img/hero-instrumento.webp"
              alt="Saxofone de latão sobre a bancada, com a luz da janela percorrendo o corpo do instrumento."
              className="h-full w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
