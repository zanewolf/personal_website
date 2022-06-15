import Link from 'next/link'
import Image from 'next/image'

const categorieColors={
    'All':'primary',
    'Data Visualization':'secondary-200',
    'Web Design':'secondary-300',
    'Science':'secondary-400'
}

export default function ProjectCard2({ project}) {
    const { name, slug, thumbnail,tools } = project.fields
    // console.log(categorieColors[project.fields.categories])
    // let mycolor = categorieColors[project.fields.categories]
    // console.log(tools)
    // const toolList = project.fields.tools ? tools.map((tool)=>{
    //     return (<li>{tool}</li>)
    // })

    // console.log('hi')
    return (
        <div className={`card w-[80vw] min-h-[55vh] h-auto md:w-[40vw] md:h-[35vh] lg:w-[35vw] lg:h-[40vh] xl:w-[23vw] xl:h-[40vh] 2xl:w-[18vw] 2xl:h-[40vh] `}>

                <Link href={'/projects/' + slug}>
                    <a>
                        <div className={`featured w-[100%] h-[65%] relative`}>
                            <Image
                                src={'https:' + thumbnail.fields.file.url}
                                layout={'fill'}
                                alt={'project-image-'+name}
                                blurDataURL={`https://${thumbnail.fields.file.url}?q=${10}`}
                                placeholder="blur"
                                objectFit={'cover'}
                                // sizes={'100%'}
                                // width={'100%'}
                                // height={'100%'}
                            />
                        </div>
                        <div className="card-content relative h-[35%]">
                            <div className="info p-2">
                                <div className={'text-lg lg:text-2xl font-bold uppercase border-b-2 border-black w-auto'}>{ name }</div>
                                <div className={'text-md lg:text-xl font-normal'}>{project.fields.categories}</div>
                                {/*<h2>{project.fields.tools}</h2>*/}
                               <div className={'pt-1 absolute bottom-1 gap-y-1 flex flex-row flex-wrap flex-grow-1'}>
                                   {tools?.map((tool,i)=> <p key={i} className={`rounded-full text-md bg-gray-700 text-${categorieColors[project.fields.categories]} pl-2 pr-2 mr-2`}>{tool}</p>)}
                                </div>


                                {/*<p>Takes approx { cookingTime } mins to make</p>*/}
                            </div>
                        </div>

                    </a>
                </Link>

            <style jsx>{`
              .card {
                //transform: rotateZ(-1deg);
                //position: relative;
                color: #000;
                //-webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

              }

              .card-content {
                background: #fff;
                box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);

              }

              .info h4 {
                margin: 4px 0;
                text-transform: uppercase;
              }
            `}</style>

        </div>
    )
}