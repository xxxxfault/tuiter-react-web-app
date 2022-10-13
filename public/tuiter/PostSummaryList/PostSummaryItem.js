const PostSummaryItem = (item) => {
    return(`
       <li class="list-group-item">
            <div class="row">
                <div class="col ">
                    <div class="text-secondary">${item.topic}</div>
                    <div><span class="fw-bolder">${item.userName} </span> <i class="fa-solid fa-circle-check"></i><span
                            class="text-secondary"> - ${item.time}</span></div>
                    <div class="fw-bolder">${item.title}
                    </div>
                </div>
                <div class="col-4"><img alt="react" class="float-end rounded" height="100px" src=../../images/${item.image}
                                        width="100px"></div>
            </div>
             <div class="text-secondary">${item.tweets}</div>
       </li>
   `);
}
export default PostSummaryItem;