import React from 'react';
import Button from "../elements/button/button";
import iphone from '../../assets/images/iPhone.png';
import heroImage from '../../assets/images/heroImage.png';
import ellipse from '../../assets/images/icons/ellipse.svg';

const Hero = () => {
    return (
        <div className="container">
            <div className='hero-container'>
                <div className="hero--side-left">
                    <h1 className='hero-title'>Obtain Valuible Knowledge by listening</h1>
                    <p className='hero-text'>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.Lorem
                        Ipsum has been the industry's standard
                        dummy text ever since the 1500s
                    </p>
                    <Button className='hero-button'>Button</Button>
                </div>
                <div className="hero--side-right">
                    <div className='img-container'>
                        <img className='phone' src={iphone} alt='iphone' />
                        <img className='airpods' src={heroImage} alt='heroImage' />

                    </div>
                    <Button className='hero-button_position'>
                        <img src={ellipse} alt='ellipse' />
                        <p>
                            <span>Jack</span> is creating account
                        </p>

                    </Button>
                </div>
            </div>

        </div>
    );
};

export default Hero;