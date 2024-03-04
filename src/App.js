import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Cameras from './Components/Cameras/Cameras';
import Lenses from './Components/Lenses/Lenses';
import ItemPage from './Components/ItemPage/ItemPage';
import Other from './Components/Other/Other';
import Brands from './Components/Brands/Brands';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import Login from './Components/Login/Login';
import SearchResults from './Components/SearchResults/SearchResults';
import BlogPostPage from './Components/BlogPostPage/BlogPostPage';

function App() {
  return (
    <div>
  

      <BrowserRouter>
      <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cameras' element={<Cameras/>}/>
        <Route path='/lenses' element={<Lenses/>}/>
        <Route path='/other' element={<Other/>}/>
        <Route path='/itemPage/:id' element={<ItemPage/>}/>
        <Route path='/blogPostPage/:id' element={<BlogPostPage/>}/>
        <Route path='/brands/:brand' element={<Brands/>}/>
        <Route path='/cart' element={<ShoppingCart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/search' element={<SearchResults/>}/>
      </Routes>
      <Footer/>

      </BrowserRouter>


    </div>
  );
}

export default App;
