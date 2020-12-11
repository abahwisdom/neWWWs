import PostSummary from "../../components/post-summary";
import Axios from "axios";
import React from 'react'
// import '../../styles/pages.scss'
import Navigation from '../../components/nav-other'

export default function Search ({articles, search}){
    
    return(
        <>
        <Navigation/>
        <h1 className='mt-auto text-right blog-name'>neWWWs</h1>
        <h4 className='ml-4 text-my-light-blue'>Search Results {search ? `for "${search}"`:''} </h4>
        {
            articles.map(article=>{
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
            })
        }
        <div className='stars-div'></div>
        </>
    )
}

export const getServerSideProps= async ({query})=>{
    const res= await Axios.get(`https://gnews.io/api/v3/search?q=${query.search}&token=${process.env.NEWS_API_KEY}`);
    return {
        props:{
            articles: res.data.articles,
            search: query.search
        }
    }
        
    
}