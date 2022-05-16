import Link from 'next/link'
import Image from 'next/image'

export default function ProjectCard({ project }) {
    const { name, slug, thumbnail } = project.fields

    return (
        // <div>
            <div id="hexcontainer">
                <div className="hex1">
                    <div className="hex2">
                        <Link href={"/projects/"+slug}>
                            <a className="hexlink" id="hl1" >
                                <div className="hexcover"></div>
                                <Image
                                    src={'https:' + thumbnail.fields.file.url}
                                    // layout={'fixed'}
                                    alt={'project-image-'+name}
                                    layout={'fill'}
                                    objectFit= {'cover'}
                                    // // sizes={'15vw'}
                                    // width={thumbnail.fields.file.details.image.width}
                                    // height={thumbnail.fields.file.details.image.height*2}
                                />
                                <h3>{name}</h3>
                                {/*<div className="plus"></div>*/}
                            </a>
                        </Link>
                    </div>
                </div>
            {/*</div>*/}

            <style jsx>{`
                #hexcontainer {
                position:relative;
                margin:50px 0 35px 0;
                padding:20px 0;
            }

                .hex1, .hex2 {
                position:relative;
                display:inline-block;
                height:220px;
                width:190px;
                overflow:hidden;
            }

                .hex1 {
                -webkit-transform:rotate(60deg);
                -moz-transform:rotate(60deg);
                -ms-transform:rotate(60deg);
                -o-transform:rotate(60deg);
                transform:rotate(60deg);
                margin:-20px 10px;
            }

                .hex2 {
                -webkit-transform:rotate(60deg);
                -moz-transform:rotate(60deg);
                -ms-transform:rotate(60deg);
                -o-transform:rotate(60deg);
                transform:rotate(60deg);
            }

                .hexlink {
                -webkit-transform:rotate(-120deg);
                -moz-transform:rotate(-120deg);
                -ms-transform:rotate(-120deg);
                -o-transform:rotate(-120deg);
                transform:rotate(-120deg);
                position:relative;
                display:inline-block;
                text-decoration:none;
                height:220px;
                width:190px;
                background-position:center center;
                background-size:cover;
            }

                //#hl1 {background-image:url('https://picsum.photos/200/300/?random&1');}
                //#hl2 {background-image:url('https://picsum.photos/200/300/?random&2');}
                //#hl3 {background-image:url('https://picsum.photos/200/300/?random&3');}
                //#hl4 {background-image:url('https://picsum.photos/200/300/?random&4');}
                //#hl5 {background-image:url('https://picsum.photos/200/300/?random&5');}
                //#hl6 {background-image:url('https://picsum.photos/200/300/?random&6');}
                //#hl7 {background-image:url('https://picsum.photos/200/300/?random&7');}
                //#hl8 {background-image:url('https://picsum.photos/200/300/?random&8');}
                //#hl9 {background-image:url('https://picsum.photos/200/300/?random&9');}
                //#hl10 {background-image:url('https://picsum.photos/200/300/?random&10');}


                /* --- OVERLAY --- */


                .hexcover {
                position:absolute;
                top:0;
                left:0;
                height:100%;
                width:100%;
                background-color:transparent;
                opacity:0.9;
                
            }

                .hexlink h3 {
                position:absolute;
                top:50%;
                -webkit-transform:translateY(-50%);
                -moz-transform:translateY(-50%);
                -ms-transform:translateY(-50%);
                -o-transform:translateY(-50%);
                transform:translateY(-50%);
                width:100%;
                margin:0;
                text-align:center;
                text-transform:uppercase;
                font-family:'Slabo 13px', sans-serif;
                font-size:1.5em;
                font-weight:normal;
                word-spacing:5px;
                color:transparent;
                cursor:pointer;
                opacity:1;
            }

                .plus {
                position:absolute;
                bottom:16%;
                left:50%;
                -webkit-transform:translateX(-50%);
                -moz-transform:translateX(-50%);
                -ms-transform:translateX(-50%);
                -o-transform:translateX(-50%);
                transform:translateX(-50%);
                height:40px;
                width:40px;
                cursor:pointer;
            }

                .plus:before, .plus:after {
                content:"";
                position:absolute;
                top:10px;
                left:18px;
                width:4px;
                height:20px;
                border-radius:2px;
                background-color:transparent;
                opacity:1;
            }

                .plus:after {
                -webkit-transform:rotate(90deg);
                -moz-transform:rotate(90deg);
                -ms-transform:rotate(90deg);
                -o-transform:rotate(90deg);
                transform:rotate(90deg);
            }

                @-webkit-keyframes plusBump {
                0%		{width:4px; height:20px; left:18px; top:10px;}
                100%	{width:5px; height:25px; left:17.5px; top:7.5px;}
            }
                @-moz-keyframes plusBump {
                0%		{width:4px; height:20px; left:18px; top:10px;}
                100%	{width:5px; height:25px; left:17.5px; top:7.5px;}
            }
                @-o-keyframes plusBump {
                0%		{width:4px; height:20px; left:18px; top:10px;}
                100%	{width:5px; height:25px; left:17.5px; top:7.5px;}
            }
                @keyframes plusBump {
                0%		{width:4px; height:20px; left:18px; top:10px;}
                100%	{width:5px; height:25px; left:17.5px; top:7.5px;}
            }

                .hexlink:hover .hexcover {background-color:#C9CFD9;}

                .hexlink:hover h3 {color:#566676;}

                .hexlink:hover .plus:before, .hexlink:hover .plus:after {
                background-color:#FFFFFF;
                -webkit-animation:plusBump 150ms ease 0.4s 4 alternate;
                -moz-animation:plusBump 150ms ease 0.4s 4 alternate;
                -o-animation:plusBump 150ms ease 0.4s 4 alternate;
                animation:plusBump 150ms ease 0.4s 4 alternate;
            }

            `}</style>
        </div>
    )
}