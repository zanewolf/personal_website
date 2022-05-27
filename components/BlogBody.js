import { MARKS,BLOCKS, INLINES } from "@contentful/rich-text-types";
import Link from 'next/link'
// import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";

const useStyles = makeStyles((theme) => ({
    blogBody: {
        // "& ul,li":{
        //     listStyle:'square',
        //     marginLeft:'1rem',
        //     paddingRight:'1rem'
        // }
    },
}));


export default function BlogBody({content,accentColor}) {

    const classes = useStyles();
    const options = {
        renderMark:{
            [MARKS.ITALIC]: (node, children) => {
                return <span className={'italic'}>{children}</span>
            },
            [MARKS.BOLD]: (node, children) => {
                return <span className={'font-bold'}>{children}</span>
            },
            [MARKS.CODE]: (node, children) => {
                return <span className={'bg-slate-700 text-yellow-500 font-accent font-light pl-2 mr-2'}>{node}</span>
            },
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => {
                return <p className={'text-md md:text-2xl font-serif font-normal mt-6 mb-6 text-shadow-sm antialiased subpixel-antialiased leading-6 tracking-relaxed'}>{children}</p>
            },
            [BLOCKS.HEADING_3]: (node, children) => {
                return <div className={`text-2xl md:text-4xl font-bold mt-8 lg:mt-24 mb-6 uppercase text-${accentColor}`}>{children}</div>
            },
            [BLOCKS.HEADING_4]: (node, children) => {
                return <div className={`text-2xl font-bold mt-6 mb-6 text-${accentColor} brightness-75`}>{children}</div>
            },
            [BLOCKS.UL_LIST]: (node, children) => {
                return <ul className={'list-disc ml-2 mr-2'}>{children}</ul>
            },
            [BLOCKS.OL_LIST]: (node, children) => {
                return <ol>{children}</ol>
            },
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const { url, fileName } = node.data.target.fields.file;
                return (
                    <img
                        src={url}
                        alt={fileName}
                        style={{ height: "auto", maxHeight:'90vh',width: "auto", maxWidth:"100%", margin: "auto",justifyContent:'center' }}
                    />
                );
            },
            [INLINES.HYPERLINK]: (node) => {
                const { uri } = node.data;
                const { value } = node.content[0];
                return (
                    <Link href={uri}>
                        <a target="_blank" rel="noreferrer noopener"  className={`text-${accentColor} underline` } >
                            {value}
                        </a>
                    </Link>
                );
            },
        },
    };
    return (
        <div>
            <div className={classes.blogBody}>
                {documentToReactComponents(content, options)}
            </div>
        </div>
    )
}
