import { styled } from "styled-components";
import { menuItems } from "../js/menuItems";

const NavMobileStyled = styled.nav`
    top: 0;
    left: -100%;
    position: fixed;
    background-color: rgba(256, 256, 256, 0.8);
    width: 100%;
    transition: 0.4s;
    &.nav-mobile-active {
        left: 0;
    }
    ul {
        height: 100vh;
        background-color: white;
        list-style-type: none;
        width: 80%;
        border: 1px solid #e9e9e9;
        li {
            padding: 0 1.25rem;
            span {
                margin-right: 0.25rem;
            }
            ul {
                height: auto;
                border: none;
                width: 100%;
            }
        }
    }
    .accordion {
        cursor: pointer;
        width: 100%;
        text-align: left;
        outline: none;
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
    .nav-header {
        width: 80%;
        background-color: white;
        padding: 2rem 1.25rem 1.6rem;
        border: 1px solid #e9e9e9;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

const NavMobile = (props) => {
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
        <NavMobileStyled
            onClick={(e) => {
                if (e.target.nodeName === "NAV") {
                    props.handleClose();
                }
            }}
            className={props.className}
        >
            <div className="nav-header">
                <img src="./images/logo.svg" alt="" />
                <img
                    style={{ cursor: "pointer" }}
                    onClick={() => props.handleClose()}
                    src="./images/close-btn.svg"
                    alt=""
                />
            </div>
            <ul>{listToShow}</ul>
        </NavMobileStyled>
    );
};

export default NavMobile;
