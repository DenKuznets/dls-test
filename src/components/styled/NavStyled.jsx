import { styled } from "styled-components";

const NavStyled = styled.nav`
    min-height: 3.6rem;
    transition: all 1s ease;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 3;
    border-bottom: 1px solid #e9e9e9;
    padding: 0 1.25rem;
    display: flex;
    justify-content: center;
    &.nav-hidden {
        top: -100px;
    }
    & > ul {
        transition: all 1.4s ease;
        display: flex;
        gap: 2rem;
        list-style-type: none;
        & > li {
            display: flex;
            align-items: center;
            height: 3.6rem;
            line-height: 1rem;
            font-size: 1rem;
            font-style: normal;
            font-weight: 500;
            position: relative;
            &:hover > li {
                color: #969696;
            }
            &:hover {
                cursor: pointer;
                & > .submenu {
                    transition: all 0.4s ease;
                    display: flex;
                }
            }

            img {
                margin-left: 0.25rem;
            }

            .submenu {
                border: 1px solid #e9e9e9;
                min-width: 11rem;
                display: none;
                /* display: flex; */
                position: absolute;
                flex-direction: column;
                top: 100%;
                left: 0;
                z-index: 3;
                background-color: white;
                li {
                    display: flex;
                    position: relative;
                    padding-top: 1.25rem;
                    &:hover {
                        & > .submenu {
                            display: flex;
                        }
                    }
                    &:last-child {
                        padding-bottom: 1.25rem;
                    }

                    &:not(:first-child) {
                        padding-top: 0.5rem;
                        .wrapper {
                        }
                    }
                    &:not(:last-child) {
                        .wrapper {
                            padding-bottom: 0.5rem;
                            border-bottom: 1px solid #e9e9e9;
                        }
                    }
                    &:only-child {
                        .wrapper {
                            border: none;
                            padding: 0;
                        }
                    }

                    .wrapper {
                        /* overflow: hidden; */
                        margin: 0 1.25rem;
                        width: 100%;
                        display: flex;
                        align-items: center;
                    }
                    span {
                        margin-right: auto;
                    }
                    img {
                        transform: rotate(-90deg);
                        margin-left: auto;
                    }
                    .submenu {
                        top: 0;
                        left: 100%;
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 620px) {
        display: none;
    }
`;

export default NavStyled;
