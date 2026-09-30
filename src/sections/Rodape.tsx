import { Marca } from '../components/Marca'
import { Valor } from '../components/Pendente'
import { site } from '../data/site'

export function Rodape() {
  const ano = new Date().getFullYear()

  return (
    <footer className="border-t border-latao bg-dobra">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-[auto_1fr] sm:gap-16">
          <Marca className="h-auto w-28 shrink-0 text-tinta" />

          <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <dt className="font-sans text-[0.6rem] font-semibold uppercase tracking-rotulo text-apoio">
                WhatsApp
              </dt>
              <dd className="mt-3 text-sm">
                <a
                  href={site.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-latao transition-colors duration-200 hover:text-brasa"
                >
                  {site.whatsapp.numero}
                </a>
              </dd>
            </div>

            <div>
              <dt className="font-sans text-[0.6rem] font-semibold uppercase tracking-rotulo text-apoio">
                E-mail
              </dt>
              <dd className="mt-3 text-sm text-tinta">
                <Valor valor={site.email} rotulo="E-mail" />
              </dd>
            </div>

            <div>
              <dt className="font-sans text-[0.6rem] font-semibold uppercase tracking-rotulo text-apoio">
                Instagram
              </dt>
              <dd className="mt-3 text-sm text-tinta">
                <Valor valor={site.instagram} rotulo="Instagram" />
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-latao/25 pt-7 text-xs text-apoio sm:flex-row sm:items-center sm:justify-between">
          <p>© {ano} · Léo Luthier</p>
          <p>Conserto, restauração e higienização de instrumentos de sopro.</p>
        </div>
      </div>
    </footer>
  )
}
