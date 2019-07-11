import React, { Component } from 'react'

export default class BuscaArtigos extends Component{
  render(){
    return(
      <form className='busca--form' onSubmit={this.props.btnInput}>
        <h3>categoria</h3>
        <select id='categoria' ref={this.props.refCategoria} onChange={this.props.changeSelect} value={this.props.valueCategoria}>
          <option value=''></option>
          <option value='API'>API</option>
          <option value='HTML'>HTML</option>
          <option value='JavaScript'>JavaScript</option>
        </select>
        <h3>busca por palavra-chave</h3>
        <div className='busca--input'>
          <input type='text' id='busca' onChange={this.props.changeInput} value={this.props.valueInput}></input>
          <button type='submit'><i className="fas fa-search"></i></button>
        </div>
      </form>
    )
  }
}
