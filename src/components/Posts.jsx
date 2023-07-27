import { styled } from "styled-components";
import Post from "./Post";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import axios from "axios";
import { filterItems, indexItems } from "../js/utils";

const PostsStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 40px;
    row-gap: 48px;
    justify-content: center;
    padding-top: 3rem;
    .posts__card {
        max-width: 22.5rem;
        cursor: pointer;
        @media only screen and (max-width: 1240px) {
            flex: 0 1 30%;
        }
        @media only screen and (max-width: 856px) {
            flex: 0 1 40%;
        }
        @media only screen and (max-width: 595px) {
            flex: unset;
            width: 100%;
        }
    }
`;

const Posts = (props) => {
    const [loading, setLoading] = useState(true);
    const [postItemsAPI, setPostItemsAPI] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [modalPost, setModalPost] = useState(null);

    useEffect(() => {
        async function fetchData() {
            return await axios
                .get("https://cloud.codesupply.co/endpoint/react/data.json")
                .then((res) => setPostItemsAPI(indexItems(res.data)));
        }
        if (loading) {
            fetchData();
        }

        return () => {
            setLoading(false);
        };
    }, [loading]);

    const handlePostClick = (e) => {
        const post = e.target.closest(".post");
        if (post) {
            const postId = post.id;
            setModalPost(
                postItemsAPI.find((item) => item.id === parseInt(postId))
            );
            setShowModal(true);
        }
    };

    useEffect(() => {
        if (showModal) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
    }, [showModal]);

    const createList = (items) => {
        if (!items) return <div>Loading...</div>;
        return items.map((post, index) => {
            return (
                <div key={index} className="posts__card">
                    <Post postItem={post} />
                </div>
            );
        });
    };

    const listToshow = props.searchText
        ? createList(filterItems(postItemsAPI, props.searchText))
        : createList(postItemsAPI);

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
                {listToshow}
            </PostsStyled>
        </>
    );
};

export default Posts;
