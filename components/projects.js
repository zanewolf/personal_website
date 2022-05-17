import React from 'react'
import {createClient} from "contentful";
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import hexBackground from "../public/hex-bg-4.png";
import {Parallax} from "react-scroll-parallax";
import {ResponsiveHoneycomb,Hexagon} from "react-honeycomb";
import range from "lodash/range";

import hexSVG from '../public/hex2.svg'
import Link from "next/link";

const items = range(64);

export default function Projects({projects}) {
    // console.log(projects)
    // selectedProjects = projects.filter
    return (
        <div className="projectDiv flex flex-col flex-nowrap relative justify-center">
            <div className={'bgWrap'}>
                <Image
                    className={'landingImage shadow-3xl'}
                    src={hexSVG}
                    alt={'hexagonal background white'}
                    layout={'responsive'}
                    // sizes={'100vw'}
                    objectFit={'fill'}
                    objectPosition={'top'}
                    quality={'100'}
                    sizes={'24vw'}
                    // width={'100vw'}
                    // height={'auto'}

                />
            </div>
            <div className="projectList inset-0 flex flex-col flex-nowrap items-center top-[28%] absolute">
                <div className="text-3xl md:text-4xl text-secondary-100 mb-8  relative">
                    <span className="font-thin-light">selected </span>
                    <span className="font-bold">projects</span>
                </div>

                    <div className=" hexagonGallery relative">

                        {projects.map(project => {
                            // console.log(project)
                            return (
                                project.fields.selected &&
                                <ProjectCard key={project.sys.id} project={project} className={'hexCard'} />)
                        })}
                    </div>
                <div className="projectButton text-secondary-100 p-2 mt-10 rounded-2xl duration-200 border-2 border-secondary-100 hover:scale-110 duration-200">
                    <Link href={'/projects'}>
                        <a>
                            view all projects
                        </a>
                    </Link>
                </div>

            </div>



            <style jsx>{`
              .bgWrap{
                    //width: 100%;
                    height: auto;
                    //min-height: 100%;
                    //background-image: url('../public/hex.svg') no-repeat cover/contain;
                    //background-size:contain;
                    //background-image: url("../img/logo0.svg"); 
              
              }
                .projectList{
                  height: auto;
                  max-height:100vh;
                  //margin-bottom:10vh;
                }
                .hexagonGallery {
                  //margin: auto;
                  margin-top: 50px;
                  max-width: 90vw;
                  display: flex;
                  flex-flow: row wrap;
                  gap: 1vw;
                  //display: grid;
                  //grid-template-columns: repeat(10, 1fr);
                  //grid-auto-rows: 16em;
                  //grid-gap:1em;
                  //padding-bottom: 50px;
                }
                    


                    
            
          `}</style>
            </div>



    )
}
