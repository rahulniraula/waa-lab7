import Post from "./Post";
const posts = (props) => {
    return (
        <div className="row">
            {props.posts.map(post => {
                return <Post key={post.id} post={post}></Post>
            })}
        </div>
    );
}
export default posts;