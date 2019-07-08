import React from 'react'
import ListaDocs from '../components/docs/ListaDocs'
import HeaderImg from '../components/HeaderImg'

export default function Docs(props) {
  return (
    <div>
      < HeaderImg />
      <div className='small-container docs--container'>
        <h2>{"< documentações />"}</h2>
        <p className='docs--descricao'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem distinctio, ipsum culpa tenetur amet magni facere quibusdam quam mollitia maiores quidem autem quae tempore! Assumenda perferendis quasi impedit ab unde.</p>
        <ul className='docs--lista'>
          < ListaDocs />
        </ul>
        <p>*MDN: Mozilla Developer Network (Rede de Desenvolvedores da Mozilla)</p>
      </div>
    </div>
  )
}