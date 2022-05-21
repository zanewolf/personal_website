import React from 'react'
import {createClient} from "contentful";
import ProjectCard2 from "../../components/ProjectCard2";
import { HexGrid, Layout, Hexagon, GridGenerator, Text,HexUtils } from 'react-hexgrid';
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps(){

    const client2 = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    })

    const res2 = await client2.getEntries({content_type:'projects'})

    return{
        props: {
            projects: res2.items
        },
        revalidate: 10
    }

}

export default function ProjectPage({projects}) {


    return (
        <div className="projectPage">


            {/*<HexGrid width={1200} height={1000}>*/}
            {/*    <Layout size={{ x: 7, y: 7 }}>*/}
            {/*        { hexagons.map((hex, i) => <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />) }*/}
            {/*    </Layout>*/}
            {/*</HexGrid>*/}
            {/*{projects.map(project => (*/}
            {/*    // <h3>{project.fields.name}</h3>*/}
            {/*    <ProjectCard2 key={project.sys.id} project={project} />*/}
            {/*))}*/}
            <style jsx>{`
        .project-list {
        display: flex;
        flex-flow: row wrap;
        gap: 50px;
        justify-content: center;
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
