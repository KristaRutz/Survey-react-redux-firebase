import React from "react";
import { NavLink } from "react-router-dom";
import SignOutButton from "./SignOutButton";

function Header() {
  return (
    <React.Fragment>
      <div className="header">
        <nav className="navbar nav-bar-expand-lg">
          <h1>Survey</h1>
          <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink exact="exact" className="nav-link" activeClassName="active" to="/">
                    <button className="btn">Home</button>
                </NavLink>
            </li>
            <li className="nav-item">
              <SignOutButton />
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  )
}

export default Header;





// function Header() {
//   return (
//     <React.Fragment>
//       <div className="header">
//         <h1>Survey</h1>
//         <button>
//           <Link to='/'>Home</Link>
//         </button>
//         <button>
//           <Link to="/signin">Sign In</Link>
//         </button>
//       </div>
//     </React.Fragment>
//   )
// }

// export default Header;