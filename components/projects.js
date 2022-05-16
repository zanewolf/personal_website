import React from 'react'
import {createClient} from "contentful";
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import hexBackground from "../public/hex-bg-4.png";
import {Parallax} from "react-scroll-parallax";
import {ResponsiveHoneycomb,Hexagon} from "react-honeycomb";
import range from "lodash/range";

import hexSVG from '../public/hex.svg'
import Link from "next/link";

const items = range(64);

export default function Projects({projects}) {
    // console.log(projects)
    // selectedProjects = projects.filter
    return (
        <div className="projectDiv flex flex-col flex-nowrap relative">
            <div className={'bgWrap'}>
                <Image
                    className={'landingImage shadow-3xl'}
                    src={hexSVG}
                    alt={'hexagonal background white'}
                    layout={'fill'}
                    // sizes={'100vw'}
                    objectFit={'cover'}
                    objectPosition={'top'}
                    quality={'100'}
                    // width={'120%'}
                    height={'100%'}
                />
            </div>
            <div className="project-list inset-0 flex flex-col flex-nowrap items-center absolute">
                <div className="text-3xl md:text-4xl text-secondary-100 mb-8 top-1/3 -mt-10 md:mt-12 xl:mt-96 relative">
                    <span className="font-thin-light">selected </span>
                    <span className="font-bold">projects</span>
                </div>

                    {/*<div className="w-full">*/}
                    {/*    <ResponsiveHoneycomb*/}
                    {/*        defaultWidth={1024}*/}
                    {/*        size={150}*/}
                    {/*        items={projects.filter(d=>d.fields.selected)}*/}
                    {/*        renderItem={(item) => (*/}
                    {/*            <Hexagon className={'hover:scale-105'}>*/}
                    {/*                <Link href={"/projects/"+item.fields.slug}>*/}
                    {/*                     <a className="" id="hl1" >*/}
                    {/*                         /!*<div className=""></div>*!/*/}
                    {/*                         <Image*/}
                    {/*                            src={'https:' + item.fields.thumbnail.fields.file.url}*/}
                    {/*                            // layout={'fixed'}*/}
                    {/*                            alt={'project-image-'+item.fields.name}*/}
                    {/*                            layout={'fill'}*/}
                    {/*                            objectFit= {'cover'}*/}
                    {/*                            // // sizes={'15vw'}*/}
                    {/*                            // width={thumbnail.fields.file.details.image.width}*/}
                    {/*                            // height={thumbnail.fields.file.details.image.height*2}*/}
                    {/*                         />*/}
                    {/*                     <h3>{item.fields.name}</h3>*/}
                    {/*                    /!*<div className="plus"></div>*!/*/}
                    {/*                     </a>*/}
                    {/*                </Link>*/}
                    {/*            </Hexagon>*/}
                    {/*            // return <Hexagon className='awesome-class-name'>*/}
                    {/*            //     <img*/}
                    {/*            //         src={`https://picsum.photos/${sideLength * 2}?random=${item}`}*/}
                    {/*            //         alt={`Random #${item}`}*/}
                    {/*            //     />*/}
                    {/*            //     <Link href={"/projects/"+item.fields.slug}>*/}
                    {/*            //         <a className="" id="hl1" >*/}
                    {/*            //             <div className=""></div>*/}
                    {/*            //             <Image*/}
                    {/*            //                 src={'https:' + item.fields.thumbnail.fields.file.url}*/}
                    {/*            //                 // layout={'fixed'}*/}
                    {/*            //                 alt={'project-image-'+name}*/}
                    {/*            //                 layout={'fill'}*/}
                    {/*            //                 objectFit= {'cover'}*/}
                    {/*            //                 // // sizes={'15vw'}*/}
                    {/*            //                 // width={thumbnail.fields.file.details.image.width}*/}
                    {/*            //                 // height={thumbnail.fields.file.details.image.height*2}*/}
                    {/*            //             />*/}
                    {/*            //             <h3>{name}</h3>*/}
                    {/*            //             /!*<div className="plus"></div>*!/*/}
                    {/*            //         </a>*/}
                    {/*            //     </Link>*/}
                    {/*            // </Hexagon>*/}
                    {/*        )}*/}
                    {/*    />;*/}
                    {/*</div>*/}
                    {/*<div className={'flex flex-row flex-wrap'}>*/}


                {/*    {projects.map(project => {*/}
                {/*        console.log(project)*/}
                {/*        return (project.fields.selected &&*/}
                {/*            <ProjectCard key={project.sys.id} project={project} />)*/}
                {/*    })}*/}
                {/*</div>*/}
                <div className="projectButton text-secondary-100 p-2 absolute bottom-8 rounded-2xl duration-200 border-2 border-secondary-100 hover:scale-110 duration-200">
                    <Link href={'/projects'}>
                        <a>
                            view all projects
                        </a>
                    </Link>
                </div>

                </div>

                <style jsx>{`
            .bgWrap{
              //position: fixed;
              //height: 100vh;
              ////min-height: 100vh;
              //width: 100vw;
              //overflow: hidden;
              //z-index: -1;
            }
            .projectDiv{
              //background: white;
            }
            .project-list {
            //display: flex;
            //flex-flow: row wrap;
            //gap: 50px;
            //justify-content: center;
            //padding-top: 60vh;
            //background-color: white;
            //height: 30vh;
              //display: grid;
              //grid-template-columns: 1fr 1fr;
              //grid-gap: 400px 60px;
            }
          `}</style>
            </div>



    )
}
