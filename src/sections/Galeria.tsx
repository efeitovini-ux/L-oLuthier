import { AntesDepois } from '../components/AntesDepois'
import { Reveal } from '../components/Reveal'
import { Rotulo } from '../components/Rotulo'
import { comparacoes } from '../data/site'

export function Galeria() {
  return (
    <section id="antes-depois" className="scroll-mt-20 bg-papel py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <Rotulo>Antes e depois</Rotulo>
          <h2 className="mt-8 max-w-2xl font-display text-4xl font-semibold leading-tight text-tinta sm:text-5xl">
            O instrumento que volta para o ensaio.
          </h2>
          <p className="mt-6 max-w-md text-base text-apoio">
            Arraste a divisória sobre a foto para ver a diferença.
          </p>
        </Reveal>
      </div>

      {/* Largura total: o slider sangra até as bordas, sem moldura. */}
      <div className="mt-14 space-y-20 lg:mt-16">
        {comparacoes.map((item, i) => (
          <Reveal key={item.id} atraso={i * 0.08}>
            <AntesDepois
              antes={item.antes}
              depois={item.depois}
              titulo={item.titulo}
              nota={item.nota}
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
