import Dados from './dados'

export default function Corpo(){
    const cnl = ()=> {
        return 'CFB Cursos'
    }
    const yt = 'youtube.com/cfbcursos'
    const crs= 'React.js'
    const somar=(v1, v2)=>{
        return v1+v2
    }

    const textDestaque={
        color:'#00f',
        fontSize:'20px'
    }

    return(
        <section>
        <h2 style={textDestaque}>Esse é o componente corpo</h2>
        <p>esse é o paragrafo do corpo</p>
        <Dados canal= {cnl} youtube= {yt} curso= {crs} somar={somar}/>

        </section>
    )
}