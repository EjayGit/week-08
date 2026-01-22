import Link from 'next/link'

export default function Posts(){
    return(
        <>
            <h1>PostsPage</h1>
            <Link href={'/posts/1'}>Homepage</Link>
        </>
    );
}