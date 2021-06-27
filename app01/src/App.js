
import React, {useState} from 'react'
import Cabeca from './componentes/header'
import Corpo from './componentes/corpo'
import Relogio from './componentes/relogio'
import SomaVinte from './componentes/somaVinte'

export default function App() {
  const [num, setNum]=useState(10)
  return (
    <>
      <SomaVinte num={num} setNum={setNum}/>
      <p>valor do state num: {num}</p>
      <button onClick={()=>setNum(num+10)}>Soma 10</button>
      <Relogio/>
      
      <Cabeca/>
      <Corpo/>
    
    </>
  )
}
