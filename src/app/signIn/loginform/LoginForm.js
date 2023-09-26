'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { SignInWithGooglePopup } from '@/firebase/Firebase.utils';
import GoogleIcon from '@mui/icons-material/Google';
import { useContext } from 'react';
import AuthContext from '@/context/loginContext/AuthContext';
const LoginForm = () => {
    const { setIsLoggedIn, setUserName, setEmail } = useContext(AuthContext)
    const router = useRouter()
    const submitHandler = (event) => {
        event.preventDefault();
        router.push('/')
    }
    const googleSignIn = async () => {
        try {
            const { user } = await SignInWithGooglePopup();
            if (user.emailVerified === true) {
                setIsLoggedIn(true)
                setUserName(user.displayName)
                setEmail(user.email)
                router.push('/')
                console.log(user)
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='absolute left-[35%] top-[6%] font-Sans bg-black bg-opacity-[.7] inline-block rounded h-[90vh] p-[2rem] w-[25%] ' >
            <form onSubmit={submitHandler} >
                <div className=' flex flex-col gap-[11rem] ' >
                    <div>
                        <h1 className='text-white flex items-start text-[30px] pb-[.5rem] font-[800] font-Sans'> Login </h1>
                        <div className=' flex flex-col gap-[1rem] ' >
                            <input required className='rounded bg-gray-700 py-[.70rem] font-[400] text-white outline-none font-Sans text-[15px] pl-4' placeholder='Email' type="email" />
                            <input required className='rounded bg-gray-700 font-[400] py-[.70rem] text-white outline-none font-Sans text-[15px] pl-4' placeholder='Password' type="password" />
                            <input className='text-white cursor-pointer font-[600] font-Sans bg-red-600 mt-[2rem] px-[3rem] text-[15px] rounded py-[.70rem] ' placeholder='enter your email' type="submit" value='Sign In' />
                        </div>
                    </div>
                    <div>
                        <p className='text-[13px] hover:text-white hover:font-bold flex gap-[2px] items-center text-gray-400 cursor-pointer'
                            onClick={googleSignIn}
                        >
                            <GoogleIcon className=' text-[16px] ' />
                            login with google</p>
                        <p className='text-[13px] text-gray-400 '>New to Netflix? <span className='text-white font-[600] cursor-pointer font-Sans ' >Sign up now</span> </p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
