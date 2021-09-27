import Cabecalho from '../components/Cabecalho'

import Layout from '../components/Layout'

export default function Exemplo() {
    return (
        <Layout titulo="Usando Componentes">

            <Cabecalho titulo="Aprendendo com React" />
            <Cabecalho titulo="Aprenda Next na Pratica" />

        </Layout>
    )
}