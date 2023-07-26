import { styled } from "styled-components";

const SubmenuStyled = styled.ul`
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
    color: #000;
    font-family: Roboto;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.8125rem;
    li {
        position: relative;
        &:hover {
            & > .submenu {
                display: flex;
                top: 0;
                left: 100%;
            }
        }
        &:first-child {
            .wrapper {
                padding-top: 1.25rem;
            }
        }
        &:last-child {
            .wrapper {
                padding-bottom: 1.25rem;
            }
        }
    }

    .hover-effect {
        &:hover {
            color: #969696;
            span {
                margin-left: 0.5rem;
            }
        }
    }

    .wrapper {
        display: flex;
        margin: 0 1.25rem;
        padding: 0.5rem 0;
        border-bottom: 1px solid #e9e9e9;
        img {
            transform: rotate(-90deg);
            margin-left: auto;
        }
    }
`;

const Submenu = (props) => {
    const createList = (objArr) => {
        return objArr.map((object, index) => {
            return (
                <li key={index}>
                    <div className="hover-effect">
                        <div className="wrapper">
                            <span>{object.title}</span>
                            {object.submenu && (
                                <img src="./images/arrow-down.svg" alt="" />
                            )}
                        </div>
                    </div>
                    {object.submenu && (
                        <Submenu className="submenu" list={object.submenu} />
                    )}
                </li>
            );
        });
    };

    const listToShow = createList(props.list);

    return (
        <SubmenuStyled className={props.className}>{listToShow}</SubmenuStyled>
    );
};

export default Submenu;
