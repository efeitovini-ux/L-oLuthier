import { BotaoFlutuante } from './components/BotaoWhats'
import { Cabecalho } from './components/Cabecalho'
import { FaixaVideo } from './components/FaixaVideo'
import { MarcasDeEnsaio } from './components/MarcasDeEnsaio'
import { ProgressoPauta } from './components/ProgressoPauta'
import { Hero } from './sections/Hero'
import { Manifesto } from './sections/Manifesto'
import { Sobre } from './sections/Sobre'
import { Servicos } from './sections/Servicos'
import { Galeria } from './sections/Galeria'
import { Bancada } from './sections/Bancada'
import { ComoFunciona } from './sections/ComoFunciona'
import { Contato } from './sections/Contato'
import { Rodape } from './sections/Rodape'

export default function App() {
  return (
    <>
      <ProgressoPauta />
      <Cabecalho />
      <MarcasDeEnsaio />
      <main>
        <Hero />
        <Manifesto />
        <Sobre />
        <Servicos />

        <FaixaVideo
          src="/video/campana-loop.mp4"
          poster="/img/depois-sax.webp"
          alt="A campana de um saxofone polido girando devagar sob a luz."
        />

        <Galeria />
        <Bancada />
        <ComoFunciona />

        <FaixaVideo
          src="/video/pistao-loop.mp4"
          poster="/img/servico-conserto.webp"
          alt="O pistão de um trompete sendo pressionado devagar."
        />

        <Contato />
      </main>
      <Rodape />
      <BotaoFlutuante />
    </>
  )
}
