import React, {useState} from 'react';
import Link from "next/link";
import Image from 'next/image'
import {menuData} from '../data/menuData'

function NavLink({to, children}) {
    return <Link href={to}><a className={`mx-4`}>
        {children}
    </a></Link>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-black transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
                <a className="text-xl font-semibold" href="/">zane wolf</a>
            </div>
            <div className="flex flex-col justify-center">
                {menuData.map((navLink,i)=>{
                    return (
                        <Link key={i} href={navLink.to}>
                            <a className="text-xl font-medium my-4 justify-center"  onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                                {navLink.title}
                            </a>
                        </Link>
                    )})}
                {/*<a className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>*/}
                {/*    About*/}
                {/*</a>*/}
                {/*<a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>*/}
                {/*    Contact*/}
                {/*</a>*/}
            </div>
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter px-2 md:px-12 md:py-4 h-25 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-5/12 flex items-center">
                {/*<a className="text-2xl font-semibold" href="/">LOGO</a>*/}
                    <h1 className={"text-2xl md:text-4xl"}>
                        <Link href={'/'}>
                            <a><span className={'font-extralight'}>visual</span><span className={'font-extrabold'}>zanity</span>
                            {/*<span className={'font-light text-lg pl-4'}> by zane wolf</span>*/}
                            </a>
                        </Link>

                    </h1>
                    {/*<Image*/}
                    {/*    src={'/logo.png'} width={128} height={77} alt={"logo"}*/}
                    {/*/>*/}
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex text-lg md:text-xl">
                    {menuData.map((navLink,i)=>{
                        return <NavLink to={navLink.to} key={i}>{navLink.title}</NavLink>
                        }
                    )}
                </div>
            </div>
        </nav>
    )
}

// const Navbar = () => {
//     return (
//         <nav >
//             <div className={"logo"}>
//                 <h1 className={"text-2xl md:text-4xl"}> <Link href={'/'}><a>visual inzanity</a></Link></h1>
//                 {/*<Image*/}
//                 {/*    src={'/logo.png'} width={128} height={77} alt={"logo"}*/}
//                 {/*/>*/}
//             </div>
//             {/*<button data-collapse-toggle="mobile-menu" type="button"*/}
//             {/*        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"*/}
//             {/*        aria-controls="mobile-menu" aria-expanded="false">*/}
//             {/*    <span className="sr-only">Open main menu</span>*/}
//             {/*    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">*/}
//             {/*        <path fill-rule="evenodd"*/}
//             {/*              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"*/}
//             {/*              clip-rule="evenodd"></path>*/}
//             {/*    </svg>*/}
//             {/*    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"*/}
//             {/*         xmlns="http://www.w3.org/2000/svg">*/}
//             {/*        <path fill-rule="evenodd"*/}
//             {/*              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"*/}
//             {/*              clip-rule="evenodd"></path>*/}
//             {/*    </svg>*/}
//             {/*</button>*/}
//             {/*<div className="hidden w-full md:block md:w-auto" id="mobile-menu">*/}
//                 <Link href={"/"}><a className={"text-md md:text-2xl font-light "}>home</a></Link>
//                 <Link href={"/about"}><a className={"text-md md:text-2xl font-light"} >about</a></Link>
//                 <Link href={"/projects"}><a className={"text-md md:text-2xl font-light"} >projects</a></Link>
//             {/*</div>*/}
//
//         </nav>
//     );
// };

// export default Navbar;
