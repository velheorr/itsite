import '../../css.scss'
import "aos/dist/aos.css"

const Header = () => {
    return (
        <header data-aos="zoom-out">
            <div className={'logo1'} >
                {/*<a href="">
                    <img src="" alt=""/>
                </a>*/}
                logo
            </div>
            <div className={'menu'}>
                <ul>
                    <li>menu</li>
                </ul>
            </div>
        </header>
    );
};

export default Header;