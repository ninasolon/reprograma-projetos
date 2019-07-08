import React, { Component } from 'react'
import dataDocs from '../../data/dataDocs'

export default class ListaDocs extends Component{
  ordenarAZ = (itemA, itemB, props) => {
    if (itemA[props].toLowerCase() < itemB[props].toLowerCase()){
      return -1
    } if (itemA[props].toLowerCase() > itemB[props].toLowerCase()){
      return 1
    } 
    return 0
  }

  render(){
    const listaOrdenada = dataDocs.sort((itemA, itemB) => this.ordenarAZ(itemA, itemB, 'titulo'))
    return(
      listaOrdenada.map((item) => (
        <li><a href={item.url} target='_blank'>{item.titulo}</a></li>
      ))
    )
  }
}