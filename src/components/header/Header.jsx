import '../../css.scss'
import "aos/dist/aos.css"
import gdl from "../../../public/gdl.png";
import page from "../../assets/img/page.svg";

const Header = () => {
    return (
        <header data-aos="zoom-out" style={{backgroundImage: `url(${page})`}}>
            <section className={''} data-aos="zoom-in-up">
                <img src={gdl} alt="" width={'350px'}/>
            </section>
            {/*<div className='titleText logo' >
                GuarDiGiLab
            </div>*/}
           {/* <div className="neon-text">GuarDiGiLab</div>*/}

            {/*<div className='titleText logo' >
                <a href="">
                    <img src="" alt=""/>
                </a>
                GuarDiGiLab
            </div>*/}
        </header>
    );
};

export default Header;