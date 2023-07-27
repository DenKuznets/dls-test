import { styled } from "styled-components";
import { postItems } from "../js/postItems";
import Post from "./Post";
import { useEffect, useMemo, useState } from "react";
import Modal from "./Modal";

const PostsStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
    padding-top: 3rem;
    .posts__card {
        width: 100%;
        max-width: 30%;
        cursor: pointer;
        @media only screen and (max-width: 856px) {
            max-width: 45%;
        }
        @media only screen and (max-width: 595px) {
            max-width: unset;
        }
    }
`;

const Posts = (props) => {
    const postItemsIndexed = useMemo(
        () =>
            postItems.map((postItem, index) => {
                return {
                    ...postItem,
                    id: index,
                };
            }),
        []
    );
    const [showModal, setShowModal] = useState(false);
    const [modalPost, setModalPost] = useState(null);
    const [postItemsFiltered, setPostItemsFiltered] =
        useState(postItemsIndexed);

    const handlePostClick = (e) => {
        const post = e.target.closest(".post");
        if (post) {
            const postId = post.id;
            setModalPost(
                postItemsFiltered.find((item) => item.id === parseInt(postId))
            );
            setShowModal(true);
        }
    };

    useEffect(() => {
        if (showModal) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
    }, [showModal]);

    useEffect(() => {
        setPostItemsFiltered(
            postItemsIndexed.filter((postItem) => {
                return postItem.title
                    .toLowerCase()
                    .includes(props.searchText.toLowerCase());
            })
        );
    }, [props.searchText, postItemsIndexed]);

    const listToShow = postItemsFiltered.map((post, index) => {
        return (
            <div key={index} className="posts__card">
                <Post postItem={post} />
            </div>
        );
    });

    return (
        <>
            {showModal && (
                <Modal handleCloseModal={() => setShowModal(false)}>
                    <Post postItem={modalPost} />
                </Modal>
            )}
            <PostsStyled
                onClick={(e) => handlePostClick(e)}
                className="posts container"
            >
                {listToShow}
            </PostsStyled>
        </>
    );
};

export default Posts;
