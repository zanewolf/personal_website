// import styles from '../styles/Home.module.css'
import Link from "next/link";
import Image from "next/image";

Home.title=' Visual Inzanity | Home'

export default function Home() {
  return (
     <div className={"m-12"}>
         <h1 className={"text-3xl font-bold"}>hi. i'm zane wolf.</h1>
         {/*<Image*/}
         {/*    src={'/Arcadia_Shots-5.jpg'} width={400} height={600} alt={"profile shot"}*/}
         {/*/>*/}
         <p className={"text-sm"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia non tellus id sagittis. Maecenas quis tempor justo. Mauris et ante augue. Integer interdum turpis vel nulla efficitur, vel euismod nisl condimentum. Morbi suscipit, augue in posuere congue, quam turpis semper ligula, quis condimentum lorem ante ut tellus. Praesent sed lacus justo. Suspendisse dignissim blandit felis, et feugiat elit dignissim vel. Proin sed ultrices ex. Integer vestibulum malesuada diam a egestas. </p>

         {/*<Link href={'/ninjas'} ><a className={styles.btn}>See Ninja Listing</a></Link>*/}
     </div>
  )
}
