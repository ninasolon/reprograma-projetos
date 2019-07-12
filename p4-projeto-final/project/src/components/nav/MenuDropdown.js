import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class MenuDropdown extends Component{
  render(){
    return(
      <ul className='container dropdown' onClick={this.props.click}>
        <li className='dropdown--link'><Link to='/'>home</Link></li>
        <li className='dropdown--link'><Link to='/artigos'>artigos</Link></li>
        <li className='dropdown--link'><Link to='/dicionario'>dicionário</Link></li>
        <li className='dropdown--link'><Link to='/documentacoes'>documentações</Link></li>
        <li className='dropdown--colabore'><a href='#contato'>colabore</a></li>
      </ul>
    )
  }
}