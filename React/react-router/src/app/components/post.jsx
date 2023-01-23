import React from "react";

const Post = ({ match, posts }) => {
    const postId = match.params.postId;
    console.log(postId);
    const getPostById = (id) => {
        return posts.find((post) => post.id === id);
    };
    const post = getPostById(postId);
    return <h1>{post ? post.label : `Post with id:${postId} not found`}</h1>;
};

export default Post;
