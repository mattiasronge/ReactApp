import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const SignedInLinks = () => {
    return (
     <ul className="right">
        <li><NavLink to='/'>New Project</NavLink> </li>
        <li><NavLink to='/'>Log Out</NavLink> </li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1"> MR</NavLink> </li>
     </ul>  
    )
}

export default SignedInLinks