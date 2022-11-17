import React, {useState} from 'react';
import {
    Link
} from "react-router-dom";
import logo from '../../assets/images/logo/logo.svg';
import hamburgerMenu from '../../assets/images/icons/hamburgerMenu.svg'
import Button from "../elements/button/button";

const Header = () => {
    const [isMenuVisible, setMenuIsVisible] = useState(false)
    return (
        <header>
            <div className="container">
                <div className='header-container'>
                    <div className="header-logo pointer">
                        <Link to='/'>
                            <img src={logo} alt={`${logo}`} />
                        </Link>
                    </div>
                    <Button
                        className='pointer menu-mobile'
                        title='menu'
                        onClick={() => setMenuIsVisible(!isMenuVisible)}
                    >
                        <img src={hamburgerMenu} alt={`${hamburgerMenu}`}/>
                    </Button>
                    <nav className={`navigation ${isMenuVisible ? 'navigation-show' : ''}`}>

                        <ul className='menu-list'>
                            <li className='pointer menu-item'><Link className='menu-link' to=''>Download</Link></li>
                            <li className='pointer menu-item'><Link className='menu-link' to=''>Contact</Link></li>
                            <li className='pointer menu-item'><Link className='menu-link' to=''>FAQ</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;