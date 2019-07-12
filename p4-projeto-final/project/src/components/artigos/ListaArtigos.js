import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ListaArtigos extends Component{
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
    return (
      listaOrdenada.map((item) => (
      <Link to={`/conteudo/${item.index}`}>
        <div className='artigos--item'>
          <h4>{item.titulo}</h4>
          <p>{item.descricao}</p>
        </div>
      </Link>
      ))
    )
  }
}