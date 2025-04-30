import React from 'react'
import { Link } from 'react-router'

function Header() {
    return (
        <div className=''>
            <nav className="flex justify-between items-center p-4 bg-white shadow mb-2">
                <span className="text-3xl font-bold text-blue-700">  <a href="/"> HealthHub </a></span>
                <ul className="flex space-x-4 text-sm">
                    <li><a href="#services" className="hover:underline">Services</a></li>
                    <li><a href="#wellness" className="hover:underline">Wellness Tips</a></li>
                    <li><a href="#contact" className="hover:underline">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
