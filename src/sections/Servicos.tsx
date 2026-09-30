import { motion, useReducedMotion } from 'framer-motion'
import { Foto } from '../components/Foto'
import { Reveal } from '../components/Reveal'
import { Rotulo } from '../components/Rotulo'
import { servicos } from '../data/site'

export function Servicos() {
  const reduzir = useReducedMotion()

  return (
    <section id="servicos" className="scroll-mt-20 bg-dobra pb-8 pt-24 lg:pb-12 lg:pt-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <Rotulo>Serviços</Rotulo>
          <h2 className="mt-8 max-w-2xl font-display text-4xl font-semibold leading-tight text-tinta sm:text-5xl">
            Três formas de devolver o instrumento ao músico.
          </h2>
        </Reveal>
      </div>

      {/* Cada bloco é uma grade de largura total: a foto sangra até a borda,
          alternando o lado. O texto continua alinhado à coluna de 72rem. */}
      <div className="mt-14">
        {servicos.map((servico, i) => {
          const fotoNaEsquerda = i % 2 === 1

          return (
            <motion.article
              key={servico.numero}
              initial="parado"
              whileHover={reduzir ? undefined : 'ativo'}
              whileTap={reduzir ? undefined : 'ativo'}
              className="group grid items-stretch border-t border-latao/30 lg:grid-cols-2"
            >
              <div
                className={`min-h-[18rem] overflow-hidden lg:min-h-[26rem] ${
                  fotoNaEsquerda ? 'lg:order-first' : 'lg:order-last'
                }`}
              >
                <motion.div
                  variants={{ parado: { scale: 1 }, ativo: { scale: 1.04 } }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full w-full"
                >
                  <Foto src={servico.foto} alt={servico.alt} className="h-full w-full" />
                </motion.div>
              </div>

              <div
                className={`flex flex-col justify-center py-12 lg:py-16 ${
                  fotoNaEsquerda
                    ? 'coluna-dir pl-5 sm:pl-8 lg:pl-16'
                    : 'coluna-esq pr-5 sm:pr-8 lg:pr-16'
                }`}
              >
                <motion.span
                  aria-hidden="true"
                  variants={{ parado: { x: 0 }, ativo: { x: 8 } }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="block font-display text-4xl font-semibold leading-none text-latao sm:text-5xl"
                >
                  {servico.numero}
                </motion.span>

                <motion.div
                  variants={{ parado: { x: 0 }, ativo: { x: 8 } }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <h3 className="mt-6 font-display text-2xl font-semibold leading-tight text-tinta sm:text-3xl">
                    {servico.titulo}
                  </h3>
                  <p className="mt-3 max-w-lg text-base leading-relaxed text-apoio">
                    {servico.texto}
                  </p>
                </motion.div>
              </div>
            </motion.article>
          )
        })}
        <span aria-hidden="true" className="block h-px w-full bg-latao/30" />
      </div>
    </section>
  )
}
