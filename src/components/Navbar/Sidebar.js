import React from 'react'

const Sidebar = () => {
    return (
        <aside class="sidebar" id="sidebar">
        <div>
        <button class="close-btn" id="close-btn">
            <i class="fas fa-times"></i>
        </button>
        {/* <ul class="sidebar-links">
            <li>
            <a href="index.html">home</a>
            </li>
            <li>
            <a href="#about" onclick="closeSidebar()">about</a>
            </li>
            <li>
            <a href="#projects" onclick="closeSidebar()">projects</a>
            </li>
            <li>
            <a href="#contact" onclick="closeSidebar()">contact</a>
            </li>
        </ul> */}
        <ul class="social-icons">
            <li>
            <a href="https://github.com/mmeurer00" class="social-icon">
                <i class="fab fa-github"></i>
            </a>
            </li>
            <li>
            <a href="" class="social-icon">
                <i class="fab fa-linkedin"></i>
            </a>
            </li>
            <li>
            <a href="" class="social-icon" download>
                <i class="fas fa-file-pdf"></i>
            </a>
            </li>
        </ul>
        </div>
        </aside>
    )
}

export default Sidebar