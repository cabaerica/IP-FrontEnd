import React from 'react';
import "../stylesheets/Sidebar.css"

const Sidebar = () => {
    return (<div className="wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                    <li>
                        <a href="#Favorites" >Favorites</a>
                    </li>
                    <li>
                        <a href="#orders">Orders</a>
                    </li>
                    <li>
                        <a href="#returns">Returns</a>
                    </li>
                    <li>
                        <a href="#reviews">Reviews</a>
                    </li>
                    <li>
                        <a href="#support">Support</a>
                    </li>
                    <li>
                        <a href="#logout">Log out</a>
                    </li>
                </ul>
            </nav>
        </div>)
}
export default Sidebar;
