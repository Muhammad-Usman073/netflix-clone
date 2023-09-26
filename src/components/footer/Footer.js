import React from 'react'

const Footer = () => {

    const newYear = new Date()
    const thisYear = newYear.getFullYear()


    return (
        <div className='my-[2rem]' >
            <div className='flex items-center flex-col ' >
                <p className=' text-white font-Ubuntu' >  &copy; {thisYear} www.NetflixClone.com
                </p>
                <p className=' text-white font-Ubuntu'  >All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
