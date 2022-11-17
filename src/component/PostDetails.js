const PostDetails = (props) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <h2>
                    {props.post.title}
                </h2>
                <h4>{props.post.author}</h4>
                <p>{props.post.content}</p>
                <button className="btn btn-primary mx-1">Edit</button>
                <button className="btn btn-primary" onClick={()=>props.deletePost(props.post.id)}>Delete</button>
            </div>
        </div>
    );
};
export default PostDetails;