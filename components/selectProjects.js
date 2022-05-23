import React from 'react'
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import hexSVG from '../public/hex2.svg'
import Link from "next/link";

export default function SelectProjects({projects}) {

    // console.log(projects)

    return (
        <div className="projectDiv flex flex-col flex-nowrap relative justify-center">
            <div className={'imageContainer min-h-[130vh] md:min-h-[120vh]'}>
                <Image
                    className={'image'}
                    src={hexSVG}
                    alt={'hexagonal background white'}
                    layout={'fill'}
                    objectFit={'cover'}
                    objectPosition={'top'}
                    // width={'100vw'}

                />
            </div>
            <div className="projectList inset-0 flex flex-col flex-nowrap items-center top-[18%] md:top-[25%] lg:top-[40%] absolute h-auto">
                <div className="relative">
                    <div className={'selectProjectHeader flex justify-center mb-8 text-3xl md:text-4xl text-secondary-100 '}>
                        <span className="font-light pr-2">selected </span>
                        <span className="font-bold">projects</span>
                    </div>


                    <div className=" hexagonGallery mt-2 md:mt-24 flex flex-row flex-wrap  justify-center gap-4">

                        {projects.map(project =>
                            <ProjectCard key={project.sys.id} project={project} className={'hexCard'} />
                        )}
                    </div>
                    <div className="projectButton flex justify-center m-auto max-w-[50vw] md:max-w-[20vw] w-auto text-secondary-100 p-2 mt-8 md:mt-12 lg:mt-24 rounded-2xl duration-200 border-2 border-secondary-100 hover:scale-110 duration-200">
                        <Link href={'/projects'}>
                            <a>
                                view all projects
                            </a>
                        </Link>
                    </div>
                </div>

            </div>



            <style jsx>{`   
              .imageContainer{
                width: 100%;
                height: 100%;
                //margin-bottom:10vh;
                //min-height: 120vh;
                position: relative;
              }  
              
              .projectList{
                height: auto;
                //margin-bottom: 15vh; 
              }
                
          `}</style>
            </div>



    )
}
