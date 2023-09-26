import React from 'react'
import Image from 'next/image'
import login_background_image from '../../../public/assets/netflix_login_page.jpg'
import Backdrop from './backdrop/Backdrop'
const SignIn = () => {
    return (
        <div>
            <Image
                className='w-full h-[100vh] '
                alt='background image'
                src={login_background_image} />
            <Backdrop />

        </div>
    )
}

export default SignIn
