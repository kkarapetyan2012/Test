import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import slideImg from '../../assets/images/slideImg.png';
import {Link} from "react-router-dom";

const MainSlider = () => {
    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1500,
        cssEase: "linear",
        centerMode: true,
        centerPadding: "20px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,

                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    };
    return (
        <div className='container main-slider'>
            <Slider {...settings}>
                <div  className="slide-item">
                    <Link to=''>
                        <div className='wrapper-item'>
                            <img src={slideImg} alt={`${slideImg}`} />
                            <p>Beats Fit Pro</p>
                        </div>
                    </Link>
                </div>
                <div  className="slide-item">
                    <Link to=''>
                        <div className='wrapper-item'>
                            <img src={slideImg} alt={`${slideImg}`} />
                            <p>Beats Fit Pro</p>
                        </div>
                    </Link>
                </div>
                <div  className="slide-item">
                    <Link to=''>
                        <div className='wrapper-item'>
                            <img src={slideImg} alt={`${slideImg}`} />
                            <p>Beats Fit Pro</p>
                        </div>
                    </Link>
                </div>
                <div  className="slide-item">
                    <Link to=''>
                        <div className='wrapper-item'>
                            <img src={slideImg} alt={`${slideImg}`} />
                            <p>Beats Fit Pro</p>
                        </div>
                    </Link>
                </div>
                <div  className="slide-item">
                    <Link to=''>
                        <div className='wrapper-item'>
                            <img src={slideImg} alt={`${slideImg}`} />
                            <p>Beats Fit Pro</p>
                        </div>
                    </Link>
                </div>
                <div  className="slide-item">
                    <Link to=''>
                        <div className='wrapper-item'>
                            <img src={slideImg} alt={`${slideImg}`} />
                            <p>Beats Fit Pro</p>
                        </div>
                    </Link>
                </div>
            </Slider>
        </div>

    );
};

export default MainSlider;