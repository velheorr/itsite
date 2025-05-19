import '../../css.scss'
import page from '../../assets/img/page.svg'
import YMap from "../footer2/Map.jsx";

const Footer = () => {
    return (
        <footer style={{backgroundImage: `url(${page})`}}>
            <div className={'footer'} data-aos="fade-up">
                <div >
                    <h3>Контакты</h3>
                    <div style={{marginTop: '15px'}}>
                        <h5>614007, Пермский край, г Пермь, ул 25 Октября, д. 72, офис 4в </h5>
                        <h5>тел. <a href="tel:+79082661756">+7 (908) 266 17 56</a></h5>
                        <h5>email: <a href="mailto:sel@grdn.ru">sel@grdn.ru</a></h5>
                    </div>
                    <div style={{marginTop: '15px'}}>
                        <YMap/>
                    </div>
                </div>
                <div>
                    <h3>Виды деятельности</h3>
                    <div style={{marginTop: '15px'}}>
                    <h5>Разработка компьютерного программного обеспечения (62.01)</h5>
                    </div>

                </div>
                <div>
                    <h3>О нас</h3>
                    <div style={{marginTop: '15px'}}>
                        <h5>ИНН 5904414903</h5>
                        <h5>КПП 590401001</h5>
                        <h5>ОГРН 1255900007560</h5>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;