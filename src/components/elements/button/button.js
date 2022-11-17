import React from 'react';

const Button = ({ className, children, title, onClick, style}) => {
    return (
        <button className={className} title={title} onClick={onClick} style={style}>
            {children}
        </button>
    );
};

export default Button;