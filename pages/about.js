import React from 'react';
import Image from "next/image";
import profile from '../public/Arcadia_Shots-5-2.jpg'
import {Parallax} from "react-scroll-parallax";
import Link from "next/link";
// import ActivitiesMap from "../components/ActivitiesMap";
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
    () => import('../components/ActivitiesMap'),
    { ssr: false }
)

About.title= "About Me"
About.keywords = "about"
export default function About (){

    return (
        <div className={'bg-black'}>
            <div className={'landingAbout min-h-screen max-h-[90vh] h-auto m-auto bg-scroll '}>
                <div className={'aboutImageContainer '}>
                    <Image
                        className={'aboutImage bg-black !pr-[25vw]'}
                        src={profile}
                        alt={'profile picture'}
                        layout={'fill'}
                        objectFit={'contain'}
                        priority={true}
                        // sizes={'60vs'}
                        // objectPosition={''}
                        // width={'100%'}
                        // height={'100vh'}
                    />

                </div>
                <Parallax speed={0} translateY={['150%','-50%']} className={'hidden md:block aboutmeParagraph h-auto absolute top-1/4 right-40 p-6 flex justify-center w-1/3 m-auto '}>
                    <div className={'text-3xl font-bold leading-loose mb-8 bg-black/50 md:bg-neutral-900/0 -mt-16 md:mt-2'}> I am <span className={'text-secondary-200'}>passionate</span> about sharing what I love with others, whether it's giving conference talks or workshops, writing and editing scicomm articles, or taking my friends rock climbing and throwing them off the cliff (they're tied to ropes, I promise).</div>
                </Parallax>
                {/*<Parallax speed={-30} translateY={['-10000%','30000%']}  className={'relative left-32'}>*/}
                    {/*<div className={'myHex3'}>*/}
                {/*        <svg width="35" height="40"*/}
                {/*             style={{filter: 'drop-shadow(rgba(0, 0, 0, 0.8) 0px 0px 10px)'}}*/}
                {/*        ><Link href={"/gallery"}>*/}
                {/*            <a>*/}
                {/*                <path fill="#fff"*/}
                {/*                      d="M17.32050807568877 0L34.64101615137754 10L34.64101615137754 30L17.32050807568877 40L0 30L0 10Z"></path>*/}
                {/*            </a>*/}
                {/*        </Link>*/}

                {/*        </svg>*/}
                {/*    </div>*/}
                {/*</Parallax>*/}
                <Parallax speed={30} translateY={['150%','-300%']}className={'block md:hidden aboutmeParagraph h-auto absolute top-3/4 p-6 flex justify-center  w-full m-auto text-primary '}>
                    <div className={'text-md md:text-2xl mb-8 bg-black/50 md:bg-neutral-900/0 -mt-16 md:mt-2'}> I am passionate about sharing what I love with others, whether it's giving conference talks or workshops, writing and editing scicomm articles, or taking my friends rock climbing and throwing them off the cliff (they're tied to ropes, I promise).</div>
                </Parallax>


            </div>
            {/*<div className={'min-h-[100vh] h-auto '} id={'leafletMap'}>*/}
            {/*    <div> Some Fun Visualizations about my life</div>*/}
            {/*    <DynamicComponentWithNoSSR />*/}

            {/*</div>*/}


        </div>
    );
};

// export default About;
