import React, { Component } from 'react'
import ImgHeader from '../components/ImgHeader'
import { Link } from 'react-router-dom'

export default class Artigo extends Component {
  // componentDidMount(){
  //   const { match: { params } } = this.props;
  // }

  render(){
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40debugtraducao%2F')
    .then((res) => res.json())
    .then((data) => {
      const post = data.items
      const output = `
      <div>
        <h2>${post[this.props.match.params.id].title}</h2>
        <div>${post[this.props.match.params.id].content}</div>
      </div>`
      document.querySelector('#texto-medium').innerHTML = output
    })

    return (
      <div>
        < ImgHeader />
        <div className='small-container artigo'>
          <div className='link--voltar'>
            <Link to='/busca' className='link--voltar'>{"<< voltar para artigos"}</Link>
          </div>
          <div id='texto-medium'></div>
          <a>{"<< voltar ao topo"}</a>
        </div>
      </div>
    )
  }
}