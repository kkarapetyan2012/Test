import React from 'react';

const Input = ({ type, onChange, className, wrapperClassName, placeholder}) => {
    return (
        <div className={wrapperClassName}>
            <input placeholder={placeholder} type={type} className={`${className} input`} onChange={onChange} />
        </div>
    );
};

export default Input;