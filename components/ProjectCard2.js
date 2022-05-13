import Link from 'next/link'
import Image from 'next/image'

export default function ProjectCard2({ project }) {
    const { name, slug, thumbnail } = project.fields

    return (
        <div className="card overflow-hidden shadow-lg hover:border-white hover:border-8 transition ease-out duration:500">
            <div className="featured object-cover">
                <Image
                    src={'https:' + thumbnail.fields.file.url}
                    // layout={'fixed'}
                    alt={'project-image-'+name}
                    width={'300'}
                    height={'200'}
                />
            </div>
            <div className="card-content">
                <div className="info">
                    <h4>{ name }</h4>
                    {/*<p>Takes approx { cookingTime } mins to make</p>*/}
                </div>
                <div className="actions">
                    <Link href={'/projects/' + slug}><a>View This</a></Link>
                </div>
            </div>
            <style jsx>{`
        .card {
          //transform: rotateZ(-1deg);
          width: 300px;
          height: auto;
          color: #000;
          //-webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

        }
        .card-content {
          background: #fff;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          padding-bottom: 10px;
          //height: auto;
          //position: relative;
          //top: -40px;
          //left: -10px;
        }
        .info {
          padding: 16px;
        }
        .info h4 {
          margin: 4px 0;
          text-transform: uppercase;
        }
        .info p {
          margin: 0;
          color: #777;
        }
        .actions {
          margin-top: 20px;
          display: flex;
          justify-content: center;
        }
        .actions a {
          color: #fff;
          background: #f01b29;
          padding: 16px 24px;
          text-decoration: none;
        }
      `}</style>

        </div>
    )
}