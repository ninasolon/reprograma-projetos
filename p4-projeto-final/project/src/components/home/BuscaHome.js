import React, { Component } from 'react'

export default class BuscaHome extends Component{
  render(){
    return(
      <form className='busca--campos' onSubmit={this.props.btnBusca}>
        <h3>busca por palavra-chave</h3>
        <input type='text' id='busca' ref={this.props.refBusca}></input>
        <h3>ou categoria</h3>
        <select id='categoria' ref={this.props.refCategoria} onChange={this.props.select}>
          <option value=''></option>
          <option value='API'>API</option>
          <option value='HTML'>HTML</option>
          <option value='JavaScript'>JavaScript</option>
        </select>
        <button type='submit' className='busca--btn'>Pesquisar</button>
      </form>
    )
  }
}
