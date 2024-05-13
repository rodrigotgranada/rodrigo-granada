import { useState } from 'react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom';
import "./Nav.scss"

const Nav = () => {
    let Links = [
        { name: "Home", link: "/" },
        { name: "Carreira", link: "/career" },
        { name: "Habilidades", link: "/skills" },
        { name: "Contatos", link: "/contact" }
    ];
    const [open, setOpen] = useState<boolean>(false);
    const handleClick = () => setOpen(!open);

    return (
        <div className='header'>
            <div className='shadow-md w-full fixed top-0 left-0'>
                <div className='md:flex items-center justify-between bg-navBgColor py-4 md:px-10 px-7 rounded-b-lg '>
                    {/* logo section */}
                    <div className=' cursor-pointer items-center gap-1'>
                        {/* <UserIcon className='w-7 h-7 ' /> */}
                        <h2 className='font-bold text-2xl'>Portifólio</h2>
                        <h3 className='font-bold text-1xl'>Rodrigo Granada</h3>
                    </div>
                    {/* Menu icon */}
                    <div onClick={() => handleClick()} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                        {
                            open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                        }
                    </div>
                    {/* linke items */}
                    <ul className={`
                        bg-white 
                        md:bg-navBgColor                    
                        md:flex 
                        md:items-center rounded-b-lg 
                        md:pb-0 pb-12 absolute 
                        md:static
                        md:z-auto z-[-1] left-0 w-full 
                        md:w-auto 
                        md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'sm: top-20' : 'top-[-490px]'}
                        `
                    }>
                        {
                            Links.map((link, index) => (
                                <li key={index} className='xs:my-5 sm:my-4 md:ml-8 md:my-7 font-semibold'>
                                    <NavLink
                                        to={link.link}
                                        onClick={() => handleClick()}
                                        className={({ isActive }) => `text-black hover:text-darkBlue ${isActive && 'text-darkBlue'}`}
                                    >
                                        {link.name}
                                    </NavLink>
                                    {/* <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a> */}
                                </li>))
                        }
                        <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Currículo</button>
                    </ul>
                    {/* button */}
                </div>
            </div>
        </div>
    )
}

export default Nav