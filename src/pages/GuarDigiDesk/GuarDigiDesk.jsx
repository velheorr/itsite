import React, {useEffect} from 'react';
import '../../css.scss'
import gdlqr1 from "../../../public/gdlqr1.png";
import {useLocation} from "react-router";

const GuarDigiDesk = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={'digiDesk'}>
            <section className={'mb70 mt70 mainTxt'} data-aos="zoom-in-up">
                "GuarDiGiDesk®"— это система для автоматизации процесса обнаружения инцидентов, оркестрации процессов реагирования на них,
                накопления и систематизации знаний, а также предиктивной аналитики в работе промышленного оборудования и систем безопасности
            </section>
            <section className={'mt70 mb70 topik'} data-aos="fade-down">
                <h1 className={'mb15 cgreen'}>Функциональные возможности программы:</h1>
                <ul>
                    <li>автоматизация учёта и обработки данных</li>
                    <li>управление операциями (планирование и оптимизация рабочих процессов, координация задач и ресурсов)</li>
                    <li>формирование документов, статистики, аналитических и предиктивных данных</li>
                </ul>
            </section>
            <section className={'mt70 mb70'} data-aos="fade-down" style={{textAlign: 'right'}}>
                <h1 className={'mb15 cgreen'}>Пользовательская документация:</h1>
                <ul style={{listStyle: 'none'}}>
                    <li><a href="/guardigidesk/Инструкция по установке ПО.pdf">Инструкция по установке</a></li>
                    <li><a href="/guardigidesk/Инструкция по эксплуатации .pdf">Инструкция по эксплуатации</a></li>
                    <li><a href="/guardigidesk/Описание_функциональных_характеристик_ПО_.pdf">Описание функциональных характеристик ПО</a></li>
                </ul>
            </section>

            <section className={'mt70 mb70'} data-aos="fade-down" style={{textAlign: 'left'}}>
                <h1 className={'mb15 cgreen'}>Информация о правообладателях:</h1>
                <ul style={{listStyle: 'none'}}>
                    <li><a href="/guardigidesk/ООО_ГардианДиджиЛаб_GuarDiGiDesk_2025664429О_ЭВМ.pdf">Свидетельство о государственной регистрации программы для ЭВМ</a></li>
                    <li><a href="/guardigidesk/ТовЗнак_GDD.pdf">Свидетельство на товарный знак</a></li>

                </ul>
            </section>

            <section className={'mt70 mb70 topik'} data-aos="fade-down">
                <h1 className={'mb15 cgreen'}>Стоимость:</h1>
                <p className={'titleData tal'}>
                    Стоимость программного обеспечения определяется конфигурацией оборудования и количеством пользователей системы.
                    Для получения подробной информации по стоимости, пожалуйста, свяжитесь с нами по электронной почте: <a href="mailto:sales@guardigilab.ru">sales@guardigilab.ru</a>
                </p>
            </section>
            <section className={'mt70 mb70'} data-aos="fade-down" style={{textAlign: 'right'}}>
                <h1 className={'mb15 cgreen'}>Следите за новостями</h1>
                <p className={'titleData tar mb15'}>
                    Всё о нашем флагманском продукте GuarDiGiDesk — ключевом инструменте для цифровой трансформации и роста вашего бизнеса
                </p>
                <img style={{width: '150px'}} src={gdlqr1} alt="contact"/>
            </section>
        </div>
    );
};

export default GuarDigiDesk;