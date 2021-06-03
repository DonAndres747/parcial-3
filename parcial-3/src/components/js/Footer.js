import '../css/Footer.css'
import Face from '../../Recursos/icon-facebook.svg'
import Twit from '../../Recursos/icon-twitter.svg'
import Inst from '../../Recursos/icon-instagram.svg'
import Pint from '../../Recursos/icon-pinterest.svg'


function Footer(){

    return(
    <div className="footer">
        <div className="footer-inner">
        <a className='app-name' href='#top'>Shortly</a>
                <div className='footer-section'>
                    <p>Features</p>
                    <a href='#top'>Link Shortening</a>
                    <a href='#top'>Branded Links</a>
                    <a href='#top'>Analytics</a>
                </div>
                <div className='footer-section'>
                    <p>Resources</p>
                    <a href='#top'>Blog</a>
                    <a href='#top'>Developers</a>
                    <a href='#top'>Support</a>
                </div>
                <div className='footer-section'>
                    <p>Company</p>
                    <a href='#top'>About</a>
                    <a href='#top'>Our Team</a>
                    <a href='#top'>Careers</a>
                    <a href='#top'>Contact</a>
                </div>
                <div className="redes">
                        <a>
                            <img src={Face} alt='red-icon'/>
                        </a>
                        <a>
                            <img src={Twit} alt="red-icon"/>
                        </a>
                        <a>
                            <img src={Pint} alt="red-icon"/>
                        </a>
                        <a>
                            <img src={Inst} alt="red-icon"/>
                        </a>

                </div>

        </div>
      
    </div>
    )
}

export default Footer;