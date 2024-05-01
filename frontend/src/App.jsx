import { Routes,Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Index from './components/Index'
import Home from './pages/Home'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Index/>}>
      <Route path='/' element={<Home/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
