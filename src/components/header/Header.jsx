import '../../css.scss'
import "aos/dist/aos.css"
import gdl from "../../../public/gdl.png";
/*import gdl2 from "../../../public/gdl2.jpg";*/
import page from "../../assets/img/page.svg";

const Header = () => {
    return (
        /*<header data-aos="zoom-out" style={{backgroundImage: `url(${page})`}}>*/
        <header data-aos="zoom-out" >
            <section className={'logo'} data-aos="zoom-in-up">
                <img src={gdl} alt="" width={'350px'}/>
            </section>
        </header>
    );
};

export default Header;