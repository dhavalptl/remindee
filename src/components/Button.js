import React from 'react';
import "./Button.css";

function Button({children, onClick, styleClassName}) {
    return (
        <button
            onClick={onClick}
            className={`Btn ${styleClassName}`}>
                {children}
        </button>
    );
}

export default Button;
