import '../../css.scss'
import "aos/dist/aos.css"

const Header = () => {
    return (
        <header data-aos="zoom-out">
            {/*<div className='titleText logo' >
                GuarDiGiLab
            </div>*/}
            <div className="neon-text">GuarDiGiLab</div>
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