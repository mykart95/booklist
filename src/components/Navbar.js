import React, {useContext} from 'react';
import { BookContext } from '../context/BookContext';

const Navbar = () => {
   const {books}=useContext(BookContext);
    return ( 
        <div className="navbar">
            <h1>Ninja reading lists</h1>
            <p>Currently you have {books.length} to get through </p>
        </div>
     );
}
 
export default Navbar;
