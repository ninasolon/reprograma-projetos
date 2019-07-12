import React from 'react'

export default function Contato(){
  return(
    <section className='contato' id='contato'>
      <div className='container'>
        <h2>{"< colabore />"}</h2>
        <div className='contato--container'>
          <div className='contato--flex'>
            <h3>como funciona</h3>
            <p>O <span>debug</span> faz uma curadoria de conteúdos em inglês sobre tecnologia, para serem traduzidos e disponibilizados no site.</p>
            <p>A ideia é formar um coletivo de tradutores para ampliar o material disponível em português sobre programação e outras áreas.</p>  
          </div>
          <div className='contato--flex'>
            <h3>contato</h3>
            <p>Junte-se ao nosso grupo no <a href='https://bit.ly/2G9XVgJ' target='_blank'>Slack</a>, onde organizamos o fluxo de traduções e material para entrar no site.</p>
            <p>Ou entre em contato pelo e-mail <a href='mailto:debugtraducao@gmail.com'>debugtraducao@gmail.com</a>. Você pode solicitar traduções ou enviar artigos traduzidos e outras sugestões de conteúdo para o site.</p>
          </div>
        </div>
      </div>
    </section>
  )
}