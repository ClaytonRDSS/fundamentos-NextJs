
import { useRouter } from 'next/router'
import Navegador from "../components/Navegador"


export default function Inicio() {
    return (

        //Colocar um estilo interno.
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            header: '100vh'

        }}>
            <Navegador texto="Estilo" destino="/estiloso" />
            <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3" />
            <Navegador texto="JSX" destino="/jsx" cor="crimson" />
            <Navegador texto="Navegação #01" destino="/navegacao/" cor="green" />
            <Navegador texto="Navegação #02" destino="/cliente/sp-2/123" cor="blue" />
            <Navegador texto="Componente com Estado" destino="/estado/" cor="#5224ab" />
            <Navegador texto="Integração com API #01" destino="/integracao_1" cor="#42a9a9" />
            <Navegador texto="Conteudo Estático" destino="/estatico" cor="#fa054a" />
        </div>
    )
}