import React from 'react';

function Button(props) {
    return (
        <button className={`bg-[#2549D3] text-white p-1.5 rounded px-2.5 ${props.className}`}>
            <p className={props.textClass}>{props.text}</p>
        </button>
    );
}

export default Button;