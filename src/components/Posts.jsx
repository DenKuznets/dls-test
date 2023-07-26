import { styled } from "styled-components";
import { postItems } from "../js/postItems";
import Post from "./Post";

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
    const listToShow = postItems.map((post, index) => {
        return <Post key={index} postItem={post} />;
    });

    return <PostsStyled className="posts container">{listToShow}</PostsStyled>;
};

export default Posts;
