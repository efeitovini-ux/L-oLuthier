import { useEffect, useState } from 'react'

/**
 * Marcas de ensaio — a régua lateral que acompanha o scroll.
 *
 * Em partitura de orquestra, as letras em quadrado marcam os pontos de
 * retomada do ensaio. Aqui elas indexam as seções: a ativa se preenche,
 * e clicar salta para ela.
 */
const marcas = [
  { id: 'topo', letra: 'A', nome: 'Início' },
  { id: 'manifesto', letra: 'B', nome: 'Manifesto' },
  { id: 'sobre', letra: 'C', nome: 'Sobre o Léo' },
  { id: 'servicos', letra: 'D', nome: 'Serviços' },
  { id: 'antes-depois', letra: 'E', nome: 'Antes e depois' },
  { id: 'bancada', letra: 'F', nome: 'Bancada' },
  { id: 'como-funciona', letra: 'G', nome: 'Como funciona' },
  { id: 'contato', letra: 'H', nome: 'Contato' },
] as const

export function MarcasDeEnsaio() {
  const [ativa, setAtiva] = useState<string>('topo')

  useEffect(() => {
    const alvos = marcas
      .map((m) => document.getElementById(m.id))
      .filter((el): el is HTMLElement => el !== null)

    const observador = new IntersectionObserver(
      (entradas) => {
        // a seção que ocupa a faixa central da tela é a ativa
        const visivel = entradas
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visivel) setAtiva(visivel.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.01, 0.5, 1] },
    )

    alvos.forEach((el) => observador.observe(el))
    return () => observador.disconnect()
  }, [])

  return (
    <nav
      aria-label="Marcas de ensaio"
      className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ul className="flex flex-col gap-1.5">
        {marcas.map((marca) => {
          const atual = ativa === marca.id
          return (
            <li key={marca.id}>
              <a
                href={`#${marca.id}`}
                aria-current={atual ? 'true' : undefined}
                className="group flex items-center gap-3"
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center border font-sans text-[0.6rem] font-semibold transition-colors duration-300 ${
                    atual
                      ? 'border-latao bg-latao text-papel'
                      : 'border-latao/35 text-latao/60 group-hover:border-latao group-hover:text-latao'
                  }`}
                >
                  {marca.letra}
                </span>
                <span
                  className={`whitespace-nowrap font-sans text-[0.6rem] font-semibold uppercase tracking-rotulo transition-all duration-300 ${
                    atual
                      ? 'text-latao opacity-100'
                      : 'text-apoio opacity-0 group-hover:opacity-100'
                  }`}
                >
                  {marca.nome}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
