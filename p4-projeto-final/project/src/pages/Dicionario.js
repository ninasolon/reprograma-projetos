import React, { Component } from 'react'
import TabelaDicionario from '../components/dicionario/TabelaDicionario'
import ImgHeader from '../components/ImgHeader'
import { CtaDicionario } from '../components/CallToAction'

export default class Dicionario extends Component{
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  
  render(){
    return(
      <div>
        < ImgHeader />
        <div className='container page-container dicionario'>
          <h2>{"< dicionário />"}</h2>
          <p className='dicio--descricao'></p>
          < TabelaDicionario />
          < CtaDicionario />
        </div>
      </div>
    )
  }
}