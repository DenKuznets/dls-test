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
            onClick={()=> props.onClick()}
            src="./images/burger.svg"
        />
    );
};

const Header = (props) => {
    return (
        <HeaderStyled>
            <div className="header__content">
                <Burger onClick={()=> props.handleBurgerClick()} />
                <img className="header__logo" src="./images/logo.svg" alt="" />
                <img
                    className="header__search"
                    src="./images/search-btn.svg"
                    alt=""
                />
            </div>
        </HeaderStyled>
    );
};

export default Header;
