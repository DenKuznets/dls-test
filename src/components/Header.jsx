import { styled } from "styled-components";

const HeaderStyled = styled.header`
    height: 8.75rem;
    padding-bottom: 1.28rem;
    border-bottom: 1px solid #e9e9e9;
    .header {
        &__top {
            border-bottom: 1px solid #e9e9e9;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1.81rem 1.25rem 1.59rem;
            &-logo {
                margin: 0 auto;
            }
        }
    }
`;

const Header = () => {
    return (
        <HeaderStyled className="header">
            <div className="header__top">
                <div className="container">
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
            <div className="header__bottom"></div>
        </HeaderStyled>
    );
};

export default Header;
