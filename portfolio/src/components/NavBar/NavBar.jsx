import { useState, useEffect, useRef } from "react";
import styles from "./NavBar.module.css";
import { getImageUrl } from "../../utils.js";

export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

    const menuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "experience", "projects"];
            let currentSection = "home";

            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = section;
                        break;
                    }
                }
            }
            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (menuRef.current) {
            const activeItem = menuRef.current.querySelector(
                `.${styles.active}`
            );
            if (activeItem) {
                const menuRect = menuRef.current.getBoundingClientRect(); // Get navbar position
                const itemRect = activeItem.getBoundingClientRect();

                setIndicatorStyle({
                    left: itemRect.left - menuRect.left + 5, // Relative to navbar
                    width: itemRect.width,
                });
            }
        }
    }, [activeSection, menuOpen]);

    return (
        <nav className={styles.navbar}>
            <div className={styles.menu} ref={menuRef}>
                <img
                    className={styles.menuBtn}
                    src={getImageUrl("menu.png")}
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={`${styles.menuItems} ${
                        menuOpen && styles.menuOpen
                    }`}
                >
                    {[
                        { id: "home", label: "Home" },
                        { id: "about", label: "About" },
                        { id: "experience", label: "Experience" },
                        { id: "projects", label: "Projects" },
                    ].map(({ id, label }) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                className={`${styles.menuItem} ${
                                    activeSection === id ? styles.active : ""
                                }`}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div
                    className={styles.indicator}
                    style={{
                        left: indicatorStyle.left,
                        width: indicatorStyle.width,
                    }}
                />
            </div>
        </nav>
    );
};
