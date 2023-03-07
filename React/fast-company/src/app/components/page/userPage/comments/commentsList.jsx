import React, { useState } from "react";
import PropType from "prop-types";
import api from "../../../../api";

const CommentsList = ({ userId }) => {
    const [comments, setComments] = useState();

    useEffect(() => {
        api.comments
            .fetchCommentsForUser(userId)
            .then((data) => setComments(data));
    }, []);

    return (
        <>
            <div class="card mb-2">
                {" "}
                <div class="card-body ">//add comment</div>
            </div>
            {comments && (
                <div class="card mb-3">
                    <div class="card-body ">
                        <h2>Comments</h2>
                        <hr />
                    </div>
                </div>
            )}
        </>
    );
};

CommentsList.propTypes = {
    userId: PropType.string
};

export default CommentsList;
