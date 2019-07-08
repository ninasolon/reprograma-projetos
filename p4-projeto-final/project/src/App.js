import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './assets/style/style.css'
// import './App.css'

//pages
import Home from './pages/Home'
import Textos from './pages/Textos'
import Dicionario from './pages/Dicionario'
import Docs from './pages/Docs'
import EditorTexto from './pages/EditorTexto'

//components
import Nav from './components/Nav'
import Contato from './components/Contato'
import Footer from './components/Footer'

export default function App() {
  return (
    <Switch>
      <div>
        <Nav />
        <Route path='/' exact component={Home} />
        <Route path='/textos' component={Textos} />
        <Route path='/dicionario' component={Dicionario} />
        <Route path='/documentacoes' component={Docs} />
        <Route path='/editor' component={EditorTexto} />
        <Contato />
        <Footer />
      </div>
    </Switch>
  );
}
