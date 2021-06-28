import '/home/ebano/Documentos/projetos/coding/aprendendoreact/experimentandoReact/app01/src/App.css'

export default function Dados(props){
    let n1=10

    let n2=5

    return(
        <section>
            <p className='texto'>Canal: {props.canal()}</p>
            <p>Youtube: {props.youtube}</p>
            <p>Curso: {props.curso}</p>
            <p>{'a soma de ' + n1 + ' com ' + n2 + ' é igual a' + props.somar(n1, n2)}</p>

        </section>
    )
}