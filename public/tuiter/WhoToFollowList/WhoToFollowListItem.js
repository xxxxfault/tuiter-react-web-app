const WhoToFollowListItem = (who) => {
    return(`
       <li class="list-group-item">
                    <div class="row">
                        <div class="col-2">
                            <img alt="java" height="50px" src=${who.avatarIcon} width="50px">
                        </div>
                        <div class="col-7">
                            <span class="fw-bolder">${who.userName}</span> <i class="fa-solid fa-circle-check"></i>
                            <div class="text-secondary">@${who.handle}</div>
                        </div>
                        <div class="col-3">
                            <button class="btn rounded-pill btn-primary">Follow</button>
                        </div>
                    </div>
                </li>
   `);
}
export default WhoToFollowListItem;