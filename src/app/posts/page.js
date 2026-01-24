import Link from "next/link";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PostForm from '@/components/PostForm'
import { db } from "@/utils/dbConnection";

export default async function UsersPage({ searchParams }) {
  //searchParams is async
  const queryString = await searchParams;

  //no use of effect or state, as we are in the server
  const {rows} = await db.query(`SELECT * FROM postboard`);
  // console.log(rows);

  //sorting logic --> this logic sorts our users in alphabetical order
  if (queryString.sort === "desc") {
    rows.sort((a, b) => {
      return b.location.localeCompare(a.location);
    });
  } else if (queryString.sort === "asc") {
    rows.sort((a, b) => {
      return a.location.localeCompare(b.location);
    });
  }

  return (
    <>
      <Header/>
      <PostForm/>
      <Link href={"/posts?sort=asc"}>Asc</Link> | <Link href={"/posts?sort=desc"}>Desc</Link>
      {rows.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`} className="post-data">
              <p className='name'>{post.name}</p> <p className='location'>{post.location}</p> <p className='message'>{post.message}</p>
            </Link>
          </div>
        );
      })}
      <Footer/>
    </>
  );
}