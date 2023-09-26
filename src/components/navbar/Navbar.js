'use client'
import { useRouter } from 'next/navigation'
import LoginDropdown from './LoginDropdown'
import { useState, useEffect } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Link from "next/link"
import { useContext } from 'react'
import AuthContext from '@/context/loginContext/AuthContext'
const Navbar = () => {
    const [dropDownShown, setDropDownShown] = useState(false)
    const [show, setShow] = useState(false);
    const { isLoggedIn } = useContext(AuthContext);
    const navbarTransition = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false)
        }
    }

    const logedIn = () => {
        if (dropDownShown === true) {
            setDropDownShown(false)
        } else {
            setDropDownShown(true)
        }
    }

    const router = useRouter();

    useEffect(() => {
        window.addEventListener('scroll', navbarTransition)
        return () => { }
    }, [])


    const bg = 'bg-black'


    return (
        <div>
            <nav className={`${show && bg} items-center z-10 py-[1rem] transition duration-500 fixed top-0 w-full text-white flex justify-between opacity-[1] px-[2.5rem]`} >
                <div className="flex items-center gap-[3rem]" >
                    <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="netflix-logo" height={100} width={100} />
                    <div className=" flex gap-[2rem] " >
                        <Link className="text-[14px] hover:text-gray-100 hover:font-[500]" href="/">Home</Link>
                        <Link className="text-[14px] hover:text-gray-100 hover:font-[500]" href="/tvseries">tv shows</Link>
                        <Link className="text-[14px] hover:text-gray-100 hover:font-[500]" href="/movies">Movies</Link>
                        <Link className="text-[14px] hover:text-gray-100 hover:font-[500]" href="/newandpopular">news & popular</Link>
                    </div>
                </div>

                <div className='flex justify-center ' >
                    
                        {isLoggedIn && dropDownShown === true ? <ArrowDropUpIcon /> : isLoggedIn && <ArrowDropDownIcon />}
                    {
                        isLoggedIn ? <img onClick={logedIn} className='cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="accounts-logo" height={50} width={30} /> : <button onClick={() => {
                            router.push('/signIn')
                        }} className=" bg-red-500 px-[1rem] py-[4px] rounded " >
                            sign in
                        </button>
                    }

                </div>

            </nav>
            {
                dropDownShown && <LoginDropdown />
            }
        </div>
    )


}
export default Navbar
