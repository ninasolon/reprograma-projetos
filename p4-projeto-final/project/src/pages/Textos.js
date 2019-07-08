import React, { Component } from 'react'
import HeaderImg from '../components/HeaderImg'
import Busca from '../components/Busca'
import ListaCompleta from '../components/textos/ListaCompleta'
import TextoTraduzido from '../components/textos/TextoTraduzido'
import dataTextos from '../data/dataTextos'

export default class Textos extends Component {
  constructor(props){
    super(props);
    this.state = { //hooks
      article: <ListaCompleta click={this.linkTexto} array={dataTextos}/>,
    }
  }

  btnVoltar = () => {
    this.setState({
      article: <ListaCompleta click={this.linkTexto} array={dataTextos}/>
    })
  }

  linkTexto = () => {
    this.setState({
      article: <TextoTraduzido click={this.btnVoltar}/>
    })
  }

  filtrarTextos = (e) => {
    e.preventDefault();
    const busca = {
      palavra: this.inputBusca.value,
      categoria: this.inputCategoria.value
    }
    
    if (busca.palavra === '' && busca.categoria === ''){
      alert(`bazzinga! vc buscou ${busca.palavra} e ${busca.categoria}`);
    } else if (busca.palavra !== '' && busca.categoria !== ''){
      alert(`oh no! vc buscou ${busca.palavra} e ${busca.categoria}`)
    } else {

      let filtroBusca = dataTextos.filter((item) => {
        return item.keywords.toLowerCase().includes(busca.categoria.toLowerCase() || busca.palavra.toLowerCase())
      })

      this.setState({
        article: < ListaCompleta click={this.linkTexto} array={filtroBusca}/>,
      })
    }
  }

  render() {
    return (
      <div>
        < HeaderImg />
        <div className='container textos'>
          <h2>{"< textos traduzidos />"}</h2>
          <div className='textos--container'>
            <Busca 
              classe='busca--container busca--inline'
              click={this.filtrarTextos}
              refBusca={(e) => this.inputBusca = e}
              refCategoria={(e) => this.inputCategoria = e}
            />
            <div className='textos--article'>{this.state.article}</div>
          </div>
        </div>
      </div>
    )
  }
}