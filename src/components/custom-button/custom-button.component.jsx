import React from 'react'

import './custom-button.style.scss'

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProp}) => (
    <button className={`${inverted ? 'inverted' : '' } ${isGoogleSignIn ? 'google-sign-in' : '' } custom-button `}{...otherProp}>
        {children}
    </button>
)

export default CustomButton