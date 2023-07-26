import { postItems } from "../js/postItems";
import Post from "./Post";

const Posts = () => {
    const listToShow = postItems.map((post, index) => {
        return <div key={index}>{post.title}</div>;
    });

    return <Post postItem={postItems[0]} />;
};

export default Posts;
