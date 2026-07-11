import React, { useContext } from 'react';
import { BookContext } from '../contexts/bookContext';
const Navbar = () => {
    const{books} = useContext(BookContext);
    return ( 
        <div className='navbar'>
            <h1>liste ketabha</h1>
            <p>aknoon shoma {books.length} ketab darid</p>
        </div>
     );
}
 
export default Navbar;