import Head from 'next/head'
// import '../styles/landing.scss'
import React from 'react'
import {Button, Container} from 'react-bootstrap'
import Typical from 'react-typical'
import Navigation from '../components/navbar'
import { Parallax, ParallaxLayer } from 'react-spring/addons.cjs'
import PostSummary from '../components/post-summary'
import AdvancedSearchForm from '../components/advanced-search'
import Link from 'next/link'


const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default class Landing extends React.Component {
  render(){
    return (
    <>
    <Head>
    <script src="https://use.fontawesome.com/fd44fba7ee.js"></script>
    <title>neWWWs</title>
    </Head>

    <Parallax pages={1.5} ref={ref=>{this.parallax= ref}}>
    <Container>
      <Navigation/>
    </Container>
    
        
        <ParallaxLayer offset={0} speed={1} style={{ backgroundImage:"url('https://images.unsplash.com/photo-1574758620677-f345325a3ea4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1246&q=80')", backgroundSize:'cover', backgroundPosition: 'right', zIndex:-2 }}>
          
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.6}>
        <Container className='h-100'>
            <div className="row h-100" >
              <div className="col-sm m-auto remove-763">
              
              </div>
              <div className="col-sm m-auto text-justify typical-parent">
                <div className=''>
                <Typical
                  steps={[
                    1000,
                    `I am neWWWS.
                    Welcome.`,
                    1000,
                    `I am neWWWS.
                    Welcome. I aggregate all news stories for you from different parts of the world.`,
                    500,
                    `I am neWWWS.
                    Welcome. I aggregate all news stories for you from different parts of the world. Try out the various categories available from sports to technology and science to entertainment and many more.`,
                    500,
                    `I am neWWWS.
                    Welcome. I aggregate all news stories for you from different parts of the world. Try out the various categories available from sports to technology and science to entertainment and many more. You can also bookmark your favorite news stories and read them later when convenient.
                    Enjoy!`

                  ]}
                  // loop={Infinity}
                  wrapper="h5"
                />
                </div>
              </div>
            </div>
          </Container>
        </ParallaxLayer>

        <ParallaxLayer factor={0.5} offset={0.7} speed={0.7}>
          <Container className="h-100">
        <div className="row h-100" >
          <div className="col-sm m-auto remove-763 icon-contain">
          <i className="fa fa-instagram "></i>
          <i className="fa fa-facebook "></i>
          <i className="fa fa-twitter "></i>
          <i className="fa fa-linkedin "></i>
          </div>
          <div className="col-sm m-auto">
            <h1 className='mt-auto text-right blog-name-landing'>neWWWs</h1>
          </div>
        </div>
        </Container>
        <Container className='h-100 contain-car'>
        <div className="row h-100" >
          <div className="col-sm text-left pointer-parent1">
                <h4 className='text-my-light-blue '> Top News</h4>
                <Link href='/top'><div className='text-my-green pb-2'>Worldwide</div></Link>  
                <Link href='/country/ng'><div className='text-my-green pb-2'>Nigeria</div></Link>
                <Link href='/country/us'><div className='text-my-green pb-2'>United States</div></Link>
                <Link href='/country/uk'><div className='text-my-green pb-2'>United Kingdom</div></Link>
              </div>
              <div className="col-sm pb-2 text-right pointer-parent2">
                <h4 className='text-my-light-blue' > Categories</h4>
                <Link href='/topic/sports'><div className='text-my-green pb-2'>Sports</div></Link>
                <Link href='/topic/business'><div className='text-my-green pb-2'>Business</div></Link>
                <Link href='/topic/technology'><div className='text-my-green pb-2'>Technology</div></Link>
                <Link href='/topic/entertainment'><div className='text-my-green pb-2'>Entertainment</div></Link>
                <Link href='/topic/science'><div className='text-my-green pb-2'>Science</div></Link>
                <Link href='/topic/health'><div className='text-my-green pb-2'>Health</div></Link>
              </div>
              {/* <div className="col-sm pb-4">
               <h4> View Bookmarks</h4>
              </div> */}
              </div>
          </Container>
        </ParallaxLayer>
              
        <ParallaxLayer factor={0.5} offset={1} speed={0.1}>
          <Container>
              <AdvancedSearchForm/>
          </Container>
        
              
        </ParallaxLayer>

        



        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover', zIndex:-1 }} />
        <ParallaxLayer factor={1} offset={1} speed={-0.4} style={{ pointerEvents: 'none', zIndex:-3 }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '42%' }} />
        </ParallaxLayer>

      </Parallax>
      
      

      </>
  )
  }
  
}



