# Mídia

**Status: entregue.** Todas as imagens e vídeos do site estão em `public/img/`
e `public/video/`. Nada pendente.

As imagens vieram em JPG de 2400–2752px (≈24 MB no total) e foram convertidas
para WebP qualidade 80, redimensionadas para a largura de uso real: **1,0 MB
no total**, redução de 96%.

## Imagens · `public/img/`

| Arquivo | Onde aparece | Tamanho |
|---|---|---|
| `hero-instrumento.webp` | Hero — poster do vídeo | 1200×1607 |
| `leo-oficina.webp` | Sobre — poster do vídeo | 1100×1473 |
| `servico-conserto.webp` | Serviço 01 | 1400×1045 |
| `servico-restauracao.webp` | Serviço 02 | 1400×1045 |
| `servico-higienizacao.webp` | Serviço 03 | 1400×1045 |
| `bancada-instrumentos.webp` | O que entra na bancada | 1800×1005 |
| `antes-sax.webp` | Slider antes/depois | 1800×1005 |
| `depois-sax.webp` | Slider antes/depois | 1800×1005 |
| `og-leo-luthier.jpg` | Open Graph | 1200×630 |

## Vídeos · `public/video/`

| Arquivo | Onde aparece | Peso |
|---|---|---|
| `hero-loop.mp4` | Hero | 1,4 MB |
| `sobre-loop.mp4` | Sobre o Léo | 1,4 MB |
| `campana-loop.mp4` | Faixa entre Serviços e Antes/depois | 1,7 MB |
| `pistao-loop.mp4` | Faixa entre Como funciona e Contato | 0,8 MB |
| `poeira-loop.mp4` | Fundo do Manifesto, a 18% de opacidade | 1,2 MB |

Todos rodam mudos, em loop, `playsInline`, e **só baixam quando o bloco chega
perto da tela** (`<Video>` usa IntersectionObserver com 300px de folga). Até
lá, o poster segura o lugar. Com `prefers-reduced-motion` ligado, o vídeo
nunca carrega: fica só a foto.

## Se for trocar alguma

Mantenha o nome do arquivo e a proporção. O componente `<Foto>` mostra uma
caixa nomeando o arquivo se ele sumir, então nada quebra silenciosamente.

Proporções em uso: **3:4** no hero e no Sobre · **4:3** nos serviços ·
**16:9** na bancada e no par antes/depois.

## O par antes/depois

As duas fotos precisam do mesmo enquadramento — o slider sobrepõe uma na
outra. O par atual foi gerado na mesma sessão e bate. Se for refazer, gere as
duas em sequência pedindo explicitamente o mesmo ângulo e distância.

No celular a foto 16:9 é recortada em 3:4, o que come bastante das laterais.
Deixe o instrumento centralizado.
