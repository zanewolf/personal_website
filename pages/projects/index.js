import React from 'react'
import ProjectCard2 from "../../components/ProjectCard2";
import {fetchMedia} from "../../utils/ContentfulAPI";
import querySearch from "stringquery";



export async function getStaticProps(){

    let content = fetchMedia('projects')
        .then((projectsFetched)=> projectsFetched)
        .catch((error)=> console.log(error))

    return content
}

function ProjectsNav({selected, onUpdateCategory}){
    //reads in the current state of the selectedLanguage prop and the function to change the state
    // this function renders the menu of languages, which were hardcoded to the ones below
    const categorieColors = {
        'All' : 'text-primary',
        'Data Visualization' : 'text-secondary-200',
        'Website Design' : 'text-secondary-300',
        'Science':'text-secondary-400'
    }

    const categories=['All','Data Visualization', 'Website Design','Science']



    return(
        <ul className='w-5/6 xl:w-1/2 flex flex-row flex-nowrap justify-around m-auto'>
            {/*iterating through the list of languages, creating a li item for each*/}
            {categories.map((category)=>(
                //give each language item it's own key, using lang name rather than number, because if the languages change, the numbers will too and there won't be any matching consistency
                <li key={category}>
                    <button
                        className={`btn-clear nav-link lowercase ${category == selected ? categorieColors[category] : 'text-primary'} ${category != selected ? 'opacity-50' : null} hover:scale-105 hover:opacity-100`}
                        onClick = {()=> onUpdateCategory(category)}>
                        {category}
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default function ProjectPage({content}) {

    const [selectedCategory, setSelectedCategory] = React.useState('All')
    const [displayContent,setDisplayContent] = React.useState(content)

    React.useEffect(()=>{
        if (selectedCategory=='All'){
            setDisplayContent(content)
        } else{
            setDisplayContent(content.filter(project=>project.fields.categories==selectedCategory))
        }

    },[selectedCategory])

    console.log(displayContent)


    return (
        <div className="projectPage">
            <div className="text-3xl flex justify-center m-auto mt-16">Projects</div>
            <div className="text-2xl m-16 ">
                <ProjectsNav
                    selected = {selectedCategory}
                    onUpdateCategory ={(category)=>setSelectedCategory(category)}
                />
            </div>
            <div className="projectCards flex flex-wrap gap-8 mb-28 p-6 mt-16 justify-center">
                {displayContent.map(project =>
                    <ProjectCard2 key={project.sys.id} project={project} />
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
