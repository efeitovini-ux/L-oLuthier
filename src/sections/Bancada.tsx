import { motion } from 'framer-motion'
import { Foto } from '../components/Foto'
import { Reveal, RevealLista, itemDaLista } from '../components/Reveal'
import { Rotulo } from '../components/Rotulo'
import { instrumentos } from '../data/site'

const colunas = [
  { titulo: 'Madeiras', lista: instrumentos.madeiras },
  { titulo: 'Metais', lista: instrumentos.metais },
] as const

export function Bancada() {
  return (
    <section id="bancada" className="scroll-mt-20 bg-papel pb-24 pt-24 lg:pb-32 lg:pt-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <Rotulo>O que entra na bancada</Rotulo>
          <h2 className="mt-8 max-w-2xl font-display text-4xl font-semibold leading-tight text-tinta sm:text-5xl">
            Madeiras e metais, um de cada vez.
          </h2>
        </Reveal>
      </div>

      {/* Faixa de largura total — sangra até as bordas, sem moldura. */}
      <Foto
        src="/img/bancada-instrumentos.webp"
        alt="Clarinete, saxofone alto, trompete e trombone alinhados sobre a bancada."
        className="mt-14 h-64 w-full sm:h-80 lg:h-[26rem]"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-12">
          {colunas.map((coluna) => (
            <div key={coluna.titulo} className="border-t border-latao pt-7">
              <h3 className="font-sans text-[0.68rem] font-semibold uppercase tracking-rotulo text-latao">
                {coluna.titulo}
              </h3>

              {/* Os itens entram em cascata; o fio cresce ao passar o mouse. */}
              <RevealLista className="mt-6" passo={0.04}>
                <ul>
                  {coluna.lista.map((nome) => (
                    <motion.li
                      key={nome}
                      variants={itemDaLista}
                      className="group flex items-baseline gap-4 py-1.5 font-display text-xl text-tinta"
                    >
                      <span
                        aria-hidden="true"
                        className="h-px w-4 shrink-0 bg-latao transition-all duration-300 group-hover:w-8"
                      />
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        {nome}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </RevealLista>
            </div>
          ))}
        </div>

        <Reveal>
          <p className="mt-12 text-base text-apoio">
            Não achou o seu na lista? Me manda uma mensagem — eu digo se atendo.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
