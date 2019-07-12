import React, { Component } from 'react'
import ImgHeader from '../components/ImgHeader'
import BuscaArtigos from '../components/artigos/BuscaArtigos'
import ListaArtigos from '../components/artigos/ListaArtigos'
import dataArtigos from '../data/dataArtigos'
import { CtaSemResultado } from '../components/CallToAction'

export default class Artigos extends Component {
  constructor(props){
    super(props);
    this.state = {
      article: <ListaArtigos array={dataArtigos} />,
      busca: {
        categoria: '',
        palavra: '', 
      }
    }
  }

  componentDidMount(){
    window.scrollTo(0, 0)
    const dadosBusca = localStorage.getItem('BUSCA')
    const dadosCategoria = localStorage.getItem('CATEGORIA')

    if(dadosBusca !== '' && dadosCategoria === ''){

      let filtroBusca = dataArtigos.filter((item) => {
        let itensBusca = item.titulo.toLowerCase() + item.keywords.toLowerCase();
        return itensBusca.includes(dadosBusca.toLowerCase());
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
      document.getElementById('resultadoBusca').innerText = `${filtroBusca.length} resultado(s) para "${dadosBusca}"`
    } 

    else if (dadosCategoria !== '' && dadosBusca === '') {
      let filtroBusca = dataArtigos.filter((item) => {
        let itensBusca = item.titulo.toLowerCase() + item.keywords.toLowerCase();
        return itensBusca.includes(dadosCategoria.toLowerCase());
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
      document.getElementById('resultadoBusca').innerText = `${filtroBusca.length} resultado(s) para "${dadosCategoria}"`
    }
    
    else {
      this.state = {
        article: <ListaArtigos array={dataArtigos}/>,
        busca: {
          categoria: '',
          palavra: '', 
        }
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

  selectBusca=(e)=>{
    e.preventDefault();
    const busca = {
      categoria: this.inputCategoria.value
    }
    let filtroBusca = dataArtigos.filter((item) => {
      let itensBusca = item.titulo.toLowerCase() + item.keywords.toLowerCase();
      return itensBusca.includes(busca.categoria.toLowerCase());
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
    document.getElementById('resultadoBusca').innerHTML = `${filtroBusca.length} resultado(s) para "${busca.categoria}"`
    this.setState({
      busca: { categoria:'', palavra:'', },
    })
  }

  filtroBusca=(e)=>{
    e.preventDefault();
    const busca = {
      palavra: this.state.busca.palavra
    }
    
    if (busca.palavra === ''){
      alert('Digite uma palavra-chave no campo de busca ou selecione uma categoria'); 
    } 
    
    else {
      let filtroBusca = dataArtigos.filter((item) => {
        let itensBusca = item.titulo.toLowerCase() + item.keywords.toLowerCase();
        return itensBusca.includes(busca.palavra.toLowerCase());
      })

      if(filtroBusca.length>0){
        this.setState({
          article: < ListaArtigos array={filtroBusca}/>,
        })  
        document.getElementById('resultadoBusca').innerText = `${filtroBusca.length} resultado(s) para "${busca.palavra}"`
      } else {
        this.setState({
          article: < CtaSemResultado />,
        })
        document.getElementById('resultadoBusca').innerText = `${filtroBusca.length} resultado(s) para "${busca.palavra}"`
      }

      this.setState({
        busca: { palavra:'' },
      })
    }
  }

  verTodos=()=>{
    this.setState({
      article: <ListaArtigos array={dataArtigos}/>
    })
    document.getElementById('resultadoBusca').innerText = ''
  }

  render() {
    return (
      <div>
        < ImgHeader />
        <div className='container page-container artigos'>
          <h2>{"< artigos traduzidos />"}</h2>
          <div className='busca--container__artigos'>
            <BuscaArtigos 
              btnInput={this.filtroBusca}
              changeInput={(e) => this.setState({ busca: {palavra: e.target.value} })}
              changeSelect={this.selectBusca}
              valueInput={this.state.busca.palavra}
              valueCategoria={this.state.busca.categoria}
              refCategoria={(e) => this.inputCategoria = e}
            />
            <button className='btn--vertodos' onClick={this.verTodos}>Ver todos os artigos</button>
          </div>
          <p id='resultadoBusca' className='busca--resultado'></p>
          <div className='artigos--container'>{this.state.article}</div>
        </div>
      </div>
    )
  }
}