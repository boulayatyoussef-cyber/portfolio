import {contactInfo} from "../../data/contactInfo";

import "./footer.css";

export default function Footer() {

    return (
        <footer>
            <p>© Copyright - All rights reserved 2025</p>
            <div className="contact-logos">
                {contactInfo.map(contact => (
                    <a href={contact.link} target="_blank">
                        <img src={contact.icon} alt="Email Logo" />
                    </a>
                ))}
            </div>
        </footer>
    )
}