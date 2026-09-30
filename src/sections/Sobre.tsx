import { motion } from 'framer-motion'
import { Reveal, RevealLista, itemDaLista } from '../components/Reveal'
import { Rotulo } from '../components/Rotulo'
import { Video } from '../components/Video'
import { sobre, fatos } from '../data/site'

export function Sobre() {
  return (
    <section id="sobre" className="scroll-mt-20 bg-papel">
      {/* A mídia sangra pela esquerda; o texto fica na coluna. */}
      <div className="grid items-stretch lg:grid-cols-[0.92fr_1fr]">
        <div className="min-h-[24rem] lg:min-h-[34rem]">
          <Video
            src="/video/sobre-loop.mp4"
            poster="/img/leo-oficina.webp"
            alt="Mãos ajustando o mecanismo de chaves de um clarinete na bancada."
            className="h-full w-full"
          />
        </div>

        <div className="coluna-dir self-center py-16 pl-5 sm:pl-8 lg:py-28 lg:pl-16">
          <Reveal>
            <Rotulo>Sobre o Léo</Rotulo>
            <h2 className="mt-7 font-display text-4xl font-semibold leading-tight text-tinta sm:text-5xl">
              Quem vai mexer no seu instrumento.
            </h2>

            <div className="mt-7 max-w-xl space-y-6 text-lg leading-relaxed text-apoio">
              {sobre.map((paragrafo, i) => (
                <p key={i} className={i === 0 ? 'text-tinta' : undefined}>
                  {paragrafo}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Faixa de três fatos — quebra o bloco de texto e dá ritmo. */}
      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 lg:pb-28">
        <RevealLista className="grid gap-px border-t border-latao/30 sm:grid-cols-3">
          {fatos.map((fato) => (
            <motion.div
              key={fato.titulo}
              variants={itemDaLista}
              className="group border-b border-latao/30 py-8 sm:border-b-0 sm:pr-8"
            >
              <p className="font-display text-3xl text-latao transition-transform duration-300 group-hover:translate-x-1">
                {fato.titulo}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-apoio">{fato.texto}</p>
            </motion.div>
          ))}
        </RevealLista>
      </div>
    </section>
  )
}
