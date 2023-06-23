import React from "react";
import  {Link} from 'react-router-dom';
import './Menu.css'

export default function Menu() {
    return (
        <div className="container">
            <p><Link className='link' to='/homepage'>Home page</Link></p>
            <p><Link className='link' to='/cardpage'>Card page</Link></p>
        </div>
    )
}