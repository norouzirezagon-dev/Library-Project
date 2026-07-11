import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/bookContext';

const BookForm = () => {
    const[title,setTitle] = useState(['']);
    const[author,setAuthor] = useState(['']);
    // const{addBook} = useContext(BookContext);
    const{dispatch} = useContext(BookContext);
    const handleSubmit =(e)=>{
        e.preventDefault();
        // addBook(title,author);
        dispatch({type:'ADD_BOOK',book:{title,author}});
        setTitle('');
        setAuthor('');
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type='text' required value={title}
            onChange={(e)=>{setTitle(e.target.value)}}/>
            <input type='text' required value={author}
            onChange={(e)=>{setAuthor(e.target.value)}}/>
            <input type='submit'/>
        </form>
     );
}
 
export default BookForm;