import ADD_BOOKMARK from './types'
import DELETE_BOOKMARK from './types'

export const AddBookmark=(newArticle)=> (dispatch, getState)=>{
    const bookmarks= getState().bookmarks;
    const newBookmarks= bookmarks.concat(newArticle);
    dispatch({
        type: ADD_BOOKMARK,
        payload: newBookmarks
    })
}

export const DeleteBookmark=(article)=>(dispatch, getState)=>{
    const bookmarks= getState().bookmarks;
    const newList= bookmarks.filter(bookmark=>{
        bookmark.url !== article.url
    })
    dispatch({
        type: DELETE_BOOKMARK,
        payload: newList
    })
}