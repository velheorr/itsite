import '../../css.scss'
import react from '../../assets/react.png'
import one1c from '../../assets/one1c.png'
import node from '../../assets/node.png'
import mongo from '../../assets/mongo.png'
import js from '../../assets/js.png'
import vue from '../../assets/vue.png'
import {Link} from "react-router";


const Main = () => {


    return (
        <>
            <section className={'mb70 mt70'} data-aos="zoom-in-up">
                <h1 className={'titleText mb15'}>Разработка програмного обеспечения</h1>
                <p className={'titleData mb25'}>
                    Мы — команда профессионалов в сфере IT-решений, которые помогают бизнесу расти с помощью современных технологий.
                    Специализируемся на разработке программного обеспечения, интеграции сложных систем и создании цифровых продуктов,
                    которые решают реальные задачи. Наш подход — это индивидуальные решения, надежность и внимание к деталям. Доверьте нам ваш проект, и мы сделаем его успешным.
                </p>
            </section>



            <section className={'mt70'} data-aos="zoom-in-up">
                <h1 className={'titleText mb15'}>Мы предлагаем</h1>
            </section>
            <section className={'mb70 gFlex'} data-aos="zoom-in-up">
                <h1 className={'titleText'} style={{fontSize: '3rem'}}>1</h1>
                <p className={'titleData ml25 tal'}>
                    Услуги по разработке, адаптации, модификации и сопровождению информационных систем
                    и программных продуктов на платформе 1С:Предприятие
                </p>
            </section>
            <section className={'mb70 mt70 gFlex'} data-aos="zoom-in-up">
                <h1 className={'titleText'} style={{fontSize: '3rem'}}>2</h1>
                <p className={'titleData ml25 tal'}>
                    Внедрение и интеграция передовых технологий ИИ в процессы и системы заказчиков.
                    Мы помогаем бизнесам внедрять искусственный интеллект в текущие процессы и информационные системы, повышая эффективность, точность и скорость принятия решений.
                    Аудит и оценка возможностей внедрения ИИ, Разработка и внедрение решений на основе ИИ, Интеграция ИИ в существующие системы

                </p>
            </section>
            <section className={'mb70 mt70 gFlex'} data-aos="zoom-in-up">
                <h1 className={'titleText'} style={{fontSize: '3rem'}}>3</h1>
                <p className={'titleData ml25 tal'}>
                    Разработка веб-приложений
                    Интерактивные сервисы, CRM, ERP, внутренние системы управления на React, Vue.js, Node.js и других технологиях.
                    Учет специфики вашего бизнеса: уникальный дизайн, интеграции, автоматизация процессов.
                </p>
            </section>
            <section className={'mb70 mt70 gFlex'} data-aos="zoom-in-up">
                <h1 className={'titleText'} style={{fontSize: '3rem'}}>4</h1>
                <p className={'titleData ml25 tal'}>
                    Наш флагманский продукт <Link to="/GuarDigiDesk">«GuarDiGiDesk»</Link>  — ведущий на рынке промышленной автоматизации, обеспечивающий автоматическое реагирование на сбои оборудования,
                    минимизацию простоев и оптимизацию рабочих процессов за счет интеграции систем мониторинга и управления инцидентами
                </p>
            </section>


            <section className={'mt70 mb70'} data-aos="fade-down">
                <h1 className={'titleText mb15'}>Стоимость</h1>
                <p className={'titleData tal'}>
                    Стоимость наших услуг определяется индивидуально, в зависимости от ваших задач и требований. Чтобы уточнить расчёт стоимости, вы можете связаться с нами
                    <a href="tel:+79082661756">+7 (908) 266 17 56</a> или отправить запрос на электронную почту: <a href="mailto:info@guardigilab.ru">info@guardigilab.ru</a>
                </p>
            </section>

            {/*<section className={'mb70'} data-aos="zoom-in-up">
                <div className={'s2Title titleData mb25'}>Tailored Workflows</div>
                <h2 className={'titleText mb15'}>Map your product journey</h2>
                <p className={'titleData mb25'}>
                    Simple and elegant interface to start collaborating with your team in minutes. It seamlessly integrates with your code and your favorite programming languages.
                </p>
                <div className={'blocks'} style={{marginTop: '20px'}} data-aos="zoom-in-up">
                    <article className={'big'} >
                        <div className={'titleData '}>
                            <span className={'blockBadge'}>Built-in Tools</span>
                        </div>
                        <p className="titleText mt20">
                            Streamline the product development flow with a content platform that's aligned across specs and insights.
                        </p>
                    </article>
                 </div>
            </section>*/}
            <section className={'mb70'} data-aos="fade-down">
                <div className={'s2Title titleData mb25'}>Стек используемого ПО</div>
                <h2 className={'titleText mb15'}>Мы используем современные инструменты и технологии для создания эффективных решений:</h2>
                <p className={'titleData mb25'}>
                    Наш стек постоянно обновляется, чтобы соответствовать самым высоким стандартам и требованиям рынка.
                </p>
                <div className={'blocks'} style={{marginTop: '20px'}}>
                    <article className={'mini'}>
                        <img src={one1c} alt="#"/>
                        <h3 className={'mb15'}>1c</h3>
                        <p className={'titleData mb25'}>
                            Система программного обеспечения для автоматизации бухгалтерского учета, управления бизнесом и ERP. Широко используется в России и СНГ.
                        </p>
                    </article>
                    <article className={'mini'}>
                        <img src={js} alt="#"/>
                        <h3 className={'mb15'}>JavaScript</h3>
                        <p className={'titleData mb25'}>
                            Язык программирования, используемый в веб-разработке для добавления динамики к страницам. Поддерживается всеми современными браузерами.
                        </p>
                    </article>

                    <article className={'mini'}>
                        <img src={react} alt="#"/>
                        <h3 className={'mb15'}>React</h3>
                        <p className={'titleData mb25'}>
                            Библиотека JavaScript для создания пользовательских интерфейсов, особенно одностраничных приложений (SPA). Работает на стороне клиента.
                        </p>
                    </article>

                    <article className={'mini'}>
                        <img src={node} alt="#"/>
                        <h3 className={'mb15'}>Node JS</h3>
                        <p className={'titleData mb25'}>
                            Среда выполнения JavaScript на стороне сервера, позволяет запускать JS-код вне браузера, используется для построения серверных приложений.
                        </p>
                    </article>
                    <article className={'mini'}>
                        <img src={mongo} alt="#"/>
                        <h3 className={'mb15'}>Mongo DB</h3>
                        <p className={'titleData mb25'}>
                            NoSQL база данных, хранит данные в виде документов (в формате BSON), гибкая и масштабируемая, часто используется в связке с Node.js.
                        </p>
                    </article>

                    <article className={'mini'}>
                        <img src={vue} alt="#"/>
                        <h3 className={'mb15'}>Vue JS</h3>
                        <p className={'titleData mb25'}>
                            Прогрессивный фреймворк JavaScript для создания пользовательских интерфейсов. Легко интегрируется с другими проектами и библиотеками.
                        </p>
                    </article>
                </div>
            </section>
        </>
    );
};

export default Main;