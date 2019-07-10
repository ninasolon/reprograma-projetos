import React from 'react'

export function CtaSemResultado(props){
  return(
    <div className='call-to-action cta--textos'>
      <h4>Ainda não temos textos traduzidos sobre este assunto.</h4>
      <p>Você pode sugerir artigos para nossa fila de tradução. Basta enviar o link ou arquivo para o e-mail xxx@xxx.com.br com o assunto [Sugestão Texto].</p>
      <h4>Quer ajudar a aumentar nosso banco de traduções?</h4>
      <p>Envie sua tradução para o e-mail xxx@xxx.com.br com o assunto [Texto Traduzido] ou junte-se ao nosso grupo no Slack.</p>
    </div>
  )  
}

export function CtaDicionario(props){
  return(
    <div className='call-to-action cta--dicio'>
      <p><span>Ajude a aumentar o nosso dicionário!</span> Envie sugestões para o e-mail xxx@xxx.com.br com o assunto [Sugestão Dicionário] ou junte-se ao nosso grupo no Slack.</p>
    </div>
  )  
}

export function CtaDocs(props){
  return(
    <div className='call-to-action cta--docs'>
      <p><span>Encontrou uma documentação em português que não está aqui?</span> Envie para o e-mail xxx@xxx.com.br com o assunto [Sugestão Documentação] ou junte-se ao nosso grupo no Slack.</p>
    </div>
  )  
}