import Link from 'next/link'
import style from '../styles/Layout.module.css'


export default function Layout(props) {
    console.log(props)
    return (
        <div className={style.Layout}>
            {console.log("aaa")}
            <div className={style.cabecalho}>
                <h1>{props.titulo ?? "Mais um Exemplo"}</h1>
                <Link href="/">Voltar</Link>
            </div>
            <div className={style.conteudo}>
                {props.children}
            </div>
        </div>
    )
}