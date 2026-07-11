import React, { useContext } from 'react';
import { BookContext } from '../contexts/bookContext';
import BookDetails from './bookDetails';
const BookList = () => {
    const{books} = useContext(BookContext);
    return books.length? ( 
        <div className='book-list'>
            <ul>
                {books.map(book=>{
                    return(
                        <BookDetails key={books.id} book = {book}/>
                    )
                })}
            </ul>
        </div>
     ):(
        <div className='empty'>
            moredi yaft nashod
        </div>
     )
}
 
export default BookList;