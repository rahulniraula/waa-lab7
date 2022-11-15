import { useState } from "react";
import Posts from "../component/Posts";
import UpdateComponent from "../component/UpdateComponent";
import PostDetails from "../component/PostDetails";
const Dashboard = () => {
    const [posts,setPosts]=useState([
        { id: 1, title: 'Happiness', author: 'John' },
        { id: 2, title: 'MIU', author: 'Dean' },
        { id: 3, title: 'Enjoy Life', author: 'Jasmine' },
    ]);
    const [selectedPost,setSelectedPost]=useState(null);
    function updateValue(val){
        let post=posts.find(p=>p.id===1);
        
        if(post){
            post.title=val;
            setPosts([...posts]);
        }
        console.log(post);
    }
    function setSelectedPostHandler(post){
        setSelectedPost(post)
    }

    return (
        <>
            <Posts posts={posts} setSelectedPost={setSelectedPostHandler}>
            </Posts>
            <UpdateComponent updateValue={updateValue}></UpdateComponent>
            {selectedPost?<PostDetails post={selectedPost} ></PostDetails>:null}
        </>
    )
}
export default Dashboard;