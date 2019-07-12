import React from 'react'

export default function Apresentacao(){
  return(
    <div className='apres--container'>
      <div className='apres--card'>
          <h2>{"< conheça o "}<span className='apres--logo'>debug</span>{" />"}</h2>
          <p>Um site que reúne <span>conteúdo sobre tecnologia traduzido para português</span>. A proposta é engajar pessoas na tradução de artigos e documentações, ampliando o acesso ao conhecimento.</p>
          <p>Existe um grande volume de informação disponível somente em inglês na internet, mas sabemos que o idioma não deve ser uma barreira para estudar. Veja como <a href='#contato'>colaborar</a>!</p>
      </div>
    </div>
  )
}