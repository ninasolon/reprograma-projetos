import React from 'react'
import { Link } from "react-router-dom"

export default function Conteudo(props){
  return(
    <div className='conteudo--container'>
      <h2>{props.secao}</h2>
      <div>
        <p>{props.descricao}</p>
        {props.lista}
      </div>
      <Link to={props.link}>Ver tudo</Link>
    </div>
  )
}