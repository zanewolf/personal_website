import React from 'react'
import ProjectCard2 from "../../components/ProjectCard2";
import {fetchMedia} from "../../utils/ContentfulAPI";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const categories = [{
    name: 'All',
    color: 'text-primary',
    colorValue:'#fff',
    value: '10'
}, {
    name: 'Data Visualization',
    color: 'text-secondary-200',
    colorValue:'#07f8ff',
    value: '10'
}, {
    name: 'Web Design',
    color: 'text-secondary-300',
    colorValue: '#b95dfa',
    value: '10'
}, {
    name: 'Science',
    color: 'text-secondary-400',
    colorValue: '#52ff00',
    value: '10'
}]


export async function getStaticProps() {

    let content = fetchMedia('projects')
        .then((projectsFetched) => projectsFetched)
        .catch((error) => console.log(error))

    return content
}

export default function ProjectPage({content}) {

    const [selectedCategory, setSelectedCategory] = React.useState(categories[0].name)
    const [displayContent, setDisplayContent] = React.useState(content)

    React.useEffect(() => {
        if (selectedCategory == 'All') {
            setDisplayContent(content)
        } else {
            setDisplayContent(content.filter(project => project.fields.categories == selectedCategory))
        }

    }, [selectedCategory])

    const handleSelect = (event) => {
        // console.log(event)
        setSelectedCategory(event.target.value)
    }

    // console.log(categories.filter(cat => cat.name === selectedCategory)[0].color)


    return (
        <div className="projectPage">
            <div className="text-3xl lg:text-4xl  flex flex-row justify-center items-center m-auto mt-16 lowercase">
                <div className={'projectForm pr-4 pt-2'}>
                    {/*<div>*/}
                    <FormControl sx={{m: 1, minWidth: 80}} className={` border-0 m-0 !${categories.filter(cat => cat.name === selectedCategory)[0].color}`}>
                        {/*<InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>*/}
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={selectedCategory}
                            onChange={handleSelect}
                            autoWidth
                            // label="Project"
                            className={`!${categories.filter(cat => cat.name === selectedCategory)[0].color} !text-3xl lg:!text-4xl !font-bold hover:scale-105 `}
                            // styles={{color: ``}}
                        >
                            {categories.map((cat, i) => {
                                // console.log(cat)
                                return <MenuItem key={i} value={cat.name}
                                                 className={`border-bottom-2 border-white `}>{cat.name}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                    {/*</div>*/}
                </div>
                <span className={'font-extralight'}>projects</span>
            </div>
            <div className="mt-8 md:m-16 ">
                {/*<ProjectsNav*/}
                {/*    selected = {selectedCategory}*/}
                {/*    onUpdateCategory ={(category)=>setSelectedCategory(category)}*/}
                {/*/>*/}

            </div>
            <div className="projectCards flex flex-wrap gap-4 mb-16 mt-16 justify-center">
                {displayContent.map(project =>
                    <ProjectCard2 key={project.sys.id} project={project}/>
                )}
            </div>


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
                //gap: 50px;
                justify-content: center;
                //background-color: white;
                //height: 30vh;
                //display: grid;
                //grid-template-columns: 1fr 1fr;
                //grid-gap: 400px 60px;
              }

              .projectCards {
                min-height: 50vh
              }
            `}</style>
        </div>
    )
}
