import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './ComponentFile/HeaderFile/NavFile/Nav'

function App() {

  return (
    <div className="App">
    <Nav></Nav>
    <Outlet></Outlet>

    </div>
  )
}

export default App
