import React from 'react'
import LoginForm from '../loginform/LoginForm'
const Backdrop = () => {
    return (
        <div className='w-full absolute top-0 bg-black bg-opacity-[.3] h-[100vh] '  >
            <div className=' text-opacity-1 ' >
                <LoginForm />
            </div>
        </div>
    )
}

export default Backdrop
