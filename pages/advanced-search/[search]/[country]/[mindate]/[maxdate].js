import PostSummary from "../../../../../components/post-summary";
import Navigation from '../../../../../components/nav-other'
import Axios from "axios";
import React from 'react'
// import '../../../../../styles/pages.scss'
import AdvancedSearchForm from "../../../../../components/advanced-search";
// import { Container } from "react-bootstrap";


export default function AdvancedSearch ({articles, search, country}){
    
    return(
        <>

        <Navigation/>
        <h1 className='mt-auto text-right blog-name'>neWWWs</h1>
        <div className='mr-4 ml-4'>
            <AdvancedSearchForm/>
        </div>
            
        
        <h4 className='ml-4 mt-4 text-my-light-blue'>Search Results {search ? `for "${search}"`:''} {
            country=='uk'? 'in the UK': country=='us'? 'in the US': country=='ng'? 'in Nigeria' : ''
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
    const res= await Axios.get(`https://gnews.io/api/v3/search?q=${query.search}&mindate=${query.mindate}&maxdate=${query.maxdate}&country=${query.country}&lang=en&token=${process.env.NEWS_API_KEY}`);
    return {
        props:{
            articles: res.data.articles,
            search: query.search,
            country: query.country

        }
    }
        
    
}