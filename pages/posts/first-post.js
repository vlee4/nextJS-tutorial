import Link from 'next/link';

export default function FirstPost() {
    return (
        <>
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