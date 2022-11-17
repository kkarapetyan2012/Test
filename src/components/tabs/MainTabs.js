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
        <div>
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
            <div>
                {tabs.map(tab =>
                    <span
                        className={`tab ${toggleTabs === tab.id ? 'active' : ''}`}
                        key={tab.id}
                        style={{background: `${tab.color}`}}
                        onClick={() => toggleTab(tab.id)}
                    />

                )}
            </div>

        </div>
    );
};

export default MainTabs;