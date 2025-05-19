import './css.scss'
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/Footer.jsx";
import 'aos/dist/aos.css';
import {useEffect} from "react";
import AOS from "aos";
import Footer2 from "./components/footer2/Footer2.jsx";
import Cookie from "./Cookie/Cookie.jsx";

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
        <Footer2/>
        <Cookie/>
    </>
  )
}

export default App
