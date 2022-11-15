const post=(props)=>{
    return (
        <div className="col-3 postBody"  onClick={()=>props.setSelectedPost(props.post)}>
            <p>Id:{props.post.id}</p>
            <p>Title:{props.post.title}</p>
            <p>Author:{props.post.author}</p>
        </div>
    );
};
export default post;