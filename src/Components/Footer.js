import React from 'react'
import "./FooterStyle.css"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="logo-and-handle">
                <div className="footer-logo">
                    <h1>Trippy</h1>
                    <p>Choose Your Favourite Destination</p>
                </div>
                <div className="socialhandles">
                    <a href='https://fontawesome.com/icons/square-twitter?f=brands&s=solid'><i class="fa-brands fa-square-facebook fa-2xl"></i></a>
                    <a href='https://fontawesome.com/icons/square-twitter?f=brands&s=solid'><i class="fa-brands fa-square-instagram fa-2xl"></i></a>
                    <a href='https://fontawesome.com/icons/square-twitter?f=brands&s=solid'><i class="fa-brands fa-square-youtube fa-2xl"></i></a>
                    <a href="https://fontawesome.com/icons/square-twitter?f=brands&s=solid"><i class="fa-brands fa-square-twitter fa-2xl"></i></a>
                </div>
            </div>
            <div className="footer-items">
                <div className="projects">
                    <h2>Projects</h2>
                    <a href="https://fontawesome.com/icons/square-twitter?f=brands&s=solid"><p>Changelog</p></a>
                    <a href="https://fontawesome.com/icons/square-twitter?f=brands&s=solid"><p>Status</p></a>
                    <a href="https://fontawesome.com/icons/square-twitter?f=brands&s=solid"><p>License</p></a>
                    <a href="https://fontawesome.com/icons/square-twitter?f=brands&s=solid"><p>All Versions</p></a>
                </div>
                <div className="community">
                    <h2>Community</h2>
                    <a href="https://fontawesome.com/icons/square-twitter?f=brands&s=solid"><p>GitHub</p></a>
                    <a href="https://fontawesome.com/icons/square-twitter?f=brands&s=solid"><p>Issues</p></a>
                    <a href="https://fontawesome.com/icons/square-twitter?f=brands&s=solid"><p>Project</p></a>
                    <a href="https://fontawesome.com/icons/square-twitter?f=brands&s=solid"><p>Twitter</p></a>
                </div>
                <div className="help">
                    <h2>Help</h2>
                    <a href="https://fontawesome.com/icons/square-twitter?f=brands&s=solid"><p>Support</p></a>
                    <a href="https://fontawesome.com/icons/square-twitter?f=brands&s=solid"><p>Troublesho</p></a>
                    <a href="https://fontawesome.com/icons/square-twitter?f=brands&s=solid"><p>Contact Us</p></a>
                </div>
                <div className="others">
                    <h2>Others</h2>
                    <a href="https://fontawesome.com/icons/square-twitter?f=brands&s=solid"><p>Terms of Service</p></a>
                    <a href="https://fontawesome.com/icons/square-twitter?f=brands&s=solid"><p>Privacy Policy</p></a>
                    <a href="https://fontawesome.com/icons/square-twitter?f=brands&s=solid"><p>License</p></a>

                </div>
            </div>
        </div>
    )
}

export default Footer