import { Navbar, Nav } from "react-bootstrap";
import Link from 'next/link'
// import '../styles/navigation.scss'


export default function Navigation(){
    return(
        <>
            <div className='navig-other'>
                <Link href='/'><span className='mr-4'>Home</span></Link>
                <Link href='/top'><span className='mr-4'>Top News</span></Link>
                <Link href='/bookmarks'><span className='mr-4'>Bookmarks</span></Link>
                <Link href='/'><span className=''>About</span></Link>
            </div>
        </>
    )
}