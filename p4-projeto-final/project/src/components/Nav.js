import React from 'react'
import { Link } from "react-router-dom"

export default function Nav(){
  return(
    <nav>
      <div className='container nav'>
        <Link to='/'>
          <h1>debug</h1>
          <p>tradução colaborativa em tecnologia</p>
        </Link>
        <ul>
          <li className='navmenu--link'><Link to='/'>home</Link></li>
          <li className='navmenu--link'><Link to='/busca'>artigos</Link></li>
          <li className='navmenu--link'><Link to='/dicionario'>dicionário</Link></li>
          <li className='navmenu--link'><Link to='/documentacoes'>documentações</Link></li>
          <li><a href='#contato' className='navmenu--colabore'>colabore</a></li>
        </ul>
      </div>
    </nav>
  )
}