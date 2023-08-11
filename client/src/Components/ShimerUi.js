import React from 'react';

export default function SimerUi(props) {
    return (
        <>
            <div style={{
                width: props.width,
                height: props.height,
                backgroundColor: 'rgba(0, 0, 0, 0.11)',
                transform: 'scale(1, 0.60)',
                animation: 'animation-c7515d 1.5s ease-in-out 0.5s infinite',
                borderRadius: '5%',
            }}>
            </div >
        </>
    )
}
