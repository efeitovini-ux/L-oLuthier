import { useCallback, useRef, useState } from 'react'
import { Foto } from './Foto'

type Props = {
  antes: string
  depois: string
  titulo: string
  nota?: string
}

const limitar = (n: number) => Math.min(100, Math.max(0, n))

/**
 * Slider de arrastar em largura total, sem moldura e sem biblioteca externa.
 *
 * A foto do depois fica na base; a do antes entra por cima recortada em
 * inset(). Arrastar para a esquerda descobre o instrumento pronto.
 *
 * O papel de slider fica no invólucro, e não na divisória, para que o anel
 * de foco cerque a peça inteira e o alvo de toque seja a imagem toda.
 */
export function AntesDepois({ antes, depois, titulo, nota }: Props) {
  const [posicao, setPosicao] = useState(50)
  const involucro = useRef<HTMLDivElement>(null)
  const arrastando = useRef(false)

  const atualizar = useCallback((clientX: number) => {
    const el = involucro.current
    if (!el) return
    const caixa = el.getBoundingClientRect()
    if (caixa.width === 0) return
    setPosicao(limitar(((clientX - caixa.left) / caixa.width) * 100))
  }, [])

  const aoPressionar = (e: React.PointerEvent<HTMLDivElement>) => {
    arrastando.current = true
    e.currentTarget.setPointerCapture(e.pointerId)
    atualizar(e.clientX)
  }

  const aoMover = (e: React.PointerEvent<HTMLDivElement>) => {
    if (arrastando.current) atualizar(e.clientX)
  }

  const aoSoltar = (e: React.PointerEvent<HTMLDivElement>) => {
    arrastando.current = false
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId)
    }
  }

  const aoTeclar = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const passo = e.shiftKey ? 10 : 2
    const mapa: Record<string, number> = {
      ArrowLeft: -passo,
      ArrowRight: passo,
      ArrowDown: -passo,
      ArrowUp: passo,
    }

    if (e.key in mapa) {
      e.preventDefault()
      setPosicao((p) => limitar(p + mapa[e.key]))
    } else if (e.key === 'Home') {
      e.preventDefault()
      setPosicao(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      setPosicao(100)
    }
  }

  return (
    <figure className="m-0">
      <div
        ref={involucro}
        role="slider"
        tabIndex={0}
        aria-label={`Comparar antes e depois — ${titulo}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(posicao)}
        aria-valuetext={`${Math.round(posicao)}% da foto do antes visível`}
        onPointerDown={aoPressionar}
        onPointerMove={aoMover}
        onPointerUp={aoSoltar}
        onPointerCancel={aoSoltar}
        onKeyDown={aoTeclar}
        className="relative aspect-[3/4] w-full cursor-ew-resize touch-pan-y select-none overflow-hidden bg-dobra sm:aspect-[4/3] lg:aspect-video"
      >
        <Foto
          src={depois}
          alt={`${titulo} depois do serviço`}
          className="absolute inset-0 h-full w-full"
        />

        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - posicao}% 0 0)` }}>
          <Foto src={antes} alt={`${titulo} antes do serviço`} className="h-full w-full" />
        </div>

        {/* Divisória — fio de latão de 2px com alça circular. Só visual:
            o controle está no invólucro. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -ml-px w-0.5 bg-latao"
          style={{ left: `${posicao}%` }}
        >
          <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-latao bg-papel">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-latao" fill="currentColor">
              <path d="M9.5 7 5 12l4.5 5V7Zm5 0v10l4.5-5-4.5-5Z" />
            </svg>
          </span>
        </div>

        <span
          aria-hidden="true"
          className="absolute bottom-5 left-5 bg-papel/85 px-2.5 py-1.5 font-sans text-[0.6rem] font-semibold uppercase tracking-rotulo text-tinta"
        >
          Antes
        </span>
        <span
          aria-hidden="true"
          className="absolute bottom-5 right-5 bg-papel/85 px-2.5 py-1.5 font-sans text-[0.6rem] font-semibold uppercase tracking-rotulo text-tinta"
        >
          Depois
        </span>
      </div>

      {/* A imagem sangra até as bordas, mas a legenda volta para a coluna
          de texto do resto do site. */}
      <figcaption className="mx-auto mt-6 max-w-6xl px-5 sm:px-8">
        <h3 className="font-display text-3xl text-tinta sm:text-4xl">{titulo}</h3>
        {nota && <p className="mt-2 max-w-xl text-sm leading-relaxed text-apoio">{nota}</p>}
      </figcaption>
    </figure>
  )
}
