import React from 'react'
import {NavLink} from "react-router-dom"

function Nav() {
  return (
    <nav>
        <div className="nav-left">LOGO</div>
        <div className="nav-right">
            <ul>
                <li>
                    <NavLink to = "/" style={({isActive})=>isActive ? {color : "red"}: null}>HOME</NavLink>
                    <NavLink to= "about" style = {({isActive})=>isActive ? {color: "red"} : null}>ABOUT</NavLink>

                    <NavLink to= "product/5" style = {({isActive}) => isActive ? {color: "red"} : null}>PRODUCTS</NavLink>
                </li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav