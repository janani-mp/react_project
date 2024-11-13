import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <h1 className="header-title">Your Inventory Hub!</h1>
            </div>
        </header>
    );
}

export default Header;


// import React from 'react';
// import './Header.css';
// import { Link } from 'react-router-dom';

// function Header() {
//     return (
//         <header className="header">
//           <nav>
//             <ul>
//               <div className="logo">Your Inventory Hub!</div>
//               <li><Link to="/">back to login</Link></li>
//               <li><Link to="/Ims">Ims</Link></li>
//               <li><Link to="/About">About</Link></li>
//             </ul>
//           </nav>
        
            
//         </header>
//     );
// }

// export default Header;

