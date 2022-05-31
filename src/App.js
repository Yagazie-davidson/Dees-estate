import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home'
// import Rent from './pages/Rent'
// import Land from './pages/Land'
// import Agent from './pages/Agent'
// import Contact from './pages/Contact'
import NavBar from './components/NavBar.js';

function App() {
  return (
    <div className="App box-border bg-[#FAFAFA]">
      <NavBar /> <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
