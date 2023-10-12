import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Interest from './pages/Interest'
import Awards from './pages/Awards'
import NavBar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/interest" element={<Interest/>}/>
        <Route path="/awards" element={<Awards/>}/>
      </Routes>
    </div>
  );
}

export default App;
