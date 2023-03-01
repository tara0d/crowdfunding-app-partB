import React from "react";
import { Link } from 'react-router-dom';
import "./Nav.css"

function Nav() {
    return (
        <nav id="navigation">
            <div id="nav-logo">
                <img src="https://via.placeholder.com/200x100"></img>
            </div>
            <div id="nav-links">
                <div class="nav-links-text">
                    <Link to="/">Home</Link>
                </div>
                <div class="nav-links-text">
                    {/* <Link to="/project">Project</Link> */}
                </div>
                <div class="nav-links-text">
                    <Link to="/login/">Log in</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav;