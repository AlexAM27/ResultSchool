import React from "react";
import { useHistory } from "react-router-dom";

const Post = ({ id, posts }) => {
    const history = useHistory();
    const getPostById = (id) => {
        return posts.find((post) => post.id === id);
    };

    const handleSave = () => {
        history.replace("/posts");
    };
    const post = getPostById(id);
    return (
        <>
            <h2>{post ? post.label : `Post with id:${id} not found`}</h2>
            <button
                onClick={() => {
                    handleSave();
                }}
            >
                Save
            </button>
        </>
    );
};

export default Post;
