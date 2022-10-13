import PostSummaryItem from "./PostSummaryItem.js";
import exploreItems from "./posts.js";
const PostSummaryList = () => {
    return(`
           <ul class="list-group ">
              ${exploreItems.map(item=> {
        return (PostSummaryItem(item));
    }).join('')}
           </ul>
    `);
}
export default PostSummaryList;
