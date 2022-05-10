import React, {useEffect} from 'react';
import Link from 'next/link'
import {useRouter} from "next/router";

const NotFound = () => {
    const router = useRouter()

    useEffect(()=> {
        setTimeout(()=>{
            // router.go(-1)
            router.push('/')
        },4000)
    },[])


    return (
        <div className={'not-found'}>
            <h1>404 </h1>
            <h2>Oops...That page does not exist.</h2>
            <p>Taking you back <Link href={'/'}><a>home</a></Link>.....</p>
            {/*<p> Go back to the <Link href={'/'}><a>Home Page</a></Link></p>*/}

        <style jsx>{`
            .not-found {
              background: #fff;
              padding: 30px;
              box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
              //transform: rotateZ(-1deg);
            }
            h1 {
              font-size: 3em;
            }
          `}</style>
        </div>
    );
};

export default NotFound;
