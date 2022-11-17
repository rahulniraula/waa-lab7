import { useEffect, useState } from "react";
import Posts from "../component/Posts";
import UpdateComponent from "../component/UpdateComponent";
import PostDetails from "../component/PostDetails";
import axios from "axios";
import AddPost from "../component/AddPost";
export const baseUrl="http://localhost:8080/api/v1/"
const Dashboard = () => {
    
    const [posts,setPosts]=useState([
        { id: 1, title: 'Happiness', author: 'John' },
        { id: 2, title: 'MIU', author: 'Dean' },
        { id: 3, title: 'Enjoy Life', author: 'Jasmine' },
    ]);
    const [selectedPost,setSelectedPost]=useState(null);
    useEffect(()=>{fetchPosts()},[]);
    function fetchPosts(){
        axios({
            url:baseUrl+'posts/'
        }).then(resp=>{
            setPosts(resp.data);
        }).catch(err=>{
            console.log(err)
        });
    }
    function deletePost(id){
        axios({
            url:baseUrl+"posts/"+id,
            method:"DELETE"
        }).then(resp=>{
            console.log(resp)
            fetchPosts();
            setSelectedPost(null)
        }).catch();
        console.log(id);
    }
    function updateValue(val){
        let post=posts.find(p=>p.id===1);
        
        if(post){
            post.title=val;
            setPosts([...posts]);
        }
        console.log(post);
    }
    function submitPost(data){
        axios({
            url:baseUrl+"posts/",
            method:"POST",
            data:data
        }).then(resp=>{
            console.log(resp)
            fetchPosts()
        }).catch();
    }
    function setSelectedPostHandler(post){
        setSelectedPost(post)
    }

    return (
        <>
            <Posts posts={posts} setSelectedPost={setSelectedPostHandler} >
            </Posts>
            <UpdateComponent updateValue={updateValue}></UpdateComponent>
            {selectedPost?<PostDetails post={selectedPost} deletePost={deletePost}></PostDetails>:null}
            <AddPost submitPost={submitPost}></AddPost>
        </>
    )
}
export default Dashboard;