import '../../css.scss'
import page from '../../assets/img/page.svg'
import {Button, Stack} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import react from '../../assets/react.png'
import one1c from '../../assets/one1c.png'
import node from '../../assets/node.png'
import mongo from '../../assets/mongo.png'
import js from '../../assets/js.png'
import vue from '../../assets/vue.png'


const Main = () => {


    return (
        <main style={{backgroundImage: `url(${page})`}}>
            <section className={'mb50 mt50'} data-aos="zoom-in-up">
                <h1 className={'titleText mb15'}>Разработка програмного обеспечения</h1>
                <p className={'titleData mb25'}>
                    Мы — команда профессионалов в сфере IT-решений, которые помогают бизнесу расти с помощью современных технологий.
                    Специализируемся на разработке программного обеспечения, интеграции сложных систем и создании цифровых продуктов,
                    которые решают реальные задачи. Наш подход — это индивидуальные решения, надежность и внимание к деталям. Доверьте нам ваш проект, и мы сделаем его успешным.
                </p>
                <Stack direction="row" spacing={2} justifyContent={'center'}>
                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                        Delete
                    </Button>
                    <Button variant="outlined" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </Stack>
            </section>
            <section className={'mb50'} data-aos="zoom-in-up">
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
                    <article className={'big'}>
                        <div className={'titleData '}>
                            <span className={'blockBadge'}>Scale Instantly</span>
                        </div>
                        <p className="titleText mt20">
                            Streamline the product development flow with a content platform that's aligned across specs and insights.
                        </p>
                    </article>
                    <article className={'big'}>
                        <div className={'titleData '}>
                            <span className={'blockBadge'}>Tailored Flows</span>
                        </div>
                        <p className="titleText mt20">
                            Streamline the product development flow with a content platform that's aligned across specs and insights.
                        </p>
                    </article>

                </div>
            </section>
            <section className={'mb50'} data-aos="fade-down">
                <div className={'s2Title titleData mb25'}>Наши инструменты</div>
                <h2 className={'titleText mb15'}>Мы используем современные инструменты и технологии для создания эффективных решений:</h2>
                <p className={'titleData mb25'}>
                    Наш стек постоянно обновляется, чтобы соответствовать самым высоким стандартам и требованиям рынка.
                </p>
                <div className={'blocks'} style={{marginTop: '20px'}}>
                    <article className={'mini'}>
                        {/*<AcUnitIcon/>*/}
                        <img src={react} alt="#"/>
                        <h3 className={'mb15'}>React</h3>
                        <p className={'titleData mb25'}>
                            Track progress across custom flows for your team. Find the right balance for the user, privacy and security.
                        </p>
                    </article>
                    <article className={'mini'}>
                        <img src={one1c} alt="#"/>
                        <h3 className={'mb15'}>1c</h3>
                        <p className={'titleData mb25'}>
                            Track progress across custom flows for your team. Find the right balance for the user, privacy and security.
                        </p>
                    </article>
                    <article className={'mini'}>
                        <img src={node} alt="#"/>
                        <h3 className={'mb15'}>Node JS</h3>
                        <p className={'titleData mb25'}>
                            Track progress across custom flows for your team. Find the right balance for the user, privacy and security.
                        </p>
                    </article>
                    <article className={'mini'}>
                        <img src={mongo} alt="#"/>
                        <h3 className={'mb15'}>Mongo DB</h3>
                        <p className={'titleData mb25'}>
                            Track progress across custom flows for your team. Find the right balance for the user, privacy and security.
                        </p>
                    </article>
                    <article className={'mini'}>
                        <img src={js} alt="#"/>
                        <h3 className={'mb15'}>JavaScript</h3>
                        <p className={'titleData mb25'}>
                            Track progress across custom flows for your team. Find the right balance for the user, privacy and security.
                        </p>
                    </article>
                    <article className={'mini'}>
                        <img src={vue} alt="#"/>
                        <h3 className={'mb15'}>Vue JS</h3>
                        <p className={'titleData mb25'}>
                            Track progress across custom flows for your team. Find the right balance for the user, privacy and security.
                        </p>
                    </article>
                </div>
            </section>
        </main>
    );
};

export default Main;