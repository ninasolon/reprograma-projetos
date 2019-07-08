import React, { Component } from 'react'

export default class ListaCompleta extends Component{
  ordenarAZ = (itemA, itemB, props) => {
    if (itemA[props].toLowerCase() < itemB[props].toLowerCase()){
      return -1
    } if (itemA[props].toLowerCase() > itemB[props].toLowerCase()){
      return 1
    } 
    return 0
  }

  render(){
    const listaOrdenada = (this.props.array).sort((itemA, itemB) => this.ordenarAZ(itemA, itemB, 'titulo'))
    return(
      listaOrdenada.map((item) => (
        <div onClick={this.props.click} className='item-lista'>
          <h4>{item.titulo}</h4>
          <p>Autoria: {item.autoria}</p>
        </div>
      ))
    )
  }
}