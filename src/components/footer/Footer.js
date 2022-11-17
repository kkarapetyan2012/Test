import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo/logo.svg";
import Input from "../elements/input/Input";
import Button from "../elements/button/button";
import facebook from '../../assets/images/icons/facebook.svg';
import twitter from '../../assets/images/icons/twitter.svg';
import instagram from '../../assets/images/icons/instagram.svg';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className='footer-container'>

                    <nav className='footer-navigation'>

                        <ul className='footer--menu-list'>
                            <li className="pointer footer--menu-item">
                                <div>
                                    <Link to='/'>
                                        <img src={logo} alt={`${logo}`} />
                                    </Link>

                                </div>

                                <div>Lorem Ipsum is simply  text of the  printing and typesetting industry.</div>

                            </li>
                            <li className="pointer footer--menu-item">

                                <div>Subscribe to stay tuned for new web design and latest updates. Let's do it!</div>

                                <div className="footer--menu-subscribe">
                                    <Input wrapperClassName="footer--menu-input" className='' placeholder="Enter yout email addres" />
                                    <Button className="footer--menu-button">Subscribe</Button>
                                </div>

                            </li>
                            <li className="pointer footer--menu-item">

                                <div>Follow us</div>

                                <div>
                                    <span>
                                    <img src={facebook} alt="social"/>
                                    </span>
                                        <span>
                                        <img src={twitter} alt="social"/>
                                    </span>
                                        <span>
                                        <img src={instagram} alt="social"/>
                                    </span>
                                </div>
                            </li>
                            <li className="pointer footer--menu-item">

                                <div>Call us</div>
                                <div>
                                    <a href="tel:18008543680 ">+1 800 854 36 80 </a>
                                </div>
                                
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='menu--bottom'>
                    <ul className='menu--bottom-list'>
                        <li className='menu--bottom-item'><Link className='menu--bottom-link' to=''>© {new Date().getFullYear()} All Rights Reserved</Link></li>
                        <li className='menu--bottom-item'><Link className='menu--bottom-link' to=''>Privacy Policy</Link></li>
                        <li className='menu--bottom-item'><Link className='menu--bottom-link' to=''>Terms of use</Link></li>
                        <li className='menu--bottom-item'><Link className='menu--bottom-link' to=''>Legal</Link></li>
                        <li className='menu--bottom-item'><Link className='menu--bottom-link' to=''>Site Map</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;