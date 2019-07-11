import React, { Component } from 'react'
import dataDicionario from '../../data/dataDicionario'

export default class TabelaDicionario extends Component {
  constructor(props){
    super(props);
    this.state = {
      lista: dataDicionario.sort((itemA, itemB) => this.ordenarAZ(itemA, itemB, 'palavraIng')),
    }
  }

  ordenarAZ = (itemA, itemB, props) => {
    if (itemA[props].toLowerCase() < itemB[props].toLowerCase()){
      return -1
    } if (itemA[props].toLowerCase() > itemB[props].toLowerCase()){
      return 1
    } 
    return 0
  }

  ordenarIng = () => {
    this.setState({
      lista: dataDicionario.sort((itemA, itemB) => this.ordenarAZ(itemA, itemB, 'palavraIng')),
    })
  }

  ordenarPort = () => {
    this.setState({
      lista: dataDicionario.sort((itemA, itemB) => this.ordenarAZ(itemA, itemB, 'palavraPort')),
    })
  }

  render(){
    return (
      <table className='dicio--tabela'>
        <thead>
          <tr>
            <th><span onClick={this.ordenarIng}>Inglês<i className="fas fa-sort-alpha-down"></i></span></th>
            <th><span onClick={this.ordenarPort}>Português<i className="fas fa-sort-alpha-down"></i></span></th>
            <th className='th--significado'>Significado</th>
          </tr>
        </thead>
        <tbody>
          {this.state.lista.map((item, index) => (
            <tr key={index}>
              <td>{item.palavraIng}</td>
              <td>{item.palavraPort}</td>
              <td className='significado'>{item.significado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}