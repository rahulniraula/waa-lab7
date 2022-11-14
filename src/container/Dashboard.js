import { useState } from "react";
import Posts from "../component/Posts";
import UpdateComponent from "../component/UpdateComponent";
const Dashboard = () => {
    const [posts,setPosts]=useState([
        { id: 1, title: 'Happiness', author: 'John' },
        { id: 2, title: 'MIU', author: 'Dean' },
        { id: 3, title: 'Enjoy Life', author: 'Jasmine' },
    ]);
    function updateValue(val){
        let post=posts.find(p=>p.id===1);
        
        if(post){
            post.title=val;
            setPosts([...posts]);
        }
        console.log(post);
    }
    return (
        <>
            <Posts posts={posts}>
            </Posts>
            <UpdateComponent updateValue={updateValue}></UpdateComponent>
        </>
    )
}
export default Dashboard;