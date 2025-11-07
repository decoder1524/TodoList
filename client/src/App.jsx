import {Routes,Route} from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import HomePage from './Pages/Home/HomePage'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import About from './Pages/About/About'
import TodoList from './Pages/Todos/TodoList'
import {Toaster} from 'react-hot-toast'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element ={<Landing/>}/>
      <Route path='/home' element ={<HomePage/>}/>
      <Route path='/login' element ={<Login/>}/>
      <Route path='/register' element ={<Register/>}/>
      <Route path='/about' element ={<About/>}/>
      <Route path='/todolist' element ={<TodoList/>}/>
    </Routes>
    <Toaster/>
    </>
  )
}

export default App
