import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../../services/tuits-thunk";
import {updateTuitThunk} from "../../../services/tuits-thunk";

const TuitItem = (
    {
        item = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.jpg",
            "liked": false,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "unlikes":456,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return (
        <li class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img alt="homepost" class="float-end rounded-pill" height="60px"
                         src={`/images/${item.image}`}/>
                </div>
                <div class="col-10">
                    <div>
                        <span class="fw-bolder">{item.userName} </span> <i
                        class="fa-solid fa-circle-check"></i><span
                        class="text-secondary"> {item.handle} - {item.time}</span>
                        <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(item._id)}></i></div>
                    <div class="mb-1">{item.title}
                    </div>
                    <div class="mb-2">
                        {item.tuit}
                    </div>
                    <div class="row text-muted">
                        <div class="col-2"><i className="bi bi-chat"></i> {item.replies}</div>
                        <div class="col-2"><i className="bi bi-layer-forward"></i> {item.retuits}</div>
                        <div class="col-2">
                            Likes: {item.likes}
                        <i onClick={() => dispatch(updateTuitThunk({
                            ...item,
                            likes: item.likes + 1}))}
                           className="bi bi-heart-fill me-2 text-danger"></i>
                        </div>
                        <div className="col-2">
                            Unlikes: {item.unlikes}
                            <i onClick={() => dispatch(updateTuitThunk({
                                ...item,
                                unlikes: item.unlikes + 1
                            }))}
                            class="bi bi-hand-thumbs-down"></i>
                        </div>
                        <div class="col"><i className="bi bi-share"></i></div>
                    </div>
                </div>
            </div>

        </li>
    );
};

export default TuitItem;