import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Cameras from './Components/Cameras/Cameras';
import Lenses from './Components/Lenses/Lenses';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cameras' element={<Cameras/>}/>
        <Route path='/lenses' element={<Lenses/>}/>
      </Routes>
      <Footer/>

      </BrowserRouter>

    </div>
  );
}

export default App;
