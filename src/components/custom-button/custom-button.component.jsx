import React from 'react'

import './custom-button.style.scss'

const CustomButton = ({ children, ...otherProp}) => (
    <button className='custom-button' {...otherProp}>
        {children}
    </button>
)

export default CustomButton