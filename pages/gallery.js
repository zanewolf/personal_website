import React, {useState, useEffect} from 'react'
import {createClient} from "contentful";
import Image from "next/image";
import Lightbox from 'react-modal-image'

export async function getStaticProps(){

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    })

    const res = await client.getEntries({content_type:'mistakes'})

    return{
        props: {
            mistakes: res.items
        },
        revalidate: 10
    }

}

let photoObject=[]

function randomize(a,b){
    return Math.random()-0.5;
}

export default function Gallery({mistakes}) {


    // mistakes.sort(randomize)

    const [modalOpen, setModalOpen]= React.useState(false)
    const [focusImg, setFocusImg] = React.useState()
    // console.log(mistakes)
    const toggleModal = (img)=>{
        console.log('hi', img)
        setModalOpen(!modalOpen)
        setFocusImg(img)

    }


    return (
        <div className={'flex flex-col flex-nowrap justify-center relative mt-24'}>
            <div className=" text-3xl p-4 m-auto">gallery of <span className={'font-bold text-secondary-200'}>whoops</span></div>
            <div className=" text-lg p-12 m-auto font-light text-center flex">I feel like dataviz aspires to be an exact science, with everything in its place. But in the process of reaching that goal....things will very much be out of place. </div>
            <div className={'flex flex-row flex-wrap justify-center gap-2 m-20'}>
                {mistakes.map((mistake,i)=>{
                    return (
                        <div key={i}>
                            <div className={'group relative'} onClick={()=>{toggleModal( mistake)}}>
                                <div className={'group-hover:brightness-[30%] flex' }>
                                    <Image
                                        src={'https:' + mistake.fields.media.fields.file.url}
                                        layout={'raw'}
                                        alt={mistake.fields.name}
                                        // layout={'fill'}
                                        // objectFit= {'contain'}
                                        // sizes={'50vw'}
                                        width={mistake.fields.media.fields.file.details.image.width/2}
                                        height={'100%'}
                                    />
                                </div>
                                <div className={'invisible text-primary uppercase font-bold p-2 top-0 ml-2 absolute group-hover:visible'}>
                                    <p className={'text-2xl '}>{mistake.fields.project}</p>
                                    <p className={'text-lg '}>{mistake.fields.name}</p>
                                </div>
                            </div>
                        </div>
                    )})}
            </div>
            {
                modalOpen && (
                    <div className={'flex justify-center bg-black'} onClick={()=>{toggleModal(null)}}>
                        <Image
                            src={'https://' + focusImg.fields.media.fields.file.url}
                            layout={'raw'}
                            alt={'modal image'}
                            // layout={'fill'}
                            objectFit= {'cover'}
                            quality={100}
                            // sizes={'15vw'}
                            // width={focusImg.fields.media.fields.file.details.image.width}
                            // height={focusImg.fields.media.fields.file.details.image.height}
                        />
                    </div>

                )
            }
        </div>
        // </div>
    )
}
