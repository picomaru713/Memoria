import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <h3>Memoria</h3>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header