import { styled } from "styled-components";

const ModalStyled = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 4;
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
        padding: 2rem;
        background-color: white;
        width: 95%;
        max-width: 40rem;
        overflow: hidden;
        position: relative;
    }
    button {
        position: absolute;
        top: 2%;
        right: 1rem;
        color: black;
        cursor: pointer;
    }
`;

const Modal = (props) => {
    const handleClick = (e) => {
        if (
            e.target.classList.contains("close-btn") ||
            e.target.classList.contains("modal")
        ) {
            props.handleCloseModal();
        }
    };
    return (
        <ModalStyled className="modal" onClick={(e) => handleClick(e)}>
            <div className="content">
                <button className="close-btn">X</button>
                {props.children}
            </div>
        </ModalStyled>
    );
};

export default Modal;
