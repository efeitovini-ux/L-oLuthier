import { Simbolo } from './Marca'

const navegacao = [
  { href: '#sobre', texto: 'Sobre' },
  { href: '#servicos', texto: 'Serviços' },
  { href: '#antes-depois', texto: 'Antes e depois' },
  { href: '#bancada', texto: 'Bancada' },
  { href: '#como-funciona', texto: 'Como funciona' },
  { href: '#contato', texto: 'Contato' },
]

export function Cabecalho() {
  return (
    <header className="sticky top-0 z-40 border-b border-latao/25 bg-papel/92 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <a href="#topo" aria-label="Léo Luthier — início" className="text-tinta">
          <Simbolo className="h-9 w-auto" />
        </a>

        <nav aria-label="Seções do site" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {navegacao.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-sans text-[0.62rem] font-semibold uppercase tracking-rotulo text-apoio transition-colors duration-200 hover:text-latao"
                >
                  {item.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
