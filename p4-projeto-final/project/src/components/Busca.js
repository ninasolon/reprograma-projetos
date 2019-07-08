import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Busca extends Component{
  render(){
    return(
      <form className={this.props.classe} onSubmit={this.props.click}>
        <h3>busca por palavra-chave</h3>
        <input type='text' className='busca--input' id='busca' ref={this.props.refBusca}></input>
        <h3>ou categoria</h3>
        <select id='categoria' ref={this.props.refCategoria}>
          <option value=''></option>
          <option value='html'>HTML</option>
          <option value='css'>CSS</option>
          <option value='javascript'>JavaScript</option>
          <option value='git'>Git</option>
          <option value='api'>API</option>
        </select>
        <input type='submit' value='Pesquisar' className='busca--btn'></input>
        <Link to='/textos'>Ver todos os textos</Link>
      </form>
    )
  }
}
