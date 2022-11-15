const PostDetails = (props) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <h2>
                    {props.post.title}
                </h2>
                <h4>{props.post.author}</h4>
                <p>This is the content in the post...</p>
                <button className="btn btn-primary mx-1">Edit</button>
                <button className="btn btn-primary">Delete</button>
            </div>
        </div>
    );
};
export default PostDetails;