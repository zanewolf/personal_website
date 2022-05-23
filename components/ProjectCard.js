import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Hexagon from 'react-hexagon'

export default function ProjectCard({ project }) {
    const {name, slug, thumbnail} = project.fields

    return (
        <div className={'hex w-[42vw] h-[45vw] md:w-[25vw] md:h-[27vw] lg:w-[17vw] lg:h-[19vw] flex justify-center relative group'}>

            {/*<div className={'group-hover:brightness-50 w-full -z-1'}>*/}
                <Link href={"/projects/"+slug} >
                    <a>

                        <Image
                            src={'https:' + thumbnail.fields.file.url}
                            className={'group-hover:brightness-50 -z-5'}
                            alt={'project-image-'+name}
                            layout={'fill'}
                            objectFit= {'cover'}
                            // quality={100}
                            // width={400}
                            // height={300}
                        />
                        <div className={'flex flex-col flex-nowrap justify-center h-full items-center group-hover:relative'}>
                            <div className={'text-2xl flex text-center justify-center ml-auto mr-auto border-b-2 lowercase'}>{name}</div>
                            <hr/>
                            <div className={''}>
                                {project.fields.categories}
                            </div>
                        </div>
                    </a>
                </Link>


                {/*<div className={'flex flex-col flex-nowrap items-center justify-center h-auto m-auto text-xl font-light lowercase group-hover:z-10'}>*/}
                {/*    <div>{name}</div>*/}
                {/*    <hr/>*/}
                {/*    <div className={'flex justify-center items-center m-auto'}>*/}
                {/*        {project.fields.categories}*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="projectName text-xl flex justify-center items-center text-primary m-auto  group-hover:z-50">{name}</div>*/}

            {/*</div>*/}



            <style jsx>{`
                .hex {
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
