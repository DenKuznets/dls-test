import { styled } from "styled-components";
import { menuItems } from "../js/menuItems";

const NavMobileStyled = styled.nav`
    top: 0;
    left: 0;
    position: fixed;
    background-color: rgba(256, 256, 256, 0.5);
    width: 100vw;
    /* z-index: 999; */
    ul {
        height: 100vh;
        background-color: white;
        list-style-type: none;
        width: 80%;
        li {
            padding: 0 1.25rem;
            span {
                margin-right: 0.25rem;
            }
            ul {
                height: auto;
            }
        }
    }
    .accordion {
        /* background-color: #eee; */
        /* color: #444; */
        cursor: pointer;
        /* padding: 18px; */
        width: 100%;
        /* border: none; */
        text-align: left;
        outline: none;
        /* font-size: 15px; */
        transition: 0.4s;
        padding-bottom: 1rem;
        padding-top: 1rem;
        &:not(:last-child) {
            border-bottom: 1px solid #e9e9e9;
        }
    }

    .active,
    .accordion:hover {
        /* background-color: #ccc; */
    }

    .panel {
        padding: 0 18px;
        display: none;
        background-color: white;
        overflow: hidden;
    }
`;

const NavMobile = () => {
    const handleClick = (e) => {
        e.stopPropagation(); //необходимо, иначе на вложенных списках клик будет срабатывать несколько раз и закрывать панель после открытия
        const accordion = e.target.closest("li").querySelector(".accordion");
        const panel = e.target.closest("li").querySelector(".panel");
        if (accordion) {
            accordion.classList.toggle("active");

            if (panel && panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                if (panel) panel.style.display = "block";
            }
        }
    };
    const createList = (objArr) => {
        return objArr.map((object, index) => {
            if (object.submenu) {
                return (
                    <li onClick={(e) => handleClick(e)} key={index}>
                        <div className="accordion">
                            <span>{object.title}</span>
                            <img src="./images/arrow-down.svg" alt="" />
                        </div>
                        <ul className="panel submenu">
                            {createList(object.submenu)}
                        </ul>
                    </li>
                );
            }
            return (
                <li key={index}>
                    <div className="accordion">{object.title}</div>
                </li>
            );
        });
    };

    const listToShow = createList(menuItems);

    return (
        <NavMobileStyled>
            <ul>{listToShow}</ul>
        </NavMobileStyled>
    );
};

export default NavMobile;
