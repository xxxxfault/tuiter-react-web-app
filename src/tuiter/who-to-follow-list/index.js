import React from "react";
import {useSelector} from "react-redux";
import WhoToFollowListItem
    from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    const whoArray = useSelector(
        (state) => state.who);
    return(
        <ul className="list-group">
            {
                whoArray.map(who =>
                    <WhoToFollowListItem who={who}  key={who._id}/>)
            }
        </ul>
    );
};
export default WhoToFollowList;
