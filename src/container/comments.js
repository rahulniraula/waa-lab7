import Comment from "../component/comment"

const Comments = (props) => {
    const p = props.comments?.length>0?props.comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>):<div className="alert alert-warning">No Comments Found</div>;
    return (<>
        <h3>Listing Comments</h3>
        {p}
    </>
    );
}
export default Comments;