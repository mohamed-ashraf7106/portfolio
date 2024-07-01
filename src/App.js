import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage.js";
import Contact from "./pages/ContactPage.js";
function App() {
  return (
    <>
    <div className="header-space"></div>
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
