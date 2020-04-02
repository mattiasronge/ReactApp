import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const SignedOutLinks = () => {
    return (
     <ul className="right">
        <li><NavLink to='/'>Sign up</NavLink> </li>
        <li><NavLink to='/'>Log in</NavLink> </li>
     </ul>  
    )
}

export default SignedOutLinks