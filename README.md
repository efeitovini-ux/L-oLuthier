# Léo Luthier

Site institucional de página única. Conserto, restauração e higienização de
instrumentos de sopro.

## Rodar

```bash
npm install
npm run dev
```

`npm run build` gera `dist/`. Deploy na Vercel detecta Vite sozinho.

> Ao trocar `tailwind.config.js`, **reinicie o `npm run dev`**. O servidor
> mantém a config em cache e passa a acusar que as classes novas não existem,
> mesmo com o build de produção passando.

## Stack

Vite · React · TypeScript · Tailwind CSS · Framer Motion. Sem backend, sem
formulário, sem banco: todo contato vai para o WhatsApp via `wa.me`.

## O conceito — a bancada, não o templo

A estética vem do metal e da precisão do ofício: fundo escuro e quente,
fotografia grande, Instrument Serif com personalidade, fios finos e numeração
como em desenho técnico. O instrumento é o herói visual.

**Proibido no layout:** arco, janela, forma pontiaguda, canto arredondado
grande, card branco com sombra, ícone genérico em círculo, gradiente colorido
e qualquer elemento que sugira prédio, templo ou instituição.

**Nunca citar, escrever ou ilustrar vínculo com qualquer igreja, denominação
ou instituição religiosa.** O público se reconhece pelo contexto do ofício.

Cantos retos. Fios finos. Muito preto. Pouco latão, e só onde importa.

## Paleta

| Token | HEX | Papel |
|---|---|---|
| `breu` | `#12100E` | Fundo principal |
| `oficina` | `#1C1917` | Superfície, faixas alternadas |
| `latao` | `#C08A2E` | Acento — fio, numeração, rótulo, link |
| `polido` | `#E3B85F` | Hover, brilho, anel de foco |
| `marfim` | `#F2EFEA` | Títulos e texto sobre escuro |
| `fumaca` | `#A39C93` | Texto de apoio |
| `claro` | `#DCE0E2` | A única seção de respiro |

Contraste sobre `breu`: marfim 16,6:1 · fumaça 7,0:1 · latão 6,25:1 · polido
10,2:1 — todos passam. **Sobre o cinza claro o latão reprova (2,29:1)**, por
isso na seção Bancada os rótulos vão em `breu`, e só os fios ficam em latão.

A numeração grande usa `text-latao/70` — a "baixa opacidade" que o briefing
pede, em 3,5:1, dentro do mínimo de texto grande.

### O latão nunca é fundo

Única exceção, pedida no briefing: o botão flutuante, círculo em latão com
ícone em breu (6,25:1). Todo o resto é fio de 1px, a divisória de 2px do
slider, ou palavra.

## Campos a preencher

`src/data/site.ts` concentra tudo. Os campos ainda em `[PREENCHER]` aparecem
no site como etiqueta tracejada, de propósito:

`email` · `cidade` · `instagram` · `dominio` · `horario`

O domínio também precisa entrar em `index.html`, nas tags `og:image` e
`og:url`, como URL absoluta.

## A confirmar com o cliente

A lista de instrumentos em `src/data/site.ts` é um ponto de partida com os
sopros mais comuns numa orquestra. **Confirmar com o Léo o que ele de fato
atende** antes de publicar.

## Mídia

Entregue. 9 imagens em WebP (1,0 MB no total, vindas de 24 MB de JPG) e 5
vídeos em loop. Ver `public/img/README.md` para a lista e onde cada um entra.

Os vídeos só baixam quando o bloco chega perto da tela, e nunca carregam com
`prefers-reduced-motion` ligado. O `<Foto>` continua mostrando o nome do
arquivo caso algum suma — nada quebra em silêncio.
