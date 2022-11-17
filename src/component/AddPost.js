import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../container/Dashboard";

export default function AddPost(props){
    const [data,setData]=useState(
        {title:'',author:'',content:''}
    );
    
     function valueChanged(e){
         setData((state)=>{
            return {...state,[e.target.name]:e.target.value}
         });
    }
    function submitPost(){
        props.submitPost(data)
    }
    return (
        <div className="row">
            <div className="col-md-12">
                <h2 className="text-center">Create Post</h2>
            </div>
            <div className="col-md-12">
                <label className="control-label">Post Title </label>
                <input type="text" className="form-control"  name="title" value={data.title} onChange={valueChanged}></input>
            </div>
            <div className="col-md-12">
                <label className="control-label">Post Author </label>
                <input type="text" className="form-control"  name="author" onChange={valueChanged}></input>
            </div>
            <div className="col-md-12">
                <label className="control-label">Post Content </label>
                <input type="text" className="form-control"  name="content" onChange={valueChanged}></input>
            </div>
            <div className="col-md-12 mt-3">
                <button className="btn btn-primary btn-block" value="Create Post" onClick={submitPost}>Create Post</button>
            </div>
        </div>
    );
}