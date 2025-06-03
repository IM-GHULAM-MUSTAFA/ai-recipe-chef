import React from 'react'
import { NavLink } from 'react-router-dom'
export default function () {
    return (
        <header>
            <nav className="navbar">
                <div className='logoText'>
                <img src="../src/Images/chef-claude-icon.png" alt="img" />
                <h1>Recipe Chef</h1>
                </div>
                <div className='divLinks'>
                <NavLink className={({isActive})=> isActive ? "links linksActive" : "links"} to="/chef">Home</NavLink>
                <NavLink className={({isActive})=> isActive ? "links linksActive" : "links"} to="/recipe">Recipes</NavLink>
                <NavLink className={({isActive})=> isActive ? "links linksActive" : "links"} to="/review">Review</NavLink>
                <NavLink className={({isActive})=> isActive ? "links linksActive" : "links"} to="/faq">FAQ</NavLink>
                {/* <NavLink className={({isActive})=> isActive ? "links linksActive" : "links"} to="/signup">Signup</NavLink> */}
                </div>
            </nav>
        </header>
    )
}