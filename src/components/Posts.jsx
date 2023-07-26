import { styled } from "styled-components";
import { postItems } from "../js/postItems";
import Post from "./Post";
import { useMemo } from "react";

const PostsStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
    padding-top: 3rem;
    .post {
        width: 30%;
        cursor: pointer;
    }
`;

const Posts = () => {
    const handleClick = (e) => {
        console.log(e.target.closest(".post"));
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
        return <Post id={post.id} key={index} postItem={post} />;
    });

    return (
        <PostsStyled
            onClick={(e) => handleClick(e)}
            className="posts container"
        >
            {listToShow}
        </PostsStyled>
    );
};

export default Posts;
