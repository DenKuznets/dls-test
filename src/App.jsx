import Header from "./components/Header";
import GlobalStyle from "./js/globalStyle";
import NavBar from "./components/Navigation/NavBar";
import { useEffect, useState } from "react";
import NavMobile from "./components/Navigation/NavMobile";
import Posts from "./components/Posts";

function App() {
    const [showNavMobile, setShowNavMobile] = useState(false);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        if (showNavMobile) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
    }, [showNavMobile]);

    useEffect(() => {
        const onMousedown = (e) => {
            const input = document.getElementById("header-search");
            if (
                !e.target.classList.contains("header__search-input") &&
                !e.target.classList.contains("header__search-img") &&
                input.style.display !== "none" &&
                window.innerWidth <= 768
            ) {
                input.style.display = "none";
            }
        };

        window.addEventListener("mousedown", onMousedown);

        return () => {
            window.removeEventListener("mousedown", onMousedown);
        };
    }, []);

    return (
        <>
            <GlobalStyle />
            <Header
                searchText={searchText}
                setSearchText={setSearchText}
                handleBurgerClick={() => setShowNavMobile(true)}
            />
            {!showNavMobile && <NavBar />}

            <NavMobile
                className={showNavMobile ? "nav-mobile-active" : ""}
                handleClose={() => setShowNavMobile(false)}
            />
            <main>
                <Posts searchText={searchText} />
            </main>
        </>
    );
}

export default App;
