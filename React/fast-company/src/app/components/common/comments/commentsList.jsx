import React from "react";
import PropType from "prop-types";

const CommentsList = ({ comments, onRemove }) => {
    return comments.map((comment) => (
        <Comment key={comment._id} {...comment} onRemove={onRemove} />
    ));
};

CommentsList.propTypes = {
    comments: PropType.array,
    onRemove: PropType.func
};

export default CommentsList;
