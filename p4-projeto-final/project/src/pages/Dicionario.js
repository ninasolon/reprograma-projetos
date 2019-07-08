import React from 'react'
import TabelaDicionario from '../components/dicionario/TabelaDicionario'
import HeaderImg from '../components/HeaderImg'

export default function Dicionario (props){
  return(
    <div>
      < HeaderImg />
      <div className='container dicio--container'>
        <h2>{"< dicionário />"}</h2>
        <p>Consulte a tradução e o significado de palavras frequentemente usadas em programação.</p>
        < TabelaDicionario />
      </div>
    </div>
  )
}