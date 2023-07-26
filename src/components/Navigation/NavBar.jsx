import { useEffect, useRef, useState } from "react";
import NavMenu from "./NavMenu";

import { styled } from "styled-components";

const NavBarStyled = styled.nav`
    position: sticky;
    top: 0;
    transition: all 1s ease;
    background-color: white;
    z-index: 3;
    border-bottom: 1px solid #e9e9e9;
    padding: 0 1.25rem;
    &.nav-hidden {
        top: -100px;
    }

    @media only screen and (max-width: 620px) {
        display: none;
    }
`;

const NavBar = () => {
    const navBarRef = useRef();
    const [limit, setLimit] = useState(null);
    const hideAfter = 200;

    const watchScrolling = () => {
        if (
            (navBarRef.current.getBoundingClientRect().y === 0) &
            (limit === null)
        ) {
            setLimit(hideAfter + window.scrollY);
        }
        if (
            limit &&
            Math.floor(window.scrollY) > limit &&
            !navBarRef.current.classList.contains("nav-hidden")
        ) {
            navBarRef.current.classList.add("nav-hidden");
        }
        if (
            limit &&
            Math.floor(window.scrollY) < limit &&
            navBarRef.current.classList.contains("nav-hidden")
        ) {
            navBarRef.current.classList.remove("nav-hidden");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", watchScrolling);

        return () => {
            window.removeEventListener("scroll", watchScrolling);
        };
    });


    return (
        <NavBarStyled ref={navBarRef}>
            <NavMenu  />
        </NavBarStyled>
    );
};

export default NavBar;
