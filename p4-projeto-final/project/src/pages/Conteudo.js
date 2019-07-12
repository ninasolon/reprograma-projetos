import React, { Component } from 'react'
import ImgHeader from '../components/ImgHeader'
import { Link } from 'react-router-dom'

export default class Conteudo extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  
  render(){
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40debugtraducao')
    .then((res) => res.json())
    .then((data) => {
      const post = data.items
      const output = `
      <div>
        <h2>${post[this.props.match.params.id].title}</h2>
        <div>${post[this.props.match.params.id].content}</div>
      </div>`
      document.querySelector('#artigo-medium').innerHTML = output
    })

    return (
      <div>
        < ImgHeader />
        <div className='small-container page-container artigo'>
          <div className='link--voltar'>
            <Link to='/artigos' className='link--voltar'>{"<< voltar para artigos"}</Link>
          </div>
          <div id='artigo-medium' className='artigo--format'></div>
          <a href='#' className='link--topo'><i class="fas fa-chevron-circle-up"></i><span>topo</span></a>
        </div>
      </div>
    )
  }
}