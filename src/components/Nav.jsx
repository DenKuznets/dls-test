import { styled } from "styled-components";

const list = [
    {
        title: "Demos",
    },
    {
        title: "Post",
        submenu: [
            {
                title: "Post Header",
            },
            {
                title: "Post Layout",
            },
            {
                title: "Share Buttons",
            },
            {
                title: "Gallery Post",
            },
            {
                title: "Video Post",
            },
        ],
    },
    {
        title: "Features",
    },
    {
        title: "Categories",
    },
    {
        title: "Shop",
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
            .submenu {
                display: none;
                position: absolute;
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
                        {object.title}
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
