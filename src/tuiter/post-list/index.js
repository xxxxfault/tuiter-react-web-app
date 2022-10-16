import React from "react";
import postsArray from './posts.json';
import PostItem
    from "./post-item";

const PostSummaryList = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(item =>
                    <PostItem item={item}/> )
            }
        </ul>
    );
};
export default PostSummaryList;