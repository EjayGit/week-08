import Link from 'next/link'
import Header from '@/components/Header'

export default async function Posts({searchParams}){
    
    const {queryString} = await searchParams;
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    console.log(data);
    const {users} = data;

    if (queryString.sort === 'desc'){
        users.sort((a,b) => {
            return b.firstName.localeCompare(a.firstName);
        });
    } else if(queryString.sort === "asc"){
        users.sort((a,b) => {
            return a.firstName.localeCompare(b.firstName);
        });
    }

    return(
        <>
            <h1>Users Page</h1>
            <Header/>
            <h1>PostsPage</h1>
            <Link href={"/posts?sort=asc"}>ASC</Link>
            <Link href={"/posts?sort=desc"}>DESC</Link>
            {/* SELECT * posts 
            Make each post a button
            Once post has been clicked, take id and goto new route with that id*/}
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <Link href={`/posts/${users.id}`}>{users.firstName} {users.lastName}</Link>
                    </div>
                );
            })}
            
        </>
    );
}