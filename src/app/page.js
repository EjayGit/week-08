import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HomePage(){
	return(
		<>
			<Header/>
				<div className='home-page'>
					<p className='travel-intro'>This is a mighty fine Next.js travel blog site. Where you can let us all here know where you are and what you're doing!</p>
					<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd1ut31suh1xx3k.cloudfront.net%2Fwp-content%2Fuploads%2F2018%2F11%2F15135728%2Fshutterstock_1228756897.jpg&f=1&nofb=1&ipt=a35aeef94bac0023512b00d98743facec051e63836b466f41cf12fc5360b6674" alt="An image of a beach." />
				</div>
			<Footer/>
		</>
	);
}