import Layout from '../../../components/Layout';
import { useRouter } from 'next/router'

import { useEffect } from 'react'

// [] = navegação dinamica
export default function ClientePorCodigo() {
    const router = useRouter()

    return (
        <Layout titulo="Navegação Dinamica">
            <div>Código = {router.query.codigo}</div>
            <div>Filian = {router.query.filial}</div>
        </Layout>
    )
}