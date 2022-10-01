import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home.js'
import Navbar from './components/Navbar.js'
import Footer from './components/Footer';
import Lineup from './components/Lineup';
import Tickets from './components/Tickets';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/'element={<Home />} />
      <Route path='/tickets'element={<Tickets />} />
      <Route path='/lineup' element={<Lineup/>}/>
      <Route path='/about'element={<About />} />
      <Route path='/contact'element={<Contact />} />
    </Routes>
      <Footer />
    </BrowserRouter>
     
      
    
  );
}

export default App;
