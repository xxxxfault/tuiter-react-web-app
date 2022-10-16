import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
            <div class="row">
                        <div class="row ">
                <div class="col-11 position-relative ">
                    <span class="position-absolute wd-search-tuiter"><i class="fa-solid fa-magnifying-glass"></i></span>
                    <input class="form-control ps-5 rounded-pill "
                           placeholder="Search Tuiter">

                </div>
                <div class="col-1">
                    <i class="fa-sharp fa-solid fa-gear pt-3  fa-lg"></i>
                </div>
            </div>
           </div>
           
           <ul class="nav mt-2 mb-2 nav-tabs">
                    <li class="nav-item">
                    <a class="nav-link active  " href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="sports.html">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           <!-- image with overlaid text -->
                     <div class="position-relative">
                <img alt="starship" src="../../images/starship.jpg" width="100%">
                <h1 class="position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h1>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
