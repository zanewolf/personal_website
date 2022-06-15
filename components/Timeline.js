import React from 'react';
// import {cvData} from '../data/cvData'
import {
    Timeline,
    Events,
    UrlButton,
    ImageEvent,
    TextEvent,
    YouTubeEvent,
} from '@merc/react-timeline';



export default function CvTimeline({cvData}) {

    let timelineData=cvData.filter(d=> d.fields.type !='publication').sort((a, b) => (a.fields.endDate!= 'present' || b.endDate!='present' ? ((a.fields.endDate < b.fields.endDate) ? 1 : -1):(a.fields.endDate==='present' ? 1 : -1)))
    // const MyCustomCard = ({ children }) => (
    //     // console.log({data,children})
    //     <div className={'border-2 border-secondary-500 p-2'}>
    //         <h3>
    //
    //         </h3><h4>{children}</h4>
    //         {/*{children.props.text[1]}*/}
    //     </div>
    // );

    return (
        <>
            <div className="timelineFilter">
                <button>

                </button>
            </div>
            <Timeline className={'w-[60vw] pt-24'} opts={{ layout: 'alt-evts-inline-date' }}>
                {/*opts={{ layout: 'inline-evts' }}*/}
                <Events>
                    {timelineData.map((d,i)=>{
                        return <TextEvent key={i} date={d.fields.startDate+'-'+d.fields.endDate} text={d.fields.name}/>
                    })}
                    {/*<TextEvent date="1/1/19" text="**Markdown** is *supported*" />*/}

                    {/*<ImageEvent*/}
                    {/*    date="4/13/19"*/}
                    {/*    text="You can embed images..."*/}
                    {/*    src="https://res.cloudinary.com/dovoq8jou/image/upload/v1564772194/jellyfish.jpg"*/}
                    {/*    alt="jellyfish swimming"*/}
                    {/*    credit="Photo by [@tavi004](https://unsplash.com/@tavi004)"*/}
                    {/*>*/}
                    {/*    <div>*/}
                    {/*        <UrlButton href="https://unsplash.com/search/photos/undersea">*/}
                    {/*            View more undersea photos*/}
                    {/*        </UrlButton>*/}
                    {/*    </div>*/}
                    {/*</ImageEvent>*/}
                    {/*<TextEvent date="2011" text="" />*/}

                    {/*<YouTubeEvent*/}
                    {/*    date="6/18/19"*/}
                    {/*    id="6UnRHtwHGSE"*/}
                    {/*    name="General Tso's Chicken recipe"*/}
                    {/*    text="... and YouTube videos!"*/}
                    {/*/>*/}
                </Events>
            </Timeline>
        </>

    );
}