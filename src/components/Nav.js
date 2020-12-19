import React from 'react'
import '../styles/nav.css'

export default function Nav() {
    return (
        <div className="bg nav">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/info">About</a></li>
            </ul>
        </div>
    )
}
