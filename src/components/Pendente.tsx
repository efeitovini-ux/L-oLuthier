import { PREENCHER } from '../data/site'

/**
 * Mantém o campo [PREENCHER] visível no site, como o briefing pede.
 * Nada aqui inventa dado — o placeholder some quando o valor real entrar.
 */
export function Pendente({ rotulo }: { rotulo?: string }) {
  return (
    <span className="inline-block border border-dashed border-latao/70 px-2 py-1 font-sans text-[0.6rem] font-semibold uppercase leading-relaxed tracking-rotulo text-latao">
      {rotulo ? `${rotulo} ${PREENCHER}` : PREENCHER}
    </span>
  )
}

/** Mostra o valor real, ou a etiqueta pendente se ele ainda não existe. */
export function Valor({ valor, rotulo }: { valor: string; rotulo?: string }) {
  return valor === PREENCHER ? <Pendente rotulo={rotulo} /> : <>{valor}</>
}
