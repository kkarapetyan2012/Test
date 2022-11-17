import React from 'react';
import kim from '../../assets/images/kim.png'
import Button from "../elements/button/button";

const ImageContainer = () => {
    return (
        <div className='img--container-block'>
            <div className='img--container-left'>
                <img src={kim} alt={`${kim}`} />
            </div>
            <div className='img--container-right'>
                <div className='container'>
                    <div className='img--container-centered'>
                        <h3>Beats and Kim</h3>
                        <h4>Special Edition</h4>
                        <h4>$ 200</h4>
                        <Button>Button</Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ImageContainer;