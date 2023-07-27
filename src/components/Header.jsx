import { useState } from "react";
import { styled } from "styled-components";

const HeaderStyled = styled.header`
    border-bottom: 1px solid #e9e9e9;
    padding: 1.81rem 1.25rem 1.59rem;
    .header {
        &__content {
            max-width: 72.5rem;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &__logo {
            margin: 0 auto;
        }
        &__search {
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
            }
        }
    }
`;

const BurgerStyled = styled.img`
    display: none;
    cursor: pointer;
    @media only screen and (max-width: 620px) {
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
    // const [searchText, setSearchText] = useState("");

    return (
        <HeaderStyled>
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
                        id="header-search"
                        className="header__search-input"
                        type="text"
                        value={props.searchText}
                        onChange={(e) => props.setSearchText(e.target.value)}
                    />
                </div>
            </div>
        </HeaderStyled>
    );
};

export default Header;
