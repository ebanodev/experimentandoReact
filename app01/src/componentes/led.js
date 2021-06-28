import React, {useState} from 'react'
import Ledverde from './img/ledverde.png'
import Ledvermelho from './img/ledvermelho.png'

export default function Led(){
    const [ligado, mudaLed]=useState(false)

    return(
            <>
                <img style={{width:'50px'}} src={ligado?Ledverde:Ledvermelho}/>
                <button onClick={()=>mudaLed(!ligado)}>mudaLed</button>
            </>
    )
}