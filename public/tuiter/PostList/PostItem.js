const PostItem = (item) => {
    return(`
       <li class="list-group-item">
            <div class="row">
                <div class="col-2">
                <img alt="homepost" class="float-end rounded-pill" height="60px" src=../../images/${item.userImage}>
                    </div>
                <div class="col-10">
                    <div>
                    <span class="fw-bolder">${item.userName} </span> <i class="fa-solid fa-circle-check"></i><span
                            class="text-secondary"> ${item.handle} - ${item.time}</span></div>
                    <div class="mb-1">${item.title}
                    </div>
                    <div >                
                    <img alt="homepost" class="float-end rounded mb-2" width="100%"  src=../../images/${item.postImage}>
                    </div>
                    <div class="row text-muted" >
                    <div class="col-3"> <i class="fa-sharp fa-solid fa-comment-dots"> </i> ${item.reply}</div>
                    <div class="col-3"><i class="fa-solid fa-retweet"> </i> ${item.retweet}</div>
                    <div class="col-3"> <i class="fa-regular fa-heart"> </i> ${item.like}</div>
                    <div class="col-3"><i class="fa-solid fa-arrow-up-right-from-square"> </i> </div>
                    </div>
                </div>
            </div>

       </li>
   `);
}
export default PostItem;