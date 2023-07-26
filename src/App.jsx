import Header from "./components/Header";
import GlobalStyle from "./js/globalStyle";
import NavBar from "./components/Navigation/NavBar";
import { useEffect, useState } from "react";
import NavMobile from "./components/Navigation/NavMobile";

function App() {
    const [showNavMobile, setShowNavMobile] = useState(false);

    useEffect(() => {
        if (showNavMobile) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
    }, [showNavMobile]);

    return (
        <>
            <GlobalStyle />
            <Header handleBurgerClick={() => setShowNavMobile(true)} />
            {!showNavMobile && <NavBar />}
            
            <NavMobile
                className={showNavMobile ? "nav-mobile-active" : ""}
                handleClose={() => setShowNavMobile(false)}
            />
            
        </>
    );
}

export default App;
