import {createClient} from "contentful";

export async function fetchMedia(content){

    console.log('fetchMedia', content)

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    })

    const res = await client.getEntries({content_type:content,order:'sys.createdAt'})

    return{
        props: {
            content: res.items,
        },
        revalidate: 10
    }

}

// function filterProjects()


// export function fetchPopularRepos (language) {
//     const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
//
//     return fetch(endpoint)
//         .then((res) => res.json())
//         .then((data) => {
//             if (!data.items) {
//                 throw new Error(data.message)
//             }
//
//             // console.log( data.items)
//             return data.items
//         })
// }
//
// function getErrorMsg (message, username) {
//     if (message === 'Not Found') {
//         return `${username} doesn't exist`
//     }
//
//     return message
// }
//
// function getProfile (username) {
//     return fetch(`https://api.github.com/users/${username}${params}`)
//         .then((res) => res.json())
//         .then((profile) => {
//             if (profile.message) {
//                 throw new Error(getErrorMsg(profile.message, username))
//             }
//
//             return profile
//         })
// }
//
// function getRepos (username) {
//     return fetch(`https://api.github.com/users/${username}/repos${params}&per_page=100`)
//         .then((res) => res.json())
//         .then((repos) => {
//             if (repos.message) {
//                 throw new Error(getErrorMsg(repos.message, username))
//             }
//
//             return repos
//         })
// }
//
// function getStarCount (repos) {
//     return repos.reduce((count, { stargazers_count }) => count + stargazers_count , 0)
// }
//
// function calculateScore (followers, repos) {
//     return (followers * 3) + getStarCount(repos)
// }
//
// function getUserData (player) {
//     return Promise.all([
//         getProfile(player),
//         getRepos(player)
//     ]).then(([ profile, repos ]) => ({
//         profile,
//         score: calculateScore(profile.followers, repos)
//     }))
// }
//
// function sortPlayers (players) {
//     return players.sort((a, b) => b.score - a.score)
// }
//
// export function battle (players) {
//     return Promise.all([
//         getUserData(players[0]),
//         getUserData(players[1])
//     ]).then((results) => sortPlayers(results))
// }

