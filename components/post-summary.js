import {useRouter} from 'next/router'
import { useState, useEffect } from 'react';

export default function PostSummary(props){


    const router= useRouter();

   function viewArticle(){
        window.open(props.url, '_blank');
    };

    function bookmark(){
       const bookmarks= JSON.parse(localStorage.getItem('news-bookmarks'));
       if (bookmarks){
           const found= bookmarks.find(bookmark=> bookmark.url===props.article.url);
           if (!found){
               bookmarks.push(props.article);
               localStorage.setItem('news-bookmarks', JSON.stringify(bookmarks));
               setCurrentBookmarks(JSON.parse(localStorage.getItem('news-bookmarks')))
           }
       }else{
        localStorage.setItem('news-bookmarks', JSON.stringify([props.article]));
        setCurrentBookmarks(JSON.parse(localStorage.getItem('news-bookmarks')))
       }
    }

    const [currentBookmarks, setCurrentBookmarks]= useState([]);

    useEffect(()=>{
        setCurrentBookmarks(JSON.parse(localStorage.getItem('news-bookmarks')));
    },[])

    function deleteBookmark(){
        const bookmarks= JSON.parse(localStorage.getItem('news-bookmarks'));
        if (bookmarks){
            const newBookmarks= bookmarks.filter(bookmark=>{
                return (bookmark.url!==props.article.url) 
            });
            // console.log(bookmarks);
            // console.log(newBookmarks);
            localStorage.setItem('news-bookmarks', JSON.stringify(newBookmarks));
            if (newBookmarks.length<1){localStorage.removeItem('news-bookmarks')};
            props.setRender(!props.monitorRender);
        }
     }
    var found=false;
    if (currentBookmarks){
        found= currentBookmarks.find(bookmark=> bookmark.url===props.article.url);
    }
   

    return(
        <>
        <div className='oneStory'>
            <div className='title' onClick={viewArticle}>{props.title}</div>
            <div className='author'>{props.author}</div>
            <div className='date'>{props.date} </div>
            <div className='description text-my-dark-blue'>{props.description}</div>
            <div className='actions'>
            <div onClick={viewArticle}><i className="fa fa-newspaper-o"></i><span className='text-my-green' >Read</span>
            </div>
            {
                props.delete ? <div className='bookmark text-my-green' onClick={deleteBookmark} ><i className="fa fa-trash"></i><span >Delete Bookmark</span></div> :
                <div className={found ? 'text-my-dark-blue':'text-my-green' } onClick={!found ? bookmark: (e)=>{e.preventDefault()}}><i className="fa fa-bookmark"></i>
            <span className='oswald' >{!found ? 'Bookmark for Later' : 'Bookmarked!'}</span></div>
            }
            
            </div>
            <hr></hr>
        </div>
        </>
    )
}