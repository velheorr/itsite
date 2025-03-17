import '../../css.scss'
import "aos/dist/aos.css"

const Header = () => {
    return (
        <header data-aos="zoom-out">
            <div className='titleText logo' >
                {/*<a href="">
                    <img src="" alt=""/>
                </a>*/}
                Guardian Digital
            </div>
            <div className={'menu'}>
                <ul>
                    {/*<li>menu</li>*/}
                </ul>
            </div>
        </header>
    );
};

export default Header;