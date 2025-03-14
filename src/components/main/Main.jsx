import '../../css.scss'
import page from '/public/img/page.svg'
import {Button, Stack} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const Main = () => {
    return (
        <main style={{backgroundImage: `url(${page})`}}>
            <section className={'mb50 mt50'}>
                <h1 className={'titleText mb15'}>AI-driven tools for product teams</h1>
                <p className={'titleData mb25'}>
                    Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
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
            <section className={'mb50'}>
                <div className={'s2Title titleData mb25'}>Tailored Workflows</div>
                <h2 className={'titleText mb15'}>Map your product journey</h2>
                <p className={'titleData mb25'}>
                    Simple and elegant interface to start collaborating with your team in minutes. It seamlessly integrates with your code and your favorite programming languages.
                </p>
                <div className={'blocks'} style={{marginTop: '20px'}}>
                    <article className={'big'}>
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
            <section className={'mb50'}>
                <div className={'s2Title titleData mb25'}>Advanced Controls</div>
                <h2 className={'titleText mb15'}>Built for modern product teams</h2>
                <p className={'titleData mb25'}>
                    Open AI reads and understands your files, and with nothing more than a single line of feedback, so you can go further than the speed of thought.
                </p>
                <div className={'blocks'} style={{marginTop: '20px'}}>
                    <article className={'mini'}>
                        <AcUnitIcon/>
                        <h3 className={'mb15'}>Project Milestones</h3>
                        <p className={'titleData mb25'}>
                            Track progress across custom flows for your team. Find the right balance for the user, privacy and security.
                        </p>
                    </article>
                    <article className={'mini'}>
                        <AcUnitIcon/>
                        <h3 className={'mb15'}>Project Milestones</h3>
                        <p className={'titleData mb25'}>
                            Track progress across custom flows for your team. Find the right balance for the user, privacy and security.
                        </p>
                    </article>
                    <article className={'mini'}>
                        <AcUnitIcon/>
                        <h3 className={'mb15'}>Project Milestones</h3>
                        <p className={'titleData mb25'}>
                            Track progress across custom flows for your team. Find the right balance for the user, privacy and security.
                        </p>
                    </article>
                    <article className={'mini'}>
                        <AcUnitIcon/>
                        <h3 className={'mb15'}>Project Milestones</h3>
                        <p className={'titleData mb25'}>
                            Track progress across custom flows for your team. Find the right balance for the user, privacy and security.
                        </p>
                    </article>
                    <article className={'mini'}>
                        <AcUnitIcon/>
                        <h3 className={'mb15'}>Project Milestones</h3>
                        <p className={'titleData mb25'}>
                            Track progress across custom flows for your team. Find the right balance for the user, privacy and security.
                        </p>
                    </article>
                    <article className={'mini'}>
                        <AcUnitIcon/>
                        <h3 className={'mb15'}>Project Milestones</h3>
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