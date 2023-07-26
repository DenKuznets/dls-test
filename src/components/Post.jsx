import React from "react";
import { styled } from "styled-components";

const PostStyled = styled.div`
    max-width: 100%;
    min-width: 15rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* outline: 1px solid red; */
    .post {
        &__image {
            max-width: 100%;
            width: 100%;
            height: 14.375rem;
            background-color: gray;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        &__tags {
            color: #eb0028;
            font-size: 0.8125rem;
            font-weight: 700;
            line-height: 0.8125rem;
        }
        &__title {
            color: #000;
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 1.875rem;
        }
        &__info {
            display: flex;
            align-items: center;
            gap: 0.31rem;
            color: #9b9b9b;
            font-size: 0.75rem;
            font-weight: 400;
            line-height: 0.75rem;
            &-author {
                color: #000;
                font-weight: 500;
            }
        }
        &__text {
            color: #929292;
            font-size: 0.875rem;
            font-weight: 400;
            line-height: 1.25rem;
        }
    }
`;

const Post = ({ postItem }) => {
    // console.log(postItem);

    return (
        <PostStyled className="post">
            <div className="post__image">
                <img src="./images/post-img.jpg" alt="" />
            </div>
            <div className="post__tags">{postItem.tags}</div>
            <h2 className="post__title">{postItem.title}</h2>
            <div className="post__info">
                <span className="post__info-author">{postItem.autor}</span>
                <img
                    src="./images/bullet.svg"
                    alt="gray dot"
                    className="bullet"
                />
                <span className="post__info-date">{postItem.date}</span>
                <img
                    src="./images/bullet.svg"
                    alt="gray dot"
                    className="bullet"
                />
                <span className="post__info-views">{postItem.views} Views</span>
            </div>
            <div className="post__text">{postItem.text}</div>
        </PostStyled>
    );
};

export default Post;
