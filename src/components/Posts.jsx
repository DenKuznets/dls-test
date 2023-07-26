import { postItems } from "../js/postItems";

const Posts = () => {
    const listToShow = postItems.map((post, index) => {
        return <div key={index}>{post.title}</div>;
    });

    return <div>{listToShow}</div>;
};

export default Posts;
