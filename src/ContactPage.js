import React from "react";
import { Button } from "react-bootstrap";

function ContactPage(props) {
    const contacts = [
        {
            icon: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico",
            text: "Email",
            link: "mailto:arnavkatyayan99@gmail.com",
            message: "Feel free to reach out to me via email for any queries or collaborations."
        },
        {
            icon: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
            text: "LinkedIn",
            link: "https://www.linkedin.com/in/arnav-katyayan/",
            message: "Connect with me on LinkedIn to explore professional opportunities and networking."
        },
        {
            icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
            text: "GitHub",
            link: "https://github.com/arnavkatyayan",
            message: "Check out my GitHub for my latest projects and open-source contributions."
        },
        {
            icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
            text: "LeetCode",
            link: "https://leetcode.com/u/arnav131999/",
            message: "Explore my coding journey on LeetCode where I solve challenging problems."
        }
    ];

    return (
        <div className="contact-page">
            <div className="contact-grid-representation">
                {contacts.map((contact, index) => (
                    <div className={`first-div ${props.darkMode ? "skills-each-dark-mode" : ""}`} key={index}>
                        <div className="first-div-inside-animation">
                            <a href={contact.link} target="_blank" rel="noopener noreferrer">
                                <div className="icon-name">
                                    <img src={contact.icon} alt={contact.text} className="contact-icon" />
                                    {contact.text}
                                </div>

                            </a>
                            <p className={`contact-message ${props.darkMode ? "contact-message-darkMode" : ""}`}>
                                {contact.message}
                            </p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ContactPage;