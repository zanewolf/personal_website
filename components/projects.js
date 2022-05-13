import React from 'react'
import {createClient} from "contentful";
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import hexBackground from "../public/hex-bg-4.png";
import {Parallax} from "react-scroll-parallax";

import hexSVG from '../public/hex.svg'



export default function Projects({projects}) {
    console.log(projects)
    return (
        <div className="projectDiv">
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
                <div className="project-list">

                    {/*<ProjectCard/>*/}
                    {projects.map(project => (
                        // <h3>{project.fields.name}</h3>
                        <ProjectCard key={project.sys.id} project={project} />
                    ))}
                </div>

                <style jsx>{`
            .projectDiv{
              //background: white;
            }
            .project-list {
            display: flex;
            flex-flow: row wrap;
            gap: 50px;
            justify-content: center;
            padding-top: 60vh;
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
