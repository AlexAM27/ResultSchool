import React from "react";

const Post = ({ id, posts }) => {
   
    
    const getPostById = (id) => {
        return posts.find((post) => post.id === id);
    };
    const post = getPostById(id);
    return <h1>{post ? post.label : `Post with id:${id} not found`}</h1>;
};

export default Post;
