import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImgHeader from '../../../components/ImgHeader'
import fig01 from './img/cap01_fig01.jpg'

export default class IntroducaoAPI extends Component{
  componentDidMount(){
    window.scrollTo(0, 0)
  }

  render(){
    return(
      <div>
        < ImgHeader />
        <div className='texto--container'>
          <div className='texto--navegacao'>
            <Link to='/artigos' className='link--voltar'>{"<< voltar para artigos"}</Link>
          </div>
          <h2>Introdução a APIs</h2>
          <div className='texto--info'>
            <p>Autor: Brian Cooksey</p>
            <p>Tradução: Nina Solon</p>
            <p>Texto original: <a href='https://zapier.com/learn/apis/' target='_blank'>An Introduction to APIs</a></p>
          </div>
          <h3>Capítulo 1 - Introdução</h3>
          <p>APIs (interfaces de programação de aplicações) constituem uma grande parte da web. Em 2013, havia mais de 10.000 APIs publicadas por empresas para consumo aberto<sup>1</sup>. Isto é quádruplo da quantidade disponível em 2010<sup>2</sup>.</p>
          <p>Com tantas empresas investindo nesta nova área de negócios, ter um entendimento de APIs se torna cada vez mais relevante para carreiras na indústria de software. Através deste curso, esperamos oferecer este conhecimento, que será construído a partir dos primeiros passos. Neste capítulo, começamos analisando alguns conceitos fundamentais sobre APIs. Definimos o que é uma API, onde ela reside, e montamos um panorama de como ela é usada.</p>
          <h4>Algumas referências para contextualizar</h4>
          <p>Ao falar sobre APIs, muito se foca em conceitos abstratos. Para estabelecer uma base, vamos começar com algo físico: o servidor. Um servidor nada mais é que um grande computador. Tem todas as mesmas partes que o laptop ou desktop que você usa para o trabalho, sendo apenas mais rápido e mais potente. Normalmente, os servidores não têm monitor, teclado ou mouse, o que os faz parecerem inacessíveis. A realidade é que profissionais de TI se conectam remotamente a eles - pense como uma área de trabalho remota - para trabalhar neles.</p>
          <p>Servidores são usados ​​para todos os tipos de coisas. Alguns armazenam dados; outros enviam email. O tipo com o qual as pessoas mais interagem é o servidor web. São os servidores que fornecem uma página da web quando você visita um site. Para entender melhor como isso funciona, aqui está uma analogia simples:</p>
          <p className='txt-italic'>Da mesma forma que um programa como o jogo Paciência espera que você clique em uma carta para fazer alguma coisa, um servidor web executa um programa que espera que uma pessoa solicite uma página web.</p>
          <p>Não há nada de mágico ou espetacular nisso. Um desenvolvedor de software grava um programa, copia-o para um servidor, e o servidor executa o programa continuamente.</p>
          <h4>O que é uma API e por que é valiosa</h4>
          <p>Websites são desenvolvidos conforme nossas habilidades. Humanos têm uma incrível capacidade de registrar informações visuais, combiná-las com nossas experiências para gerar significado e, então, agir conforme este significado. É por isso que você olha para um formulário em um site e sabe que a pequena caixa com a frase "Nome" acima significa que você deve digitar a palavra que usa para se identificar informalmente.</p>
          <p>No entanto, o que acontece quando você enfrenta uma tarefa muito demorada, como copiar as informações de contato de milhares de clientes de um site para outro? Você adoraria delegar este trabalho a um computador para que possa ser feito com rapidez e precisão. Infelizmente, as características que tornam os sites ideais para humanos dificultam seu uso por computadores.</p>
          <p>A solução é uma API. Uma API é a ferramenta que torna os dados de um site mais fáceis de serem digeridos por um computador. Por meio dela, um computador pode visualizar e editar dados da mesma forma que uma pessoa, carregando páginas e enviando formulários.</p>
          <div className='txt-imagem'>
            <img src={fig01}></img>
            <p>Figura 1. Comunicando-se com um servidor.</p>
          </div>
          <p>Tornar os dados mais fáceis de serem trabalhados é bom porque permite que pessoas desenvolvam softwares para automatizar tarefas tediosas e trabalhosas. O que poderia demorar horas para ser feito por um humano, pode levar segundos para ser feito por um computador por meio de uma API.</p>
          <h4>Como uma API é usada</h4>
          <p>Quando dois sistemas (websites, desktops, smartphones) se conectam por meio de uma API, dizemos que eles estão "integrados". Em uma integração, você tem dois lados, cada um com um nome especial. Um lado que já falamos: o servidor. Este é o lado que realmente fornece a API. E lembre-se que a API é simplesmente outro programa em execução no servidor<sup>3</sup>. Ela pode fazer parte do mesmo programa que manipula o tráfego web ou pode estar completamente separada. Em ambos os casos, a API está esperando que os outros solicitem dados.</p>
          <p>O outro lado é o "cliente". Este é um programa separado que sabe quais dados estão disponíveis por meio da API e pode manipulá-los, geralmente a pedido de um usuário. Um ótimo exemplo é um aplicativo de smartphone que é sincronizado com um website. Quando você pressiona o botão de “atualizar” no seu aplicativo, ele fala com um servidor por meio de uma API e busca as informações mais recentes.</p>
          <p>O mesmo princípio se aplica aos sites que estão integrados. Quando um site extrai dados de outro, o site que fornece os dados age como o servidor e o site que busca os dados é o cliente.</p>
          <h4>Recapitulação</h4> 
          <p>Este capítulo se concentrou em fornecer algumas terminologias fundamentais e um modelo mental do que é uma API e como ela é usada.</p>
          <p>Os termos-chave que aprendemos foram:</p>
          <ul>
            <li><span className='txt-bold'>Servidor:</span> um computador poderoso que executa uma API</li>
            <li><span className='txt-bold'>API:</span> a parte "oculta" de um website destinada ao consumo por computadores</li>
            <li><span className='txt-bold'>Cliente:</span> Um programa que troca dados com um servidor por meio de uma API</li>
          </ul>
          <h4>Notas</h4>
          <ol className='txt-smaller'>
            <li>David Berlind, <a href='https://www.programmableweb.com/news/programmablewebs-directory-hits-10000-apis.-and-counting./analysis/2013/09/23' target='_blank'>ProgrammableWeb’s Directory Hits 10,000 APIs. And Counting</a>. ProgrammableWeb. 23 de setembro de 2013.</li>
            <li>Adam DuVander, <a href='https://www.programmableweb.com/news/api-growth-doubles-2010-social-and-mobile-are-trends/2011/01/03' target='_blank'>API Growth Doubles in 2010, Social and Mobile are Trends</a>. ProgrammableWeb. 3 de janeiro de 2011.</li>
            <li>Tecnicamente, uma API é apenas um conjunto de regras (interface) que os dois lados concordam em seguir. A empresa que publica a API implementa seu lado escrevendo um programa e colocando-o em um servidor. Na prática, agrupar a interface com a implementação é uma maneira mais fácil de pensar sobre isso.</li>
          </ol>
        </div>
      </div>
    )
  }
}