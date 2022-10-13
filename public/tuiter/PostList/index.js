import PostItem from "./PostItem.js";
import homeItems from "./posts.js";
const PostList = () => {
    return(`
           <ul class="list-group ">
              ${homeItems.map(item=> {
        return (PostItem(item));
    }).join('')}
           </ul>
    `);
}
export default PostList;
