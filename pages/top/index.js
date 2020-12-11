import PostSummary from "../../components/post-summary";
import Axios from "axios";
import React from 'react'
// import '../../styles/pages.scss'
import Navigation from '../../components/nav-other'
import { Jumbotron, Container } from "react-bootstrap";

export default function Top ({articles}){
    
    return(
        <>
        <Navigation/>
        <h1 className='mt-auto text-right blog-name'>neWWWs</h1>
        <h4 className='ml-4 text-my-light-blue'>Top News </h4>
        {
            articles!=='error' ? articles.map(article=>{
                return(
                 <React.Fragment key= {article.index}>
                    <PostSummary 
                    key= {article.index} 
                    article={article}
                    title={article.title} 
                    author={article.source.name}
                    description={article.description} 
                    date={article.publishedAt} 
                    content={article.content}
                    url={article.url}
                    />
                </React.Fragment>
                )
            }) :<Container><Jumbotron className='text-my-dark-blue'><h1>NO NEWS</h1></Jumbotron></Container> 
        }
        <div className='stars-div'></div>
        </>
    )
}

Top.getInitialProps= async ()=>{
    const res= await Axios.get(`https://gnews.io/api/v3/top-news?token=${process.env.NEWS_API_KEY}`)
    .catch(err=> err);
    if (!res.data){return {articles: 'error'}}
    return {
        
            articles: res.data.articles
        
    }
        
    
}