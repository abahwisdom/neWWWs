import PostSummary from "../../components/post-summary";
import Axios from "axios";
import React from 'react'
// import '../../styles/pages.scss'
import Navigation from '../../components/nav-other'

export default function Country ({articles, country}){
    
    return(
        <>
        <Navigation/>
        <h1 className='mt-auto text-right blog-name'>neWWWs</h1>
        <h4 className=' ml-4 text-my-light-blue oswald'>{
            country=='us' ? 'US News':
            country=='uk' ? 'UK News':
            country=='ng' ? 'Nigeria News' : `Country News (${country.toUpperCase()})`
        } </h4>

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
    const res= await Axios.get(`https://gnews.io/api/v3/top-news?lang=en&country=${query.country}&token=${process.env.NEWS_API_KEY}`);
    // const resJson= await res.json();
    // console.log(res.data.articles);
    return {
        props:{
            articles: res.data.articles,
            country: query.country
        }
    }
        
    
}