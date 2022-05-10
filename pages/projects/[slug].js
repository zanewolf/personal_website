import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import Skeleton from "../../components/Skeleton";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: "projects"
    })

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

    const { featuredImage, name, tools, categories, description } = project.fields
    console.log(description)

    return (
        <div>
            <div className="banner">
                <Image
                    src={'https:' + featuredImage.fields.file.url}
                    alt={'featured-image-project-'+name}
                    width={featuredImage.fields.file.details.image.width}
                    height={featuredImage.fields.file.details.image.height}
                />
                <h2>{ name }</h2>
            </div>
            <div className="info">
                <h3>Categories:</h3>

                {categories.map(category => (
                    <span key={category}>{ category }</span>
                ))}
            </div>
            <div className="info">
                <h3>Tools:</h3>

                {tools.map(tool => (
                    <span key={tool}>{ tool }</span>
                ))}
            </div>

            <div className="method">
                <h3>Description:</h3>
                <div>{documentToReactComponents(description)}</div>
            </div>

            <style jsx>{`
        h2,h3 {
          text-transform: uppercase;
        }
        .banner h2 {
          margin: 0;
          background: #fff;
          display: inline-block;
          padding: 20px;
          position: relative;
          top: -60px;
          left: -10px;
          transform: rotateZ(-1deg);
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
        }
        .info p {
          margin: 0;
        }
        .info span::after {
          content: ", ";
        }
        .info span:last-child::after {
          content: ".";
        }
      `}</style>
        </div>
    )
}