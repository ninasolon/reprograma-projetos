import React, { Component } from 'react'
import { Link } from "react-router-dom"
// import MenuDropdown from '../components/nav/MenuDropdown'

export default class Nav extends Component{
  constructor(props){
    super(props);
    this.state = {
      classeMenu: 'dropdown-inativo',
    }
  }

  menuDropdown=()=>{
    //checar toggle
    if(this.state.classeMenu==='dropdown-inativo'){
      this.setState({
        classeMenu: 'dropdown-ativo'
      })
    } else {
      this.setState({
        classeMenu: 'dropdown-inativo'
      })
    }
  }

  render(){
    return(
      <nav id='nav'>
        <div className='container nav'>
          <Link to='/'>
            <h1>debug</h1>
            <p>tradução colaborativa em tecnologia</p>
          </Link>
          <ul className='navmenu'>
            <li className='navmenu--link'><Link to='/'>home</Link></li>
            <li className='navmenu--link'><Link to='/artigos'>artigos</Link></li>
            <li className='navmenu--link'><Link to='/dicionario'>dicionário</Link></li>
            <li className='navmenu--link'><Link to='/documentacoes'>documentações</Link></li>
            <li><a href='#contato' className='navmenu--colabore'>colabore</a></li>
          </ul>
          <div className='navmenu--hamburguer' onClick={this.menuDropdown}><i class="fas fa-bars"></i></div>
        </div>
        <ul className={`container ${this.state.classeMenu}`}>
          <li className='dropdown--link' onClick={this.menuDropdown}><Link to='/'>home</Link></li>
          <li className='dropdown--link' onClick={this.menuDropdown}><Link to='/artigos'>artigos</Link></li>
          <li className='dropdown--link' onClick={this.menuDropdown}><Link to='/dicionario'>dicionário</Link></li>
          <li className='dropdown--link' onClick={this.menuDropdown}><Link to='/documentacoes'>documentações</Link></li>
          <li className='dropdown--colabore' onClick={this.menuDropdown}><a href='#contato'>colabore</a></li>
        </ul>
      </nav>
    )
  }
}