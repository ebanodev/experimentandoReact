
import logo from '/home/ebano/Documentos/projetos/coding/aprendendoreact/experimentandoReact/app01/src/componentes/img/logo.svg'


export default function Cabeca(){
    return(
        <header>            
          <h1 style={{color:'#f00', fontSize:'40px'}}>Aprendendo React</h1>
          <img alt= 'qualquerporra'src={logo}/>
        </header>
    )
}
