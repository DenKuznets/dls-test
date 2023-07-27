import { useRef } from "react";
import { styled } from "styled-components";

const HeaderStyled = styled.header`
    border-bottom: 1px solid #e9e9e9;
    padding: 1.81rem 1.25rem 1.59rem;
    display: flex;
    justify-content: center;
    .header {
        &__content {
            position: relative;
            max-width: 72.5rem;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &__logo {
            /* margin: 0 auto; */
            /* margin-right: auto; */
        }
        &__search {
            position: absolute;
            right: 0;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            label {
                cursor: pointer;
            }
            input {
                border: 1px solid gray;
                border-radius: 4px;
                padding: 0.25rem;
                @media only screen and (max-width: 768px) {
                    display: none;
                    position: fixed;
                    left: 50%;
                    z-index: 3;
                    width: 80%;
                    background-color: white;
                    transform: translate(-50%);
                }
            }
        }
    }
`;

const BurgerStyled = styled.img`
    display: none;
    cursor: pointer;
    position: fixed;
    left: 1.25rem;
    @media only screen and (max-width: 768px) {
        display: block;
    }
`;

const Burger = (props) => {
    return (
        <BurgerStyled
            onClick={() => props.onClick()}
            src="./images/burger.svg"
        />
    );
};

const Header = (props) => {
    const inputRef = useRef("");
    const handleHeaderClick = (e) => {
        // console.log(e.target);
        if (
            e.target.classList.contains("header__search-img") &&
            window.innerWidth <= 768 &&
            inputRef.current
        ) {
            inputRef.current.style.display = "block";
            console.log('show search');
        }

        
    };
    return (
        <HeaderStyled onClick={(e) => handleHeaderClick(e)}>
            <div className="header__content">
                <Burger onClick={() => props.handleBurgerClick()} />
                <img className="header__logo" src="./images/logo.svg" alt="" />
                <div className="header__search">
                    <label htmlFor="header-search">
                        <img
                            className="header__search-img"
                            src="./images/search-btn.svg"
                            alt=""
                        />
                    </label>
                    <input
                        ref={inputRef}
                        id="header-search"
                        className="header__search-input"
                        type="text"
                        value={props.searchText}
                        onChange={(e) => props.setSearchText(e.target.value)}
                        placeholder="search posts"
                    />
                </div>
            </div>
        </HeaderStyled>
    );
};

export default Header;
