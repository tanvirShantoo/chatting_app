

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LoginPage from './Pages/LoginPage'
import NotFound from './Components/Not Found/NotFound'
import { ToastContainer } from 'react-toastify'
import RegisterPage from './Pages/RegisterPage'
import database from './Firebase.config'



function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element = {<LoginPage/>}/>
        <Route path='/register' element = {<RegisterPage/>}/>
        <Route path='*' element = {<NotFound/>}/>
      </Route>
    )
  )
    
  

  return (
    <>
     <RouterProvider router={route} />
     <ToastContainer />
    </>
  )
}

export default App
