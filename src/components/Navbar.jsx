import Link from 'next/link'
import './navbar.css'

export default function Navbar(){
    return(
        <div className='navbar'>
            <p><Link className='navlink' href={'/'}>Home</Link></p>&nbsp;
            <p><Link className='navlink' href={'/posts'}>Posts</Link></p>&nbsp;
        </div>
    )
}