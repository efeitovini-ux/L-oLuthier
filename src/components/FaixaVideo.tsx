import { Video } from './Video'

type Props = {
  src: string
  poster: string
  alt: string
}

/** Faixa de largura total entre seções — o vídeo é o conteúdo, sem texto por cima. */
export function FaixaVideo({ src, poster, alt }: Props) {
  return (
    <div className="h-52 w-full sm:h-64 lg:h-72">
      <Video src={src} poster={poster} alt={alt} className="h-full w-full" />
    </div>
  )
}
