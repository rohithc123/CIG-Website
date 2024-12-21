import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Event from './pages/Event'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>} >
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='event' element={<Event/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Route>
    )
  )
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
