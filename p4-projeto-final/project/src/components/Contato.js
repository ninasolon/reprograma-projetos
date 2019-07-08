import React from 'react'

export default function Contato(){
  return(
    <section className='contato' id='contato'>
      <div className='container'>
        <h2>{"< colabore />"}</h2>
        <div className='contato--container'>
          <div className='contato--flex'>
            <h3>como funciona</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium obcaecati voluptatum, ad tenetur placeat sed. Saepe, accusantium vero. Sint nam voluptatem totam ullam officia odio amet laboriosam possimus vel. Atque!</p>  
          </div>
          <div className='contato--flex'>
            <p>Slack</p>
            <p>E-mail</p>
          </div>
        </div>
      </div>
    </section>
  )
}