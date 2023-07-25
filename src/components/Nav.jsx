import { styled } from "styled-components";
import arrowDown from "../../public/images/arrow-down.svg";
import { menuItems } from "../js/menuItems";

const NavStyled = styled.nav`
    & > ul {
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
                li {
                    display: flex;
                    position: relative;
                    padding-top: 1.25rem;
                    &:last-child {
                        padding-bottom: 1.25rem;
                    }
                    .wrapper {
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
`;

const Nav = () => {
    const createList = (objArr) => {
        return objArr.map((object, index) => {
            if (object.submenu) {
                return (
                    <li key={index}>
                        <div className="wrapper">
                            <span>{object.title}</span>
                            <img src={arrowDown} alt="" />
                        </div>
                        <ul className="submenu">
                            {createList(object.submenu)}
                        </ul>
                    </li>
                );
            }
            return (
                <li key={index}>
                    <div className="wrapper">{object.title}</div>
                </li>
            );
        });
    };

    const listToShow = createList(menuItems);

    return (
        <NavStyled>
            <ul>{listToShow}</ul>
        </NavStyled>
    );
};

export default Nav;
