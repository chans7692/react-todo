import React from 'react';
import { Link } from "react-router-dom";
import { withContext } from "./AppContext"

function Navbar(props) {
    return (
        <nav className="navbar-wrapper">

            {
                !props.token ?
                    <React.Fragment>
                        <div className="nav-link">
                            <button><Link to="/signup">Sign Up</Link></button>
                        </div>

                        <div className="nav-link">
                            <button><Link to="/login">Log In</Link></button>
                        </div>

                    </React.Fragment>
                :
                    <React.Fragment>
                        <div className="nav-link">
                            <button><Link to="/todos">Todos</Link></button>
                        </div>

                        <div className="nav-link">
                            <button onClick={() => props.logout()}>Logout</button>
                        </div>
                    </React.Fragment>
            }
        </nav>
    )
}

export default withContext(Navbar);