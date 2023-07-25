import { useEffect, useRef, useState } from "react";
import arrowDown from "../../public/images/arrow-down.svg";
import { menuItems } from "../js/menuItems";
import NavStyled from "./styled/NavStyled";

const Nav = () => {
    const navRef = useRef();
    const [limit, setLimit] = useState(null);
    const hideAfter = 210;

    const watchScrolling = () => {
        if (
            (navRef.current.getBoundingClientRect().y === 0) &
            (limit === null)
        ) {
            setLimit(hideAfter + window.scrollY);
        }
        if (
            limit &&
            Math.floor(window.scrollY) > limit &&
            !navRef.current.classList.contains("nav-hidden")
        ) {
            navRef.current.classList.add("nav-hidden");
        }
        if (
            limit &&
            Math.floor(window.scrollY) < limit - 100 &&
            navRef.current.classList.contains("nav-hidden")
        ) {
            navRef.current.classList.remove("nav-hidden");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", watchScrolling);

        return () => {
            window.removeEventListener("scroll", watchScrolling);
        };
    });
    const createList = (objArr) => {
        return objArr.map((object, index) => {
            if (object.submenu) {
                return (
                    <li key={index}>
                        <div className="wrapper">
                            <span>{object.title}</span>
                            <img src={arrowDown} alt="" />
                        </div>
                        <ul className="submenu">
                            {createList(object.submenu)}
                        </ul>
                    </li>
                );
            }
            return (
                <li key={index}>
                    <div className="wrapper">{object.title}</div>
                </li>
            );
        });
    };

    const listToShow = createList(menuItems);

    return (
        <NavStyled ref={navRef}>
            <ul>{listToShow}</ul>
        </NavStyled>
    );
};

export default Nav;
