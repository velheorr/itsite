import React from 'react';
import { Divider, Card, Text, List, HStack} from 'rsuite';
import YMap from "../footer2/Map.jsx";
import './Footer.scss';

const Footer = () => {
    return (
        <footer >
			<Card className='mb30'>
				<Card.Header>
					<HStack style={{justifyContent: 'space-between'}}>
						<div>
							<Text size={'md'} color='blue'>Контакты</Text>
							<p className="footer-text">
								614007, Пермский край, г Пермь, ул 25 Октября, д. 72, офис 4в
							</p>
							<p className="footer-text">
								тел. <a href="tel:+79082661756">+7 (908) 266 17 56</a>
							</p>
							<p className="footer-text">
								email: <a href="mailto:info@guardigilab.ru">info@guardigilab.ru</a>
							</p>
						</div>
						<div style={{width:'50%'}}>
							<Text size={'md'} color='blue'>Реквизиты</Text>
							<p className="footer-text">ИНН 5904414903</p>
							<p className="footer-text">КПП 590401001</p>
							<p className="footer-text">ОГРН 1255900007560</p>
						</div>
					</HStack>

				</Card.Header>
				<Card.Body>
					<div className="map-wrapper">
						<YMap />
					</div>
				</Card.Body>
			</Card>

			<Card>
				<Card.Header>
					<Text size={'md'} color='blue'>Виды деятельности</Text>
					<p className="footer-text">62.01 Разработка компьютерного программного обеспечения</p>
				</Card.Header>
				<Card.Body>
					<Text size={'md'} color='blue'>Дополнительные виды деятельности</Text>
					<List>
						<List.Item>
							46.51 Торговля оптовая компьютерами, периферийными устройствами к компьютерам и программным обеспечением
						</List.Item>
						<List.Item>
							62.02 Деятельность консультативная и работы в области компьютерных технологий
						</List.Item>
						<List.Item>
							62.03 Деятельность по управлению компьютерным оборудованием
						</List.Item>
						<List.Item>
							62.09 Деятельность, связанная с использованием вычислительной техники и информационных технологий, прочая
						</List.Item>
						<List.Item>
							63.11.1 Деятельность по созданию и использованию баз данных и информационных ресурсов
						</List.Item>
						<List.Item>
							95.11 Ремонт компьютеров и периферийного компьютерного оборудования
						</List.Item>
					</List>
				</Card.Body>
			</Card>


        </footer>
    );
};

export default Footer;