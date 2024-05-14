import { useContext, useState } from 'react'
import { Bars3BottomRightIcon, XMarkIcon, MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom';
import "./Nav.scss"
import { ThemeContext } from '../../Contexts/ThemeContext';
import { ThemeContextInterface } from '../../types';
import Button from '../Button/Button';

const Nav = () => {
    let Links = [
        { name: "Home", link: "/" },
        { name: "Carreira", link: "/career" },
        { name: "Habilidades", link: "/skills" },
        { name: "Contatos", link: "/contact" }
    ];
    const [open, setOpen] = useState<boolean>(false);
    const handleClick = () => setOpen(!open);

    const { darkTheme, toggleTheme } = useContext(
        ThemeContext
    ) as ThemeContextInterface;

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
                    <div className='flex items-center gap-2 absolute right-5 top-6'>
                        <div onClick={() => handleClick()} className='cursor-pointer md:hidden w-7 h-7 transition-all duration-500 ease-in'>
                            {
                                open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                            }
                        </div>

                    </div>

                    {/* linke items */}
                    <ul className={`bg-navBgColorSmall md:bg-navBgColor md:flex md:items-center rounded-b-lg md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'sm: top-20' : 'top-[-490px]'}`}>
                        {
                            Links.map((link, index) => (
                                <Button key={index.toString()} children={
                                    <NavLink
                                        to={link.link}
                                        onClick={() => handleClick()}
                                        className={({ isActive }) => `${isActive && 'underline underline-offset-4 text-textActive'} hover:text-darkBlue`}
                                    >
                                        {link.name}
                                    </NavLink>
                                } types={'nav'} />
                            ))
                        }
                        <Button children={`Currículo`} types={'geral'} onClick={() => console.log('cliquei')} />
                        <div className='flex items-center md:relative md:top-0 md:right-0 ml-4 xs:absolute xs:top-6 xs:right-5'>
                            <div onClick={() => toggleTheme()} className=' cursor-pointer w-6 h-6 transition-all duration-900 ease-in'>
                                {
                                    !darkTheme ? <MoonIcon /> : <SunIcon />
                                }
                            </div></div>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Nav