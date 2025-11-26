import {useState} from "react";
import menu from "../../assets/menu.png";

import "./header.css";

export default function Header() {

    const [activeElement, setActiveElement] = useState("1");
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const menuElements = [
        {
            id: "1",
            name: "Profile",
            redirectTo: "#section1"
        },
        {
            id: "2",
            name: "Compétences",
            redirectTo: "#section2"
        },
        {
            id: "3",
            name: "Projets académiques et personnels",
            redirectTo: "#section3"
        },
        {
            id: "4",
            name: "Contact",
            redirectTo: "#section4"
        }
    ]

    const onClickElementMenu = (elementId) => {
        setActiveElement(elementId);
        setShowMobileMenu(false);
    }

    const isElementActive = (idElement) => {
        return idElement === activeElement;
    }

    const onClickIconMenu = () => {
        console.log("show menu");
        setShowMobileMenu(!showMobileMenu);
    }

    return (
        <header className="menu">
            <img src={menu} alt="menu icon" onClick={onClickIconMenu}/>
            <ul className={showMobileMenu ? "show-menu-mobile" : ""}>
                {
                    menuElements.map(menuElement => (
                        <li onClick={() => onClickElementMenu(menuElement.id)}>
                            <a
                                className={isElementActive(menuElement.id) ? "active" : ""}
                                href={menuElement.redirectTo}>{menuElement.name}</a>
                        </li>
                    ))
                }
            </ul>
        </header>
    )
}