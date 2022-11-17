import React, {useState} from 'react';
import i1 from '../../assets/images/1i.png';
import i2 from '../../assets/images/2i.png';
import i3 from '../../assets/images/3i.png';
import Button from "../elements/button/button";

const tabs = [
    {
        id: 1,
        color: 'black'
    },
    {
        id: 2,
        color: 'white'
    },
    {
        id: 3,
        color: '#444'
    },
    {
        id: 4,
        color: '#2B3E8A'
    },
]


const MainTabs = () => {
    const [toggleTabs, setToggleTabs] = useState(1);
    const toggleTab = (index) => setToggleTabs(index);

    return (
        <div className='tabs-container'>
            <div className='container'>
                <h2 className='tabs-title'>Choose your Beats</h2>
                <div className='tabs-block'>
                
                    <div  className={`${toggleTabs === 1 ? 'active' : ''} tab-content`}>
                        <img src={i1} alt={`${i1}`} />
                    </div>
                    <div  className={`${toggleTabs === 2 ? 'active' : ''} tab-content`}>
                        <img src={i2} alt={`${i2}`} />
                    </div>
                    <div  className={`${toggleTabs === 3 ? 'active' : ''} tab-content`}>
                        <img src={i3} alt={`${i3}`} />
                    </div>
                    <div  className={`${toggleTabs === 4 ? 'active' : ''} tab-content`}>
                        <img src={i2} alt={`${i2}`} />
                    </div>
                    <div className='tab-heading'>
                        <h3 className='tab-title'>Beats Fit Pro</h3>
                        <p className='tab-paragraph'>$199.99</p>
                        <ul className='info-list'>
                            <li className='info-item'>Flexible, secure-fit wingtips</li>
                            <li className='info-item'>Active Noise Cancelling (ANC) and Transparency</li>
                            <li className='info-item'>Up to 6 hours of listening time with ANC on</li>
                            <li className='info-item'>Autoplay/Pause connection via Apple H1 chip</li>
                            <li className='info-item'>Flexible, secure-fit wingtips</li>
                            <li className='info-item'>Flexible, secure-fit wingtips</li>
                        </ul>
                        
                        <div className='buttons-block'>
                            <p className='buttons-text'>{tabs.length} color</p>
                            <p className='buttons-list'>
                                {tabs.map(tab =>
                                    <Button
                                        className={`tab-button ${toggleTabs === tab.id ? 'active' : ''}`}
                                        key={tab.id}
                                        style={{background: `${tab.color}`}}
                                        onClick={() => toggleTab(tab.id)}
                                    />
                                )}
                            </p>
                        </div>

                        <Button>Button</Button>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default MainTabs;