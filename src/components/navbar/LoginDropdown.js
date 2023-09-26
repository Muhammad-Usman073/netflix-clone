'use client'
import React from 'react'
import { useContext } from 'react';
import AuthContext from '@/context/loginContext/AuthContext';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
const LoginDropdown = () => {
    const { userName, email } = useContext(AuthContext)
    const name = userName
    const firstName = name.split(' ', 1);
    const newName = firstName.map(name => name)
    const newMail = email
    const [username, domain] = newMail.split("@")
    const newFunction = (start, end) => {
        if (username.length > 3) {
            return `${username.slice(start, end)}...@${domain}`;
        }
    }
    return (
        <div className='border-[1px]  flex flex-col py-2 rounded transition duration-700 bg-white justify-between fixed top-[3.5rem] z-20 h-[30%] w-[13%] right-[2.5rem] overflow-hidden border-black' >
            <div className=' mx-auto flex items-center flex-col  ' >
                <AccountBoxIcon className=' text-[33px] ' />
                <h1 className='font-[800] ' >{newName}</h1>
                <h3 className=' font-[400] ' >{newFunction(0, 2)}</h3>
            </div>

            <div className=' mx-auto ' >
                <button className=' bg-red-500 rounded px-[3rem] py-2 text-white'>logout</button>
            </div>
        </div>
    )
}

export default LoginDropdown
