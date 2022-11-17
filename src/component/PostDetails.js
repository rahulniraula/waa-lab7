import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Comments from "../container/comments";
import { baseUrl } from "../container/Dashboard";
import SelectedPostContext from "../context/selectedPostContext";


const PostDetails = (props) => {
    const fetchPost=(id)=>{
        axios({
            url:baseUrl+"posts/"+id+"/"
        }).then(resp=>{
            setPost(resp.data)
        }).catch();
    };
    const selectedPost=useContext(SelectedPostContext)
    const [post,setPost]=useState({});
    useEffect(()=>{
        fetchPost(selectedPost.id)
    },[selectedPost.id]);
    return (
        <div className="row">
            <div className="col-md-12">
                <h2>
                    {post.title}
                </h2>
                <h4>{post.author}</h4>
                <p>{post.content}</p>
                <button className="btn btn-primary mx-1">Edit</button>
                <button className="btn btn-primary" onClick={()=>props.deletePost(post.id)}>Delete</button>
                <Comments comments={post.comments}></Comments>
            </div>
        </div>
    );
};
export default PostDetails;