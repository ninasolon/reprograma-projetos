import React from 'react'
import Apresentacao from '../components/home/Apresentacao'
import Busca from '../components/Busca'
import Conteudo from '../components/home/Conteudo'
import ListaDicionario from '../components/home/ListaDicionario'
import ListaDocs from '../components/home/ListaDocs'
import ListaTextos from '../components/home/ListaTextos'
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className='home'>
      <header className='header'>
        <div className='container d-flex--header'>
          <Apresentacao />
          <div className='busca--container__home'>
            <Busca classe='busca--campos'/>
            <Link to='/textos'>Ver todos os textos</Link>
          </div>
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