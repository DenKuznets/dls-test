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

const Posts = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalPost, setModalPost] = useState(null);

    const handleClick = (e) => {
        const post = e.target.closest(".post");
        if (post) {
            // console.log(e.target.closest(".post").id);
            const postId = post.id;
            setModalPost(
                postItemsIndexed.find((item) => item.id === parseInt(postId))
            );
            // console.log(modalPost);
            // setModalPost(e.target.closest(".post").id);
            setShowModal(true);
        }
    };

    const indexPosts = (posts) =>
        posts.map((post, index) => {
            return {
                ...post,
                id: index,
            };
        });

    const postItemsIndexed = indexPosts(postItems);

    const listToShow = postItemsIndexed.map((post, index) => {
        return (
            <div key={index} className="posts__card">
                <Post postItem={post} />
            </div>
        );
    });

    useEffect(() => {
        if (showModal) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
    }, [showModal]);

    return (
        <>
            {showModal && (
                <Modal handleCloseModal={() => setShowModal(false)}>
                    <Post postItem={modalPost} />
                </Modal>
            )}
            <PostsStyled
                onClick={(e) => handleClick(e)}
                className="posts container"
            >
                {listToShow}
            </PostsStyled>
        </>
    );
};

export default Posts;
