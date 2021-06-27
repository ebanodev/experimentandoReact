import React from 'react'

export default function SomaVinte(props){
    
    return(
        <>
        <p>Valor do Soma Vinte: {props.num}</p>
        <button onClick={()=>props.setNum(props.num + 20)}>soma20</button>
        </>
    ) 
}