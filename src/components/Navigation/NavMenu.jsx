import { styled } from "styled-components";
import { menuItems } from "../../js/menuItems";
import Submenu from "./Submenu";

const createList = (objArr) => {
    return objArr.map((object, index) => {
        if (object.submenu) {
            return (
                <li key={index}>
                    <span>{object.title}</span>
                    <img src="./images/arrow-down.svg" alt="" />
                    <Submenu className="submenu" list={object.submenu} />
                </li>
            );
        }
        return (
            <li key={index}>
                <span>{object.title}</span>
            </li>
        );
    });
};

const listToShow = createList(menuItems);

const NavMenuStyled = styled.ul`
    min-height: 3.6rem;
    justify-content: center;
    gap: 2rem;
    transition: all 1.4s ease;
    display: flex;
    list-style-type: none;

    & > li {
        display: flex;
        align-items: center;
        line-height: 1rem;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        position: relative;
        cursor: pointer;

        &:hover {
            & > .submenu {
                transition: all 0.4s ease;
                display: flex;
            }
        }

        img {
            margin-left: 0.25rem;
        }

        span {
            height: 100%;
            text-align: center;
            vertical-align: middle;
            display: flex;
            align-items: center;
            &:hover {
                color: #969696;
            }
        }
    }
`;

const NavMenu = () => {
    return <NavMenuStyled>{listToShow}</NavMenuStyled>;
};

export default NavMenu;
