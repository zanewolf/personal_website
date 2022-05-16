import React from 'react'
import {createClient} from "contentful";
import ProjectCard2 from "../../components/ProjectCard2";
import { HexGrid, Layout, Hexagon, GridGenerator, Text,HexUtils } from 'react-hexgrid';
import Image from "next/image";
import Link from "next/link";
let configs = {
    "hexagon": {
        "width": 1000,
            "height": 800,
            "layout": { "width": 8, "height": 8, "flat": false, "spacing": 1.02 },
        "origin": { "x": 0, "y": 0 },
        "map": "hexagon",
            "mapProps": [ 3 ]
    },
    "triangle": {
        "width": 1000,
            "height": 800,
            "layout": { "width": 9, "height": 9, "flat": false, "spacing": 1.05 },
        "origin": { "x": -45, "y": -35 },
        "map": "triangle",
            "mapProps": [ 5 ]
    },
    "parallelogram": {
        "width": 1000,
            "height": 800,
            "layout": { "width": 7, "height": 7, "flat": true, "spacing": 1.05 },
        "origin": { "x": 0, "y": 0 },
        "map": "parallelogram",
            "mapProps": [ -2, 2, -2, 2 ]
    },
    "rectangle": {
        "width": 1000,
            "height": 800,
            "layout": { "width": 6, "height": 6, "flat": false, "spacing": 1.02 },
        "origin": { "x": -45, "y": -40 },
        "map": "rectangle",
            "mapProps": [ 10, 10 ]
    },
    // "orientedRectangle": {
    //     "width": 1000,
    //         "height": 800,
    //         "layout": { "width": 6, "height": 6, "flat": false, "spacing": 1.1 },
    //     "origin": { "x": -45, "y": -15 },
    //     "map": "orientedRectangle",
    //         "mapProps": [ 7, 7 ]
    // },
    "beehive": {
        "width": 1000,
        "height": 800,
        "layout": { "width": 15, "height": 15, "flat": false, "spacing": 1.1},
        "origin": { "x": -45, "y": 0 },
        "map": "orientedRectangle",
        "mapProps": [ 7, 2]
    },
    "ring": {
        "width": 1000,
            "height": 800,
            "layout": { "width": 6, "height": 6, "flat": false, "spacing": 1.1 },
        "origin": { "x": 0, "y": 0 },
        "map": "ring",
            "mapProps": [ {"q":0,"r":0,"s":0}, 3 ]
    },
    "spiral": {
        "width": 1000,
            "height": 800,
            "layout": { "width": 6, "height": 6, "flat": false, "spacing": 1.1 },
        "origin": { "x": 0, "y": 0 },
        "map": "spiral",
            "mapProps": [ {"q":0,"r":0,"s":0}, 3 ]
    }
}
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

    // const hexagons = GridGenerator.parallelogram(2, -2, 2, -2);
    // console.log(projects)
    const config = configs['beehive'];
    const generator = GridGenerator.getGenerator(config.map);
    // config.mapProps = projects.length()
    const hexagons = generator.apply(null, config.mapProps);
    console.log(hexagons)
    const layout = config.layout;
    const size = { x: layout.width, y: layout.height };
    return (
        <div className="project-list">
            <HexGrid width={config.width} height={config.height}>
                <Layout size={size} flat={layout.flat} spacing={layout.spacing} origin={config.origin}>
                    {
                        // note: key must be unique between re-renders.
                        // using config.mapProps+i makes a new key when the goal template chnages.
                        projects.map((project, i) => (
                            <Hexagon key={config.mapProps + i} q={hexagons[i].q} r={hexagons[i].r} s={hexagons[i].s} fill={"none"}>
                                <Link href={"/projects/"+project.fields.slug}>
                                    <a className="hexlink" >
                                        {/*<div className="hexcover"></div>*/}
                                        <Image
                                            src={'https:' + project.fields.thumbnail.fields.file.url}
                                            // layout={'fixed'}
                                            alt={'project-image-'+project.fields.name}
                                            layout={'fill'}
                                            objectFit= {'cover'}
                                            // // sizes={'15vw'}
                                            // width={thumbnail.fields.file.details.image.width}
                                            // height={thumbnail.fields.file.details.image.height*2}
                                        />
                                        {/*<h3>{name}</h3>*/}
                                        {/*<div className="plus"></div>*/}
                                    </a>
                                </Link>
                            </Hexagon>
                        ))
                    }
                </Layout>
            </HexGrid>
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
