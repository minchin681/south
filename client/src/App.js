import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import './App.css';
import Home from './components/home'
import Contact from './components/contact'
import Request from './components/request'

function App() {
  return (
    <BrowserRouter>
     <header>
      <nav>
        <h1>Washingtown</h1>
        <NavLink to="/">home</NavLink>
        <NavLink to="contact">contact</NavLink>
      </nav>
     </header>
     <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="request" element={<Request />} />
      </Routes>
     </main>
    </BrowserRouter>
  );
}

export default App;
