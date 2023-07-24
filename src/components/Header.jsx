import { styled } from "styled-components";
import Nav from "./Nav";

const HeaderStyled = styled.header`
    padding-bottom: 1.28rem;
    height: 8.75rem;
    .header {
        &__top {
            padding: 1.81rem 1.25rem 1.59rem;
            &-content {
                max-width: 72.5rem;
                margin: 0 auto;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            &-logo {
                margin: 0 auto;
            }
        }
        &__bottom {
            padding: 1.32rem 1.25rem 1.25rem;
            display: flex;
            justify-content: center;
            &-content {
                /* max-width: 72.5rem; */
                margin: 0 auto;
                background-color: red;
            }
        }
    }
    hr {
        border: none;
        border-bottom: 1px solid #e9e9e9;
    }
`;

const Header = () => {
    return (
        <HeaderStyled className="header">
            <div className="header__top">
                <div className="header__top-content">
                    <img
                        className="header__top-logo"
                        src="./images/logo.svg"
                        alt=""
                    />
                    <img
                        className="header__top-search"
                        src="./images/search-btn.svg"
                        alt=""
                    />
                </div>
            </div>
            <hr />

            <div className="header__bottom">
                <div className="header__bottom-content"><Nav /></div>
            </div>

            <hr />
        </HeaderStyled>
    );
};

export default Header;
