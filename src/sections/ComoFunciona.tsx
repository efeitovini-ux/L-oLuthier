import { Reveal } from '../components/Reveal'
import { Rotulo } from '../components/Rotulo'
import { passos } from '../data/site'

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="scroll-mt-20 bg-dobra py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <Rotulo>Como funciona</Rotulo>
          <h2 className="mt-8 max-w-2xl font-display text-4xl font-semibold leading-tight text-tinta sm:text-5xl">
            Do primeiro recado até a retirada.
          </h2>
        </Reveal>

        {/* Fio de latão ligando os quatro passos. No empilhado do celular
            ele vira o fio de topo de cada bloco. */}
        <ol className="mt-16 grid gap-10 border-latao/30 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:border-t">
          {passos.map((passo, i) => (
            <Reveal key={passo.numero} atraso={i * 0.08} className="h-full">
              <li className="h-full list-none border-t border-latao/30 pt-7 lg:border-t-0 lg:pt-9">
                <span
                  aria-hidden="true"
                  className="font-display text-4xl font-semibold leading-none text-latao"
                >
                  {passo.numero}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold leading-tight text-tinta">
                  {passo.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-apoio">{passo.texto}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
