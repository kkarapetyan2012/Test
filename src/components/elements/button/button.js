import React from 'react';

const Button = ({ className, children, title, onClick}) => {
    return (
        <button className={className} title={title} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;