import { createClient } from 'contentful'
import Image from 'next/image'
import Skeleton from "../../components/Skeleton";
import {Parallax} from "react-scroll-parallax";
import BlogBody from "../../components/BlogBody";
import Link from 'next/link'

const categorieColors={
    'All':'primary',
    'Data Visualization':'secondary-200',
    'Website Design':'secondary-300',
    'Science':'secondary-400'
}

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: "projects"
    })

    console.log(res)

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async ({ params }) => {
    const { items } = await client.getEntries({
        content_type: 'projects',
        'fields.slug': params.slug
    })

    if (!items.length){
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: { project: items[0] },
        revalidate: 10
    }

}



export default function ProjectDetails({ project }) {

    if (!project) return <Skeleton/>



    const { featuredImage, name, tools, categories,link, linkName, description } = project.fields
    const accentColor = categorieColors[project.fields.categories]
    console.log(link)

    return (
        <div className={'w-[100vw] flex flex-col flex-nowrap m-auto '}>
            <Parallax speed={10} className={'banner relative block w-full flex flex-col flex-nowrap justify-center mt-12 lg:m-auto'}>
                <div className="bannerImage m-auto flex w-full min-h-[50vh] lg:min-h-[75vh] h-auto relative">
                    <Image
                        src={'https:' + featuredImage.fields.file.url}
                        alt={'featured-image-project-'+name}
                        layout={'fill'}
                        quality={100}
                        objectFit={'cover'}
                        objectPosition={'top'}
                        // width={featuredImage.fields.file.details.image.width}
                        // height={featuredImage.fields.file.details.image.height}
                    />
                    <div className={'absolute h-full w-full bg-gradient-to-t from-black/90'}></div>
                    <Parallax speed={60} className={'absolute text-8xl w-full h-full flex justify-center place-items-end m-auto'}>{name}</Parallax>
                </div>
                <div className="headerInfo h-[15vh] md:h-[12vh] w-full text-black bg-white m-auto  ">
                    <div className="info h-full ml-6 md:ml-12 md:mr-12 lg:ml-28 mr-4 lg:mr-28 flex flex-row items-center justify-center mt-auto mb-auto">
                        <div className={'projectLink w-1/4 md:w-1/5 flex flex-col items-center justify-center m-auto gap-4'}>
                            <div className={'category text-sm md:text-3xl border-b-2 border-black uppercase'}>Link</div>

                            {link && linkName && <Link href={link} passHref>
                                <a target={"blank"} referrerPolicy={"no-referrer"} className={`text-xs lg:text-lg pr-2 pl-2 flex justify-center text-center m-auto rounded-full w-auto text-md bg-gray-700 text-${accentColor}`}>
                                    {linkName}
                                </a>
                            </Link>
                            }
                        </div>
                        <div className={'verticalBar w-2 border-r-4 h-[70%] border-black'}></div>
                        <div className="projectName text-2xl md:text-4xl lg:text-5xl font-bold w-1/3 lg:w-1/2 flex flex-col justify-center text-center items-center m-auto lowercase">
                            {name}
                        </div>
                        <div className={'verticalBar w-2 border-r-4 h-[70%] border-black'}></div>
                        <div className={'h-8 pt-0 md:pt-1  w-1/4 md:w-1/5 flex flex-col flex-nowrap justify-center items-center m-auto gap-4'}>
                            <div className={'tools text-sm md:text-3xl border-b-2 border-black uppercase'}>Tools</div>
                            <div className={'flex flex-col md:flex-row justify-center gap-1 md:gap-4 text-md lg:text-lg'}>
                                {tools?.map((tool,i)=> <p key={i} className={`rounded-full w-auto flex justify-center text-xs md:text-md lg:text-lg bg-gray-700 text-${accentColor} pl-2 pr-2 mr-2`}>{tool}</p>)}
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>

            <div className="method w-[90vw] md:w-[85vw] lg:w-[75vw] xl:w-[50vw] h-auto flex justify-center m-auto z-2 mb-16 flex flex-col flex-nowrap justify-center items-center m-auto">
                <BlogBody content={description} accentColor={accentColor}/>
            </div>

            <style jsx>{`
              .bannerImage{
                //background-image:linear-gradient(0deg, #00000088 30%, #ffffff44 100%);
              }
            .headerInfo {
                -webkit-clip-path: polygon(5% 5%, 95% 5%, 99% 50%, 95% 95%, 5% 95%, 1% 50%);
                clip-path: polygon(5% 5%, 95% 5%, 99% 50%, 95% 95%, 5% 95%, 1% 50%);
            }
      `}</style>
        </div>
    )
}