import React, { Component } from 'react'
import Apresentacao from '../components/home/Apresentacao'
import CampoBusca from '../components/CampoBusca'
import Conteudo from '../components/home/Conteudo'
import ListaDicionario from '../components/home/ListaDicionario'
import ListaDocs from '../components/home/ListaDocs'
import { Link } from "react-router-dom"


export default class Home extends Component{
  componentDidMount(){
    window.scrollTo(0, 0);
  }

  btnBusca = (e) => {
    e.preventDefault();
    const busca = {
      palavra: this.inputBusca.value,
      categoria: this.inputCategoria.value
    }
    
    if (busca.palavra === '' && busca.categoria === ''){
      alert('Digite uma palavra-chave no campo de busca ou selecione uma categoria');
    } 
    
    else if (busca.palavra !== '' && busca.categoria !== ''){
      alert('Por favor, utilize somente um dos campos para busca')
    }
    
    else {
      localStorage.setItem('BUSCA', busca.palavra)
      localStorage.setItem('CATEGORIA', busca.categoria)
      this.props.history.push('/busca')
    }
  }

  render(){
    return (
      <div className='home'>
        <header className='header'>
          <div className='container d-flex--header'>
            <Apresentacao />
            <div className='busca--container__home'>
              <CampoBusca 
                classe='busca--campos'
                btnBusca={this.btnBusca}
                refBusca={(e) => this.inputBusca = e}
                refCategoria={(e) => this.inputCategoria = e}
              />
              <Link to='/busca'>Ver todos os artigos</Link>
            </div>
          </div>
        </header>
        <section className='container conteudo'>
          <Conteudo
            secao='< dicionário />'
            descricao={'Saiba o siginifcado de algumas palavras usadas na programação:'}
            lista={<ListaDicionario/>}
            link='/dicionario'
          />
          <Conteudo
            secao='< documentações />'
            descricao={'Confira algumas documentações oficiais já disponíveis em português:'}
            lista={<ListaDocs/>}
            link='/documentacoes'
          />
        </section>
      </div>
    )
  }
}