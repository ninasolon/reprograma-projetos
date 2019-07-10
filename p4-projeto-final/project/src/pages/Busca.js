import React, { Component } from 'react'
import ImgHeader from '../components/ImgHeader'
import CampoBusca from '../components/CampoBusca'
import ListaArtigos from '../components/artigos/ListaArtigos'
import dataArtigos from '../data/dataArtigos'
import { CtaSemResultado } from '../components/CallToAction'

export default class Busca extends Component {
  constructor(props){
    super(props);
    this.state = {
      article: <ListaArtigos array={dataArtigos} />,
    }
  }

  componentDidMount(){
    window.scrollTo(0, 0)
    const dadosBusca = localStorage.getItem('BUSCA')
    const dadosCategoria = localStorage.getItem('CATEGORIA')

    if(dadosBusca !== '' && dadosCategoria === ''){
      let filtroBusca = dataArtigos.filter((item) => {
        return item.titulo.toLowerCase().includes(dadosBusca.toLowerCase());
      })

      if(filtroBusca.length>0){
        this.setState({
          article: < ListaArtigos array={filtroBusca}/>,
        })  
      } else {
        this.setState({
          article: < CtaSemResultado />,
        })
      }
    } 

    else if (dadosCategoria !== '' && dadosBusca === '') {
      let filtroBusca = dataArtigos.filter((item) => {
        return item.titulo.toLowerCase().includes(dadosCategoria.toLowerCase());
      })
      if(filtroBusca.length>0){
        this.setState({
          article: < ListaArtigos array={filtroBusca}/>,
        })  
      } else {
        this.setState({
          article: < CtaSemResultado />,
        })
      }
    }
    
    else {
      this.state = {
        article: <ListaArtigos array={dataArtigos}/>,
      }
    }
    localStorage.clear()
  }

  componentDidUpdate(){
    window.scrollTo(0, 0)
  }

  btnVoltar=()=>{
    this.setState({
      article: <ListaArtigos array={dataArtigos}/>
    })
  }

  filtroBusca=(e)=>{
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
      let filtroBusca = dataArtigos.filter((item) => {
        return item.titulo.toLowerCase().includes(busca.categoria.toLowerCase() || busca.palavra.toLowerCase());
        //checar keywords
      })

      if(filtroBusca.length>0){
        this.setState({
          article: < ListaArtigos array={filtroBusca}/>,
        })  
      } else {
        this.setState({
          article: < CtaSemResultado />,
        })
      }
    }
  }

  verTodos=()=>{
    this.setState({
      article: <ListaArtigos array={dataArtigos}/>
    })
  }

  render() {
    return (
      <div>
        < ImgHeader />
        <div className='container busca'>
          <h2>{"< artigos traduzidos />"}</h2>
          <div className='busca--container__artigos'>
            <CampoBusca 
              classe='busca--campos busca--inline'
              btnBusca={this.filtroBusca}
              refBusca={(e) => this.inputBusca = e}
              refCategoria={(e) => this.inputCategoria = e}
            />
            <button onClick={this.verTodos}>Ver todos os artigos</button>
          </div>
          <div className='artigos--container'>{this.state.article}</div>
        </div>
      </div>
    )
  }
}