Home.title=' Zane Wolf | Home'



export default function Home() {

  const keywords = [
      {keyword: 'rock climber', color: 'text-primary'},
      {keyword: 'data designer', color: 'text-secondary-200'},
      {keyword: 'web developer', color: 'text-secondary-300'},
      {keyword: 'wildlife photographer', color: 'text-secondary-400'}
  ]


  return (
     <div className={'flex flex-col items-center justify-center mt-20 mb-20'}>
         <div className="greeting mb-5">
             <h1 className={"text-3xl"}>hi. i'm zane and i'm a </h1>
         </div>
         <div className="title-content__container inline-flex overflow-hidden font-semibold text-3xl items-center mt-1">
             {/*<p className="title-content__container__text  inline-flex">I'm a</p>*/}
             <span className="blinker">[</span>
             <ul className="title-content__container__list text-center list-none">
                 {keywords.map((keyword,i)=>{
                     console.log(keyword)
                     return <li className={`title-content__container__list__item mt-1 ${keyword.color}`} key={i}>{keyword.keyword}</li>
                 })}
             </ul>
             <span className="blinker">]</span>
         </div>
     </div>
  )
}
