import React from 'react'
import Apresentacao from '../components/home/Apresentacao'
import Busca from '../components/Busca'
import Conteudo from '../components/home/Conteudo'
import ListaDicionario from '../components/home/ListaDicionario'
import ListaDocs from '../components/home/ListaDocs'
import ListaTextos from '../components/home/ListaTextos'

export default function Home() {
  return (
    <div className='home'>
      <header className='header'>
        <div className='container d-flex--header'>
          <Apresentacao />
          <Busca classe='busca--container'/>
        </div>
      </header>
      <section className='container conteudo'>
        <Conteudo
          secao='< dicionário />'
          descricao={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
          lista={<ListaDicionario/>}
          link='/dicionario'
        />
        <Conteudo
          secao='< documentações />'
          descricao={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
          lista={<ListaDocs/>}
          link='/documentacoes'
        />
        <Conteudo
          secao='< textos mais recentes />'
          lista={<ListaTextos/>}
          link='/textos'
        />
      </section>
    </div>
  )
}