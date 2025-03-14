import '../../css.scss'
import page from '../../assets/img/page.svg'

const Footer = () => {
    return (
        <footer style={{backgroundImage: `url(${page})`}}>
            <div className={'footer'} data-aos="fade-up">
                <div>
                    <h3>Product</h3>
                    <ul>
                        <li><a href={'#'}>Features</a></li>
                        <li><a href={'#'}>Integrations</a></li>
                        <li><a href={'#'}>Pricing & Plans</a></li>
                        <li><a href={'#'}>Changelog</a></li>
                        <li><a href={'#'}>User policy</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Company</h3>
                    <ul>
                        <li><a href={'#'}>About us</a></li>
                        <li><a href={'#'}>Blog</a></li>
                        <li><a href={'#'}>Careers</a></li>
                        <li><a href={'#'}>Financial statements</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Resources</h3>
                    <ul>
                        <li><a href={'#'}>Community</a></li>
                        <li><a href={'#'}>Terms of service</a></li>
                        <li><a href={'#'}>Report a vulnerability</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Content Library</h3>
                    <ul>
                        <li><a href={'#'}>Templates</a></li>
                        <li><a href={'#'}>Tutorials</a></li>
                        <li><a href={'#'}>Knowledge base</a></li>
                        <li><a href={'#'}>Learn</a></li>
                    </ul>
                </div>
                <div>1</div>
            </div>
        </footer>
    );
};

export default Footer;