/**
 * Dados reais do cliente.
 *
 * Os campos marcados com PREENCHER continuam visíveis no site de propósito —
 * eles aparecem como etiqueta tracejada até serem substituídos. Não invente
 * valor nenhum aqui: troque a constante pelo dado real quando ele chegar.
 */

export const PREENCHER = '[PREENCHER]'

const MENSAGEM_WHATSAPP =
  'Olá! Vim pelo site e gostaria de um orçamento para meu instrumento.'

export const site = {
  marca: 'Léo Luthier',

  whatsapp: {
    numero: '+55 11 96622-7515',
    link: `https://wa.me/5511966227515?text=${encodeURIComponent(MENSAGEM_WHATSAPP)}`,
  },

  email: PREENCHER,
  cidade: PREENCHER,
  instagram: PREENCHER,
  dominio: PREENCHER,
  horario: PREENCHER,
} as const

export const sobre = [
  'Trabalho só com sopro. Madeira e metal. Não é limitação — é o tempo que leva para conhecer um mecanismo de verdade.',
  'Tem instrumento aqui que já é da família há duas gerações, e tem instrumento que passou anos fechado no estojo. Os dois voltam a tocar.',
] as const

export const fatos = [
  { titulo: 'Só sopro', texto: 'Nada de corda, nada de percussão. Uma família de instrumentos, a fundo.' },
  { titulo: 'Um por vez', texto: 'Seu instrumento não entra numa fila de bancada. Ele tem a vez dele.' },
  { titulo: 'Eu toco antes', texto: 'Se não estiver respondendo como deveria, ainda não terminei.' },
] as const

export const servicos = [
  {
    numero: '01',
    foto: '/img/servico-conserto.webp',
    alt: 'Mecanismo de chaves de um saxofone em detalhe, com sapatilhas e molas.',
    titulo: 'Conserto e manutenção',
    texto:
      'Sapatilha que não veda, mola cansada, pistão que trava, solda aberta. O que impede o instrumento de responder, eu ajusto.',
  },
  {
    numero: '02',
    foto: '/img/servico-restauracao.webp',
    alt: 'Trompete desmontado peça por peça sobre pano de oficina.',
    titulo: 'Restauração completa',
    texto:
      'Instrumento parado há anos volta a tocar. Desmontagem inteira, limpeza profunda, troca do que não serve mais e regulagem peça por peça.',
  },
  {
    numero: '03',
    foto: '/img/servico-higienizacao.webp',
    alt: 'Limpeza do interior do tudel de um saxofone, com a cortiça nova à vista.',
    titulo: 'Higienização e revisão',
    texto:
      'Limpeza interna, troca de cortiça e lubrificação. É a revisão que mantém o instrumento pronto para responder no ensaio.',
  },
] as const

/**
 * Lista de partida com os sopros mais comuns numa orquestra.
 * Confirmar com o Léo o que ele de fato atende antes de publicar.
 */
export const instrumentos = {
  madeiras: [
    'Clarinete',
    'Saxofone soprano',
    'Saxofone alto',
    'Saxofone tenor',
    'Saxofone barítono',
    'Flauta transversal',
    'Flautim',
    'Oboé',
    'Fagote',
  ],
  metais: [
    'Trompete',
    'Flugelhorn',
    'Trombone de vara',
    'Trombone de pistos',
    'Trompa',
    'Bombardino / Eufônio',
    'Tuba',
    'Sousafone',
  ],
} as const

export const passos = [
  {
    numero: '01',
    titulo: 'Você fala comigo no WhatsApp',
    texto:
      'Me conta qual é o instrumento e o que está acontecendo com ele. Se der, manda uma foto.',
  },
  {
    numero: '02',
    titulo: 'Leva o instrumento',
    texto:
      'A gente combina o dia. Eu preciso ver e testar antes de dizer qualquer coisa.',
  },
  {
    numero: '03',
    titulo: 'Recebe o orçamento',
    texto:
      'Digo o que precisa ser feito, o que pode esperar e quanto fica. A decisão é sua.',
  },
  {
    numero: '04',
    titulo: 'Retira pronto',
    texto: 'Regulado e testado. Eu toco o instrumento antes de devolver.',
  },
] as const

export const comparacoes = [
  {
    id: 'sax',
    titulo: 'Saxofone alto',
    nota: 'Sapatilhas trocadas, mecanismo regulado e corpo higienizado.',
    antes: '/img/antes-sax.webp',
    depois: '/img/depois-sax.webp',
  },
] as const
