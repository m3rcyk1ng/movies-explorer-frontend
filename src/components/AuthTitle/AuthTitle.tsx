import React from 'react';
import './AuthTitle.styles.css';

function AuthTitle({titleText, classStyle}: any) {
    return (
        <>
            <h2 className={`auth-title__${classStyle}`}>{titleText}</h2>
        </>
    )
}

export default AuthTitle;
