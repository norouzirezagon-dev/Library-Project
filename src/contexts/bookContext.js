import React, { createContext, useEffect, useReducer, useState } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = ({children}) => {
    const[books,dispatch] = useReducer(bookReducer,[],()=>{
        const data = localStorage.getItem('books');
        return data? JSON.parse(data) : []
    });

    useEffect(
        ()=>{
            localStorage.setItem('books',JSON.stringify(books))
        },[books]
    )
    // const[books,setBook]=useState([
    //     {title:'book 1',author:'A',id:'1'},
    //     {title:'book 2',author:'B',id:'2'}
    // ])
    // const removeBook=(id)=>{
    //     setBook(books.filter(book=>book.id !==id))
    // }
    // const addBook=(title,author)=>{
    //     setBook([...books,{title,author,id:uuid()}])
    // }
    return ( 
        <BookContext.Provider value={{books,dispatch}}>
            {children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;