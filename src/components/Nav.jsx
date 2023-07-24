import { styled } from "styled-components";
import arrowDown from "../../public/images/arrow-down.svg";

const list = [
    {
        title: "Demos",
        submenu: [],
    },
    {
        title: "Post",
        submenu: [
            {
                title: "Post Header",
                submenu: [],
            },
            {
                title: "Post Layout",
                submenu: [],
            },
            {
                title: "Share Buttons",
                submenu: [],
            },
            {
                title: "Gallery Post",
                submenu: [],
            },
            {
                title: "Video Post",
                submenu: [],
            },
        ],
    },
    {
        title: "Features",
        submenu: [],
    },
    {
        title: "Categories",
        submenu: [],
    },
    {
        title: "Shop",
        submenu: [],
    },
    {
        title: "Buy Now",
    },
];

const NavStyled = styled.nav`
    ul {
        display: flex;
        gap: 2rem;
        list-style-type: none;
        li {
            font-size: 1rem;
            font-style: normal;
            font-weight: 500;
            line-height: 1rem;
            img {
                margin-left: 0.25rem;
            }

            .submenu {
                display: none;
                display: block;
                grid-template-columns: 1fr 1fr;
                position: absolute;
                li {
                    background-color: red;
                    display: flex;
                    span {
                        margin-right: auto;
                    }
                    img {
                        transform: rotate(-90deg);
                        margin-left: auto;
                    }
                }
            }
            &:hover {
                cursor: pointer;
                .submenu {
                    display: block;
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
                        <span>{object.title}</span>
                        <img src={arrowDown} alt="" />
                        <ul className="submenu">
                            {createList(object.submenu)}
                        </ul>
                    </li>
                );
            }
            return <li key={index}>{object.title}</li>;
        });
    };

    const listToShow = createList(list);

    return (
        <NavStyled>
            <ul>{listToShow}</ul>
        </NavStyled>
    );
};

export default Nav;
