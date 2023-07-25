import { styled } from "styled-components";
import { menuItems } from "../js/menuItems";

const NavMobileStyled = styled.nav`
    ul {
        list-style-type: none;
    }
    .accordion {
        background-color: #eee;
        color: #444;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        border: none;
        text-align: left;
        outline: none;
        font-size: 15px;
        transition: 0.4s;
    }

    .active,
    .accordion:hover {
        background-color: #ccc;
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
        const accordion = e.target.closest("li").querySelector(".accordion");
        const panel = e.target.closest("li").querySelector(".panel");
        
        if (accordion) {
            accordion.classList.toggle("active");

            if (panel && panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                if(panel) panel.style.display = "block";
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
