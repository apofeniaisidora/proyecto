import './App.css'
import Navbar from './components/Navbar'
import Error from './views/Error'
import Home from './views/Home'
import Carrito from './views/Carrito'
import { Route, Routes } from 'react-router-dom'
import Login from './views/Login'
import Registro from './views/Registro'
function App() {

  return (
    <>
      <div>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/carrito' element= {<Carrito/>}/>
        <Route path= '/login' element= {<Login/>}/>
        <Route path= '/registro' element= {<Registro />}/>
        <Route path= '*' element= {<Error/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
