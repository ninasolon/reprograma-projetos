import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './assets/style/style.css'

//paginas
import Home from './pages/Home'
import Artigos from './pages/Artigos'
import Dicionario from './pages/Dicionario'
import Docs from './pages/Docs'
import Conteudo from './pages/Conteudo'

//componentes
import Nav from './components/Nav'
import Contato from './components/Contato'
import Footer from './components/Footer'

export default function App() {
  return (
    <Switch>
      <div>
        <Nav />
        <Route path='/' exact component={Home} />
        <Route path='/artigos' component={Artigos} />
        <Route path='/dicionario' component={Dicionario} />
        <Route path='/documentacoes' component={Docs} />
        <Route path='/conteudo/:id' component={Conteudo} />
        <Contato />
        <Footer />
      </div>
    </Switch>
  );
}
