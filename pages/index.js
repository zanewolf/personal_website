import styles from '../styles/Home.module.css'
import Link from "next/link";

Home.title='Zane Wolf | Home'

export default function Home() {
  return (
     <div >
         <h1 className={styles.title}>hi. i&apos;m zane.</h1>
         <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia non tellus id sagittis. Maecenas quis tempor justo. Mauris et ante augue. Integer interdum turpis vel nulla efficitur, vel euismod nisl condimentum. Morbi suscipit, augue in posuere congue, quam turpis semper ligula, quis condimentum lorem ante ut tellus. Praesent sed lacus justo. Suspendisse dignissim blandit felis, et feugiat elit dignissim vel. Proin sed ultrices ex. Integer vestibulum malesuada diam a egestas. </p>

         <Link href={'/ninjas'} ><a className={styles.btn}>See Ninja Listing</a></Link>
     </div>
  )
}
