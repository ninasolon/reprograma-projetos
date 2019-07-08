import React from 'react'
import { Link } from "react-router-dom"

export default function Nav(){
  return(
    <nav>
      <div className='container nav'>
        <div>
          <h1>teta colab</h1>
          <p>tradução em tecnologia e afins</p>
        </div>
        <ul>
          <li className='navmenu--link'><Link to='/'>home</Link></li>
          <li className='navmenu--link'><Link to='/textos'>textos</Link></li>
          <li className='navmenu--link'><Link to='/dicionario'>dicionário</Link></li>
          <li className='navmenu--link'><Link to='/documentacoes'>documentações</Link></li>
          <li><a href='#contato' className='navmenu--colabore'>colabore</a></li>
        </ul>
      </div>
    </nav>
  )
}