import React from 'react';
import { Grid, Row, Col, Panel, Divider } from 'rsuite';
import YMap from "../footer2/Map.jsx";
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="app-footer">
            <Grid fluid className="footer-grid">
            <Row gutter={30}>
                <Col xs={24} md={8}>
                <Panel header="Контакты" bordered className="footer-panel">
                    <p className="footer-text">
                    614007, Пермский край, г Пермь, ул 25 Октября, д. 72, офис 4в
                    </p>
                    <p className="footer-text">
                    тел. <a href="tel:+79082661756">+7 (908) 266 17 56</a>
                    </p>
                    <p className="footer-text">
                    email: <a href="mailto:info@guardigilab.ru">info@guardigilab.ru</a>
                    </p>
                    <div className="map-wrapper">
                    <YMap />
                    </div>
                </Panel>
                </Col>

                <Col xs={24} md={8}>
                <Panel header="Виды деятельности" bordered className="footer-panel">
                    <p className="footer-text">62.01 Разработка компьютерного программного обеспечения</p>
                    <Divider style={{ margin: '10px 0' }} />
                    <h5 style={{ margin: '10px 0 5px' }}>Дополнительные виды деятельности</h5>
                    <ul className="activity-list">
                    <li>46.51 Торговля оптовая компьютерами, периферийными устройствами к компьютерам и программным обеспечением</li>
                    <li>62.02 Деятельность консультативная и работы в области компьютерных технологий</li>
                    <li>62.03 Деятельность по управлению компьютерным оборудованием</li>
                    <li>62.09 Деятельность, связанная с использованием вычислительной техники и информационных технологий, прочая</li>
                    <li>63.11.1 Деятельность по созданию и использованию баз данных и информационных ресурсов</li>
                    <li>95.11 Ремонт компьютеров и периферийного компьютерного оборудования</li>
                    </ul>
                </Panel>
                </Col>

                <Col xs={24} md={8}>
                <Panel header="Реквизиты" bordered className="footer-panel">
                    <p className="footer-text">ИНН 5904414903</p>
                    <p className="footer-text">КПП 590401001</p>
                    <p className="footer-text">ОГРН 1255900007560</p>
                </Panel>
                </Col>
            </Row>
            </Grid>
        </footer>
    );
};

export default Footer;