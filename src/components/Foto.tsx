import { useState } from 'react'

type Props = {
  src: string
  alt: string
  className?: string
  eager?: boolean
  /**
   * Foto de ambiente: entra em preto e branco. A cor fica reservada ao
   * instrumento, que é o único ponto de cor junto com o latão.
   */
  ambiente?: boolean
}

/**
 * Enquanto a foto real não entra em public/img/, o lugar dela aparece
 * nomeando o arquivo que falta — em vez de um ícone de imagem quebrada.
 * Trocar o arquivo resolve sozinho, sem tocar no código.
 */
export function Foto({ src, alt, className = '', eager = false, ambiente = false }: Props) {
  const [falhou, setFalhou] = useState(false)

  if (falhou) {
    return (
      <div
        role="img"
        aria-label={`Foto pendente: ${alt}`}
        className={`flex flex-col items-center justify-center gap-3 bg-dobra px-6 text-center ${className}`}
      >
        <span className="font-sans text-[0.6rem] font-semibold uppercase tracking-rotulo text-latao">
          Foto pendente
        </span>
        <span aria-hidden="true" className="h-px w-8 bg-latao" />
        <code className="text-[0.7rem] text-apoio">{src}</code>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFalhou(true)}
      className={`bg-dobra object-cover ${ambiente ? 'grayscale' : ''} ${className}`}
    />
  )
}
