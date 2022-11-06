const PostItem = (
    {
        item
    }) => {
    return (
        <li class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img alt="homepost" class="float-end rounded-pill" height="60px" src={`/images/${item.userImage}`}/>
                </div>
                <div class="col-10">
                    <div>
                        <span class="fw-bolder">{item.userName} </span> <i class="fa-solid fa-circle-check"></i><span
                        class="text-secondary"> {item.handle} - {item.time}</span></div>
                    <div class="mb-1">{item.title}
                    </div>
                    <div>
                        <img alt="homepost" class="float-end rounded mb-2" width="100%" height="300px" src={`/images/${item.postImage}`}/>
                    </div>
                    <div class="row text-muted">
                        <div class="col-3"><i className="bi bi-chat"></i> {item.reply}</div>
                        <div class="col-3"><i className="bi bi-layer-forward"></i> {item.retweet}</div>
                        <div class="col-3"><i className="bi bi-heart"></i> {item.like}</div>
                        <div class="col-3"><i className="bi bi-share"></i></div>
                    </div>
                </div>
            </div>

        </li>
    );
};
export default PostItem;