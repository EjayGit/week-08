import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function HomePage(){
	return(
		<>
			<Header/>
				<h1>Homepage</h1>
				<Link href={'/posts'}>Posts</Link>
			<Footer/>
		</>
	);
}