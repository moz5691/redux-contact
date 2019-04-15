import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {

  const {branding} = props;

  return (
   <nav>
     <div>
       <a href="/">{branding}</a>
       <ul>
         <li>
           <Link to="/">Home</Link>
         </li>
         <li>
           <Link to="/contact/add">Add</Link>
         </li>
         <li>
           <Link to="/about">About</Link>
         </li>
       </ul>
     </div>
   </nav>
  );
}

export default Header;