import React, { Component } from 'react'
import ListaDocs from '../components/docs/ListaDocs'
import ImgHeader from '../components/ImgHeader'
import { CtaDocs } from '../components/CallToAction'

export default class Docs extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render(){
    return (
      <div>
        < ImgHeader />
        <div className='container page-container docs'>
          <h2>{"< documentações />"}</h2>
          <p className='docs--descricao'>Algumas documentações oficiais já possuem versão em português. Acesse os links abaixo:</p>
          <ul className='docs--lista'>
            < ListaDocs />
          </ul>
          <p>*MDN: Mozilla Developer Network (Rede de Desenvolvedores da Mozilla)</p>
          < CtaDocs />
        </div>
      </div>
    )
  }
}