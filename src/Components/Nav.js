import React from 'react'
import { FaShopify } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <Link style={{ textDecoration: 'none' }} to="/">
                <span className="mr-2">
                    <FaShopify />
                </span>
                <span>Shopee</span>
            </Link>
        </nav>
    )
}

export default Nav
