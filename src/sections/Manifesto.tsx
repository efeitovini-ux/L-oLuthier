import { useReducedMotion } from 'framer-motion'
import { Pauta } from '../components/Pauta'
import { Reveal } from '../components/Reveal'
import { Video } from '../components/Video'

export function Manifesto() {
  const reduzir = useReducedMotion()

  return (
    <section id="manifesto" className="relative scroll-mt-20 overflow-hidden bg-dobra">
      {/* A poeira na luz da oficina, bem apagada atrás do texto. O véu de papel
          por cima garante que o contraste do texto não caia. */}
      {!reduzir && (
        <div aria-hidden="true" className="absolute inset-0">
          <Video
            src="/video/poeira-loop.mp4"
            poster="/img/bancada-instrumentos.webp"
            alt=""
            className="h-full w-full opacity-[0.18]"
          />
          <div className="absolute inset-0 bg-dobra/55" />
        </div>
      )}

      <div className="relative mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <Pauta className="mx-auto w-16" />

          <p className="mx-auto max-w-3xl py-14 text-center font-display text-3xl font-normal leading-[1.25] text-tinta sm:py-16 sm:text-4xl lg:text-5xl">
            Cada instrumento chega aqui com uma história. Meu trabalho é
            devolver ele em condição de responder ao músico.
          </p>

          <Pauta className="mx-auto w-16" />
        </Reveal>
      </div>
    </section>
  )
}
