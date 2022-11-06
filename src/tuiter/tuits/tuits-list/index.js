import React from "react";import {useSelector} from "react-redux";

import TuitItem from "./tuit-item";

const TuitsList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                tuitsArray.map(item =>
                    <TuitItem key={item._id} item={item}/> )
            }
        </ul>
    );
};
export default TuitsList;