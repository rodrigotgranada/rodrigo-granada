import React from 'react'
import './Footer.scss'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className=' footer lg:flex justify-center text-center items-center space-x-6 text-back text-xs py-3 sm:hidden'>
            {/* <div className='footer'> */}
            <span>
                Copyright © 2024 Rodrigo Tavares Granada
            </span>
            {/* </div> */}
        </div>
    )
}

export default Footer