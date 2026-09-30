import { BotaoWhats } from '../components/BotaoWhats'
import { Reveal } from '../components/Reveal'
import { Rotulo } from '../components/Rotulo'
import { Valor } from '../components/Pendente'
import { site } from '../data/site'

export function Contato() {
  return (
    <section id="contato" className="scroll-mt-20 bg-papel py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <Rotulo>Contato</Rotulo>

          <h2 className="mt-8 max-w-2xl font-display text-4xl font-semibold leading-tight text-tinta sm:text-5xl">
            Me conta o que está acontecendo com o instrumento.
          </h2>

          <p className="mt-7 max-w-lg text-lg leading-relaxed text-apoio">
            Pode mandar foto. Muita coisa já dá para entender antes de você
            sair de casa com ele.
          </p>

          <div className="mt-10">
            <BotaoWhats tamanho="grande">{site.whatsapp.numero}</BotaoWhats>
          </div>

          <dl className="mt-14 grid gap-10 border-t border-latao/30 pt-10 sm:grid-cols-2">
            <div>
              <dt className="font-sans text-[0.62rem] font-semibold uppercase tracking-rotulo text-latao">
                Região
              </dt>
              <dd className="mt-4 font-display text-xl text-tinta">
                <Valor valor={site.cidade} rotulo="Cidade" />
              </dd>
            </div>
            <div>
              <dt className="font-sans text-[0.62rem] font-semibold uppercase tracking-rotulo text-latao">
                Horário
              </dt>
              <dd className="mt-4 font-display text-xl text-tinta">
                <Valor valor={site.horario} rotulo="Horário" />
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
