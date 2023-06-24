
import "./App.css";
import {useState,useEffect} from 'react'
import { fetchFooter } from "@/utils/request";
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
import useLoadingStore from "./store/loadingStore.js";
import Admin from "./pages/Admin.js";
import ScrollToTop from "./components/ScrollToTop.js";
import SingleBlog from "./pages/SingleBlog.js";
import { FooterData } from "./types/Footer.js";

function App() {
  const loading = useLoadingStore((state: any) => state.loading);
  const [footer, setFooter] = useState<FooterData| null>(null);
  const setLoading = useLoadingStore((state: any) => state.setLoading);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [data] = await Promise.all([
          fetchFooter(),
        ]);
      
        setFooter(data);
        
 
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false)
      } finally {
        setLoading(false)
      }
    };

    fetchData();
    
  }, []);
  return (
    <>
      <BrowserRouter>
     
      <FloatButton icon={<div className="h-16 w-16 absolute top-1 left-1 opacity-60 hover:opacity-100 transition-all hover:scale-110"><img src={WhatsappIcon} className=""/></div>} tooltip={<div className="">Chat with us now!</div>} type="default" style={{ right: 25 }} href="https://wa.me/60174891189" target="_blank" className="h-16 w-16 " />
      <Navbar/>
      {/* {loading? "" : <Navbar />} */}
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/events" element={<Events />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/blog/:slug" element={<SingleBlog/>} />
          </Routes>
        </ScrollToTop> 
        {loading? "" : <Footer data={footer}/>}

      </BrowserRouter>
    </>
  );
}

export default App
