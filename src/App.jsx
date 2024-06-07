import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import "react-toastify/dist/ReactToastify.css"
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home';
import Shop from "./Pages/Shop";
import Pages from "./Pages/Pages";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact"
import { Provider } from 'react-redux';
import { store } from './Components/Store';
import ShoppingCart from './Pages/ShoppingCart';
import Cart from './Components/Cart/Cart';
import ScrollToTopOnMount from './Pages/ScrollOnTop';



function App() {
 

  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
      <ScrollToTopOnMount/>
      <ToastContainer/>
    <NavBar/>
    <Routes>

      <Route index element={< Navigate replace to="/Home"/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/pages' element={<Pages/>}/>
      <Route path='/cart' element={<Cart/>}/>
    
      
    </Routes>
    </BrowserRouter>
      </Provider>
    
  
    
    </div>
  )
}

export default App
