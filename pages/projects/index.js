import React from 'react'
import {createClient} from "contentful";
import ProjectCard from "../../components/ProjectCard";

export async function getStaticProps(){

    const client = createClient({
        space: process.env.CONTENTFUL_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY
    })

    const res = await client.getEntries({content_type:'projects'})

    return{
        props: {
            projects: res.items
        }
    }

}

export default function Projects({projects}) {
    console.log(projects)
    return (
        <div className="project-list">
            {projects.map(project => (
                // <h3>{project.fields.name}</h3>
                <ProjectCard key={project.sys.id} project={project} />
            ))}
            <style jsx>{`
        .project-list {
        display: flex;
        flex-flow: row wrap;
        gap: 50px;
        justify-content: center;
        //height: 30vh;
          //display: grid;
          //grid-template-columns: 1fr 1fr;
          //grid-gap: 400px 60px;
        }
      `}</style>
        </div>
    )
}