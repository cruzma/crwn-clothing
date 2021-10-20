import React from 'react'

import './custom-button.style.scss'

const CustomButton = ({ children, isGoogleSignIn, ...otherProp}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : '' } custom-button `}{...otherProp}>
        {children}
    </button>
)

export default CustomButton