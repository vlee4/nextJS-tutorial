import Link from 'next/link';
import Head from 'next/head';
// import Script from 'next/script';

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            {/* <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
                }
            />  */}
            {/* Next.js 's Script component inherently optimizes when the script is fetched & executed, preventing render-blocking code */}
            {/* Strategy denotes when Next.js should load the resource, onLoad tells it to run any JS code immediately after loading */}
            <h1>First Post</h1>
            <h2><Link href="/">Back to Home</Link></h2>
            
            <h2><Link href="http://www.google.com">Test google link</Link></h2> 
         
            <a href="http://www.google.com">Actual link to google</a>
        </>
)
}
// Note: next.js utilizes client-side navigation to change what's displayed on each page and link between them, 
// automatically setting up routing based on your pages internal folder structure. 
// However, for navigating to external links, next.js recommends still utilizing <a> tags, rather than the built in <Link> tag.