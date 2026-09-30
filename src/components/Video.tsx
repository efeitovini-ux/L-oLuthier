import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Foto } from './Foto'

type Props = {
  src: string
  /** Imagem estática: é o poster, o fallback e o que aparece com movimento reduzido. */
  poster: string
  alt: string
  className?: string
}

/**
 * Vídeo de fundo em loop, silencioso.
 *
 * Só baixa o arquivo quando o bloco entra na tela — cada loop tem mais de um
 * megabyte e carregar os cinco de uma vez atrasaria a primeira dobra. Até lá,
 * o poster segura o lugar.
 *
 * Com `prefers-reduced-motion` ligado, o vídeo nunca carrega: fica a foto.
 */
export function Video({ src, poster, alt, className = '' }: Props) {
  const reduzir = useReducedMotion()
  const involucro = useRef<HTMLDivElement>(null)
  const [visivel, setVisivel] = useState(false)
  const [falhou, setFalhou] = useState(false)

  useEffect(() => {
    if (reduzir) return
    const el = involucro.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true)
          obs.disconnect()
        }
      },
      { rootMargin: '300px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [reduzir])

  if (reduzir || falhou) {
    return <Foto src={poster} alt={alt} className={className} />
  }

  return (
    <div ref={involucro} className={`relative overflow-hidden bg-dobra ${className}`}>
      <video
        // o poster cobre o vazio enquanto o arquivo não chega
        poster={poster}
        src={visivel ? src : undefined}
        preload="none"
        autoPlay
        muted
        loop
        playsInline
        aria-label={alt}
        onError={() => setFalhou(true)}
        className="h-full w-full object-cover"
      />
    </div>
  )
}
