
import logo from './img/logo.svg'


export default function Cabeca(){
    return(
        <header>            
          <h1 style={{color:'#f00', fontSize:'40px'}}>Aprendendo React</h1>
          <img src={logo}/>
        </header>
    )
}
