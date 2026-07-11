import React, { useContext } from 'react';
import { BookContext } from '../contexts/bookContext';

const BookDetails = ({book}) => {
    // const{removeBook} = useContext(BookContext);
    const{dispatch} = useContext(BookContext);
    return ( 
        <li onClick={()=>dispatch({type:'REMOVE_BOOK',id:book.id})}>
            <div>{book.title}</div>
            <div>{book.author}</div>
        </li>
     );
}
 
export default BookDetails;