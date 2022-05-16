import React from 'react';
import Link from "next/link";
import {AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai";
import {FiGithub} from "react-icons/fi";
import {HiOutlineMail} from "react-icons/hi";

const Footer = () => {
    return (
        <footer>
            <section className="contactme flex flex-col flex-nowrap justify-center mb-8">
                <div className="text-3xl m-auto">follow or contact me</div>
                <div className="icons flex flex-row justify-center text-8xl gap-24 mt-4">
                    <div className="twitter" className={' hover:scale-110 duration-200'}>
                        <Link href={'https://twitter.com/inzaneresearch'} passHref>
                            <a target={"_blank"} referrer={'noreferrer'}>
                                <AiOutlineTwitter />
                            </a>
                        </Link>
                    </div>
                    <div className="instagram" className={' hover:scale-110 duration-200'}>
                        <Link href={'https://www.instagram.com/zaneywolf/?hl=en'} passHref>
                            <a target={"_blank"} referrer={'noreferrer'}>
                                <AiOutlineInstagram/>
                            </a>
                        </Link>
                    </div>
                    <div className="github" className={' hover:scale-110 duration-200'}>
                        <Link href={'https://github.com/zanewolf'} passHref>
                            <a target={"_blank"} referrer={'noreferrer'}>
                                <FiGithub/>
                            </a>
                        </Link>
                    </div>
                    <div className="email" onClick={()=>copy()} className={' hover:scale-110 duration-200'}>
                        {/*<Link href={'https://twitter.com/inzaneresearch'} passHref>*/}
                        {/*<a target={"_blank"} referrer={'noreferrer'}>*/}
                        <HiOutlineMail/>
                        {/*</a>*/}
                        {/*</Link>*/}
                    </div>
                </div>
            </section>
            <p>Copyright 2022 Zane Wolf</p>
        </footer>
    );
};

export default Footer;
