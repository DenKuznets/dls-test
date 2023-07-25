import { styled } from "styled-components";

const NavStyled = styled.nav`
    overflow: hidden;
    max-height: 0;
    min-height: 3.6rem;
    transition: all 0.4s ease;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 3;
    border-bottom: 1px solid #e9e9e9;
    padding: 0 1.25rem;
    display: flex;
    justify-content: center;
    & > ul {
        display: flex;
        gap: 2rem;
        list-style-type: none;
        & > li {
            overflow: hidden;
            display: flex;
            align-items: center;
            height: 3.6rem;
            line-height: 1rem;
            font-size: 1rem;
            font-style: normal;
            font-weight: 500;
            position: relative;
            img {
                margin-left: 0.25rem;
            }

            .submenu {
                border: 1px solid #e9e9e9;
                min-width: 11rem;
                display: none;
                /* display: flex; */
                grid-template-columns: 1fr 1fr;
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
                    &:last-child {
                        padding-bottom: 1.25rem;
                    }
                    .wrapper {
                        overflow: hidden;
                        margin: 0 1.25rem;
                        width: 100%;
                        display: flex;
                        align-items: center;
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
                    &:hover {
                        & > .submenu {
                            display: flex;
                        }
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
            &:hover {
                cursor: pointer;
                & > .submenu {
                    transition: all 1.2s ease;
                    display: flex;
                }
            }
        }
    }
    @media only screen and (max-width: 620px) {
        display: none;
    }
    @media only screen and (min-width: 621px) {
        &.nav-hidden {
            min-height: 0;
            li,
            .wrapper {
                min-height: 0;
            }
        }
    }
`;

export default NavStyled;
