import React, { Component } from 'react'
import dataTextos from '../../data/dataTextos'

export default class TextoTraduzido extends Component{
  render(){
    return(
      <div>
        <p>Teste</p>
        <button onClick={this.props.click}>Voltar</button>
      </div>
    )
  }
}