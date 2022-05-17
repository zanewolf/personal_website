import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Hexagon from 'react-hexagon'

export default function ProjectCard({ project }) {
    const {name, slug, thumbnail} = project.fields

    return (
        <div className={'hex2 w-[42vw] h-[45vw] md:w-[17vw] md:h-[19vw] flex justify-center relative hover:brightness-50'}>

            {/*<div className="projectName text-xl flex items-center text-primary lowercase h-4 m-auto group-hover:z-20">{name}</div>*/}
            <div >
                <Link href={"/projects/"+slug} >
                    <a>

                        <span className={''}>{name}</span>
                        <Image
                            src={'https:' + thumbnail.fields.file.url}
                            // layout={'fixed'}
                            alt={'project-image-'+name}
                            layout={'fill'}
                            objectFit= {'cover'}
                            // width={400}
                            // height={300}
                        />
                    </a>
                </Link>
            </div>



            <style jsx>{`
                .hex2 {
                  //display: flex;
                  //position: relative;
                  //width: 17vw;
                  //height: 19vw;
                  //background-color: #424242;
                  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                }
        
            `}</style>
        </div>
    )
}
