import './css.scss'
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/Footer.jsx";
import 'aos/dist/aos.css';
import {useEffect} from "react";
import AOS from "aos";

function App() {
    useEffect(()=>{
        AOS.init({
            duration: 1000, // Длительность анимации в миллисекундах
            disable: 'phone',
        });
    },[])
  return (
    <>
        <Header/>
        <Main/>

        <Footer/>
    </>
  )
}

export default App
