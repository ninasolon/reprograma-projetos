import React, { Component } from 'react'
import { Link } from "react-router-dom"
import MenuDropdown from '../components/nav/MenuDropdown'

export default class Nav extends Component{
  constructor(props){
    super(props);
    this.state = {
      dropdown: false,
    }
  }

  menuDropdown=()=>{ 
    if (!this.state.dropdown) {
      document.addEventListener('click', this.outsideClick, false);
    } else {
      document.removeEventListener('click', this.outsideClick, false);
    }
    this.setState(prevState=>({ dropdown: !prevState.dropdown }))
  }

  outsideClick=(e)=>{
    if (this.node.contains(e.target)) {
      return;
    }
    this.menuDropdown();
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
        <div id='menuDropdown' ref={node => { this.node = node }}>
          {this.state.dropdown && <MenuDropdown click={this.menuDropdown}/>}
        </div>
      </nav>
    )
  }
}