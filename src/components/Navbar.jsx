import React, { useState } from 'react'
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/video'>Video</Link>
        </nav>
    )
}
