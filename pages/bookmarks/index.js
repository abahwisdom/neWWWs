import PostSummary from "../../components/post-summary";
import React, { useEffect, useState } from 'react'
// import '../../styles/pages.scss'
import Navigation from '../../components/nav-other'
import { Container, Jumbotron } from "react-bootstrap";

export default function Bookmarks (){
    
    const [articles, setArticles]= useState(undefined);
    const [monitorRender, setRender]= useState(false);
    useEffect(()=>{
        setArticles(JSON.parse(localStorage.getItem('news-bookmarks')));
    },[monitorRender])

    return(
        <>
        <Navigation/>
        <h1 className='mt-auto text-right blog-name'>neWWWs</h1>
        <h4 className='ml-4 text-my-light-blue'>Bookmarks </h4>
        {
            articles!==undefined && articles!==null ? articles.map(article=>{
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
                    delete
                    setRender={setRender}
                    monitorRender={monitorRender}
                    />
                </React.Fragment>
                )
            }) :<Jumbotron className='mt-4 mr-4 ml-4' style={{background: '#64ffda', color:'#0a192f'}}><h1>NO BOOKMARKS</h1></Jumbotron>

        }
        <div className='stars-div'></div>
        </>
    )
}