import {createClient} from "contentful";

// export async function getStaticProps(){
//
//     const client = createClient({
//         space: process.env.CONTENTFUL_SPACE_ID,
//         accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
//     })
//
//     const res = await client.getEntries({content_type:'projects',order:'sys.createdAt'})
//
//     return{
//         props: {
//             projects: res.items
//         },
//         revalidate: 10
//     }
//
// }