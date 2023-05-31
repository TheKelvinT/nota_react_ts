
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import Careers from "./pages/Careers";
import Reservations from "./pages/Reservations";
import Events from "./pages/Events";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.js";
import { FloatButton } from 'antd';
import WhatsappIcon from './assets/whatsapp-logo.svg'
import { WhatsAppOutlined } from '@ant-design/icons';
function App() {
  return (
    <>
      <BrowserRouter>
      <FloatButton icon={<div className="h-16 w-16 absolute top-1 left-1 opacity-60 hover:opacity-100 transition-all hover:scale-110"><img src={WhatsappIcon} className=""/></div>} tooltip={<div className="">Chat with us now!</div>} type="default" style={{ right: 25 }} href="" className="h-16 w-16 " />

        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/events" element={<Events />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
