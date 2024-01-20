
import './App.css'
import Navegador from './componentes/Navegacion'
import {Routes, Route} from 'react-router-dom'
import Home from './componentes/Home'
import Error from './componentes/Error'
import Formuario from './componentes/Formulario'
import Personajes from './componentes/Personajes'
import Login from './componentes/Login'
import Admin from './componentes/Admin'
import Usuarios from './componentes/Usuarios'


function App() {

  return (
    <>
    <Navegador /> 
    <Routes>
      <Route path='/home' element= {<Home />}/> 
      <Route path='*' element= {<Error />}/> 
      <Route path='/formulario' element= {<Formuario />}/> 
      <Route path='/personaje' element= { <Personajes /> } />
      <Route path='/login' element= { <Login /> } />
      <Route path='/admin' element= { <Admin /> } />
      <Route path='/usuarios' element= { <Usuarios /> } />
    </Routes>
    </>
  )
}

export default App
