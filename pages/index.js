import Projects from "../components/projects";
import {createClient} from "contentful";
import Image from "next/image";
import hexBackground from '../public/hex_background_3.png'
import {Parallax} from "react-scroll-parallax";
import Link from "next/link";

Home.title=' Zane Wolf | Home'

export async function getStaticProps(){

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    })

    const res = await client.getEntries({content_type:'projects'})

    return{
        props: {
            projects: res.items
        },
        revalidate: 10
    }

}

export default function Home({projects}) {
    // projects= Set{...projects}

    console.log(projects)

  const keywords = [
      {keyword: 'rock climber', color: 'text-primary'},
      {keyword: 'data designer', color: 'text-secondary-200'},
      {keyword: 'web developer', color: 'text-secondary-300'},
      {keyword: 'wildlife photographer', color: 'text-secondary-400'}
  ]


  return (
      <div>
          {/*<section>*/}
              <Parallax speed={-20} className={'flex flex-col items-center justify-center overflow-x-hidden pt-40 md:pt-80 md:mb-32'}>
                  <div className="greeting mb-5">
                      <h1 className={"text-4xl"}>hi. i'm zane and i'm a </h1>
                  </div>
                  <div className="title-content__container inline-flex overflow-hidden font-semibold text-3xl items-center mt-1">
                      {/*<p className="title-content__container__text  inline-flex">I'm a</p>*/}
                      <span className="blinker text-xl md:text-4xl">[</span>
                      <ul className="title-content__container__list text-center list-none">
                          {keywords.map((keyword,i)=>{
                              // console.log(keyword)
                              return <li className={`title-content__container__list__item m-1 text-2xl md:text-3xl ${keyword.color}`} key={i}>{keyword.keyword}</li>
                          })}
                      </ul>
                      <span className="blinker">]</span>
                  </div>
              </Parallax>
              <Parallax speed={-2} className={'hidden md:block'} >
                  <div className={'myHex1'}>
                      {/*<svg height={'300'} width={'300'}>*/}
                      {/*    <polygon points={"150 0, 300 80, 300 220, 150 300, 0 220, 0 80"}*/}
                      {/*             stroke={'white'}*/}
                      {/*             fill={'white'}*/}
                      {/*    />*/}
                      {/*</svg>*/}
                      <svg width="174" height="200"
                           viewBox="0 0 173.20508075688772 200"
                           style={{filter: 'drop-shadow(rgba(0, 0, 0, 0.5) 0px 0px 10px)'}}
                      >
                          <Link href={"https://www.youtube.com/watch?v=thOifuHs6eY"} passHref>
                                <a target={"_blank"} rel={"noreferrer noopener"}>
                              <path fill="#fff"
                                    d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z">

                              </path>
                                </a>
                          </Link>
                      </svg>


                  </div>
              </Parallax>


              <Parallax speed={30} className={'hidden md:block'}>
                  <div className={'myHex2'}>
                      <svg width="35" height="40"
                           // viewBox="0 0 34.64101615137754 40"
                           // style={{filter: 'drop-shadow(rgba(0, 0, 0, 0.5) 0px 0px 10px)'}}>
                          ><path fill="#fff"
                                d="M17.32050807568877 0L34.64101615137754 10L34.64101615137754 30L17.32050807568877 40L0 30L0 10Z"></path>
                      </svg>
                      {/*<svg height={'100'} width={'100'}>*/}
                      {/*    <polygon points={"50 3, 100 28, 100 75, 50 100, 3 75, 3 25"}*/}
                      {/*             stroke={'white'}*/}
                      {/*             fill={'white'}*/}
                      {/*    />*/}
                      {/*</svg>*/}
                  </div>
              </Parallax>
          {/*</section>*/}
          {/*<div className={'floatingHexes pl-96 '}>*/}

          {/*    <Parallax speed={20}>*/}
          {/*        <div className={'ml-20 pl-40 relative'}>*/}
          {/*            <svg x={'200'} y={'-100'} height={'400'} width={'200'}>*/}
          {/*                <polygon points={"50 3,100, 28,100 75, 50,100, 3 75,3 25"}*/}
          {/*                         stroke={'white'}*/}
          {/*                         fill={'white'}*/}
          {/*                />*/}
          {/*            </svg>*/}
          {/*        </div>*/}
          {/*    </Parallax>*/}
          {/*</div>*/}
          <Parallax speed={4} easing={'easeInQuad'}>

            <section className={'projectDiv pt-10'}>
                {/*<div className="hexed mt-20">*/}
                    <Projects projects={projects}/>
                {/*</div>*/}
            </section>
          </Parallax>
          {/*<Parallax speed={60}>*/}
          {/*    <section className="contactSection">*/}
          {/*        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia non tellus id sagittis. Maecenas quis tempor justo. Mauris et ante augue. Integer interdum turpis vel nulla efficitur, vel euismod nisl condimentum. Morbi suscipit, augue in posuere congue, quam turpis semper ligula, quis condimentum lorem ante ut tellus. Praesent sed lacus justo. Suspendisse dignissim blandit felis, et feugiat elit dignissim vel. Proin sed ultrices ex. Integer vestibulum malesuada diam a egestas. </p>*/}
          {/*    </section>*/}
          {/*</Parallax>*/}

      </div>

  )
}
