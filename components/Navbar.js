import React from 'react';
import Link from "next/link";
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav >
            <div className={"logo"}>
                {/*<h1> zane wolf</h1>*/}
                <Image
                    src={'/logo.png'} width={128} height={77} alt={"logo"}/>
            </div>
            <Link href={"/"}><a>home</a></Link>
            <Link href={"/about"}><a>about</a></Link>
            <Link href={"/projects"}><a>my projects</a></Link>
        </nav>
    );
};

export default Navbar;
