import React from 'react';
import master from '../../assets/images/master.png';
import visa from '../../assets/images/visa.png';

const PaymentBlock = () => {
    return (
        <div className='payment'>
            <div className='container'>
                <div className="payment-container">
                    <div className="payment-left__side">
                        <h3>
                            Choose your Beats
                        </h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                    <div className="payment-right__side">
                        <img className="payment-visa" src={visa} alt={`${visa}`} />
                        <img className="payment-master" src={master} alt={`${master}`} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PaymentBlock;