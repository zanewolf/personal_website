import SelectProjects from "../components/selectProjects";
import {createClient} from "contentful";
import {Parallax} from "react-scroll-parallax";
import Link from "next/link";
import React from "react";
import {fetchMedia} from "../utils/ContentfulAPI";
import Router from 'next/router'



Home.title=' Zane Wolf | Home'



export async function getStaticProps(){


    let content = fetchMedia('projects')
        .then((projectsFetched)=> projectsFetched)
        .catch((error)=> console.log(error))

    return content

}


export default function Home({content}) {

  const keywords = [
      {keyword: 'photographer', color: 'text-primary',link:'/photography', query:''},
      {keyword: 'data designer', color: 'text-secondary-200',link:'/projects', query:'data visualization'},
      {keyword: 'scientist', color: 'text-secondary-300',link:'/projects', query:'science'},
      {keyword: 'website developer', color: 'text-secondary-400',link:'/projects', query:'web design'}
  ]


  const copy =  () => {
      navigator.clipboard.writeText('rzanewolf@gmail.com');
      alert('Email address copied');
  }



  return (
      <div className={''}>
          <section className={'landingPage'}>
              <Parallax speed={-20} className={'title-content flex flex-col items-center justify-center overflow-x-hidden pt-40 md:pt-80 md:mb-32'}>
                  <div className="greeting mb-5 flex-wrap">
                      <h1 className={"text-4xl text-shadow-lg"}>hi. i'm zane and i'm a </h1>
                  </div>
                  <div className="title-content__container inline-flex overflow-hidden font-semibold text-3xl items-center mt-1">
                      {/*<p className="title-content__container__text  inline-flex">I'm a</p>*/}
                      <span className="blinker text-3xl md:text-4xl text-shadow">[</span>
                      <ul className="title-content__container__list text-center list-none">
                          {keywords.map((keyword,i)=>{
                              // console.log(keyword)
                              return <li className={`title-content__container__list__item m-2 text-2xl md:text-3xl text-shadow ${keyword.color}`} key={i}>
                                  <Link href={{ pathname: keyword.link, query: { cat: keyword.query }}} as={keyword.link} >
                                      <a>
                                          {keyword.keyword}
                                      </a>
                                  </Link>

                              </li>
                          })}
                      </ul>
                      <span className="blinker text-3xl md:text-4xl text-shadow">]</span>
                  </div>
              </Parallax>
              <Parallax speed={-10} className={'hidden md:block'} >
                  <div className={'myHex1'}>
                      <svg width="174" height="200"
                           viewBox="0 0 173.20508075688772 200"
                           style={{filter: 'drop-shadow(rgba(0, 0, 0,1) 0px 0px 20px)'}}
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
              <Parallax speed={30} className={''}>
                  <div className={'myHex2'}>
                      <svg width="35" height="40"
                           style={{filter: 'drop-shadow(rgba(0, 0, 0, 0.8) 0px 0px 10px)'}}
                      ><Link href={"/gallery"}>
                          <a>
                             <path fill="#fff"
                                  d="M17.32050807568877 0L34.64101615137754 10L34.64101615137754 30L17.32050807568877 40L0 30L0 10Z"></path>
                          </a>
                      </Link>

                      </svg>
                  </div>
              </Parallax>

          </section>
          <section className={''}>
                  {/*<div >*/}

                      {/*<div className="hexed mt-20">*/}


                      <SelectProjects projects={content.filter(d=>d.fields.selected).slice(0,5)}/>
                      {/*</div>*/}
                  {/*</div>*/}

          </section>
          <div className="visible md:hidden spacer h-32"></div>

      </div>

  )
}
