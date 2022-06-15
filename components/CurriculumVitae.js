import React from 'react'
// import {cvData} from '../data/cvData'
import BlogBody from "./BlogBody";
import Link from 'next/link'

function CvHeader({header}) {
    return (
        <>
            <div className={'text-2xl flex justify-left uppercase font-bold mt-12 mb-4 border-b-2 border-white'}>
                {header}
            </div>
            <div></div>
            {/*<span className={'w-full underline'}></span>*/}
        </>


    )
}

function CvList({startDate, endDate, name, employer,location}) {
    return (
        <div className={'text-xl flex lg:flex-row lg:flex-nowrap gap-8 p-1'}>
            <div className="timePeriod min-w-[9vw] max-w-[11vw] w-auto flex justify-end">{startDate} - {endDate}</div>
            {location ? <div className={'info w-auto max-w-[65vw]'}><b className={'text-secondary-500 font-bold'}>{name}</b> | {employer} | <span className={'font-extralight'}>{location}</span>
            </div> : <div className={'info w-auto max-w-[650vw]'}><b className={'text-secondary-500 font-bold '}>{name}</b> | {employer}
            </div>}
        </div>
    )
}

function CvPublication({publication}) {

}

function sortItems(data) {
    return data.sort((a, b) => (a.fields.endDate != 'present' || b.fields.endDate != 'present' ? ((a.fields.endDate < b.fields.endDate) ? 1 : -1) : (a.fields.endDate === 'present' ? 1 : -1)))
}

export default function CurriculumVitae({cvData}) {
    cvData.forEach((d, i) => console.log(d.fields))
    let education = sortItems(cvData.filter(d => d.fields.type == 'education'))
    let work = sortItems(cvData.filter(d => d.fields.type == 'work'))
    let research = sortItems(cvData.filter(d => d.fields.type == 'research'))
    let pubs = sortItems(cvData.filter(d => d.fields.type == 'publication'))
    // let
    // console.log(education)

    return (
        <div className={'w-[70vw] pt-24'}>
            <CvHeader header={'Education'}/>
            <div className="flex flex-column flex-wrap gap-2">
                {education.map((d, i) => {
                    // console.log(d)
                    return <CvList key={i} startDate={d.fields.startDate} endDate={d.fields.endDate}
                                   name={d.fields.name} employer={d.fields.employer}/>
                })}
            </div>
            <CvHeader header={'Research'}/>
            <div className="flex flex-column flex-wrap gap-2">
                {research.map((d, i) => {
                    // console.log(d)
                    return <CvList key={i} startDate={d.fields.startDate} endDate={d.fields.endDate}
                                   name={d.fields.name} employer={d.fields.employer} location={d.fields.location}/>
                })}
            </div>
            <CvHeader header={'Selected Work Experience'}/>
            <div className="">
                {work.map((d, i) => {
                    // console.log(d)
                    return <CvList key={i} startDate={d.fields.startDate} endDate={d.fields.endDate}
                                   name={d.fields.name} employer={d.fields.employer} location={d.fields.location}/>
                })}
            </div>
            <CvHeader header={'Publications'}/>
            <div className="">
                {pubs.map((d, i) => {
                    console.log(d)
                    return <>
                        <BlogBody content={d.fields.description} accentColor={'text-secondary-500'}/>
                    </>
                })}
            </div>
            <div className="googleScholar flex justify-center m-auto ">
                <Link href={"https://scholar.google.com/citations?user=y16qFdcAAAAJ&hl=en"} passHref>
                    <a target={"blank"} referrerPolicy={"no-referrer"}
                       className={'hover:scale-105 text-2xl underline underline-offset-1 text-secondary-500 '}>
                        Google Scholar Profile
                    </a>

                </Link>
            </div>
            <CvHeader header={'Conferences & Invited Talks'}/>
            <CvHeader header={'Workshops'}/>

        </div>
    )
}
