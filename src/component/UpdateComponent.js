import { useState } from "react";

const UpdateComponent=(props)=>{
    const [firstValue,setFirstValue]=useState("");
    function setValue(e){
        setFirstValue(e.target.value);
    }
    return (
        <div className="row">
            <div className="col-4 mt-2">
                <input type="text" className="form-control" onChange={setValue} value={firstValue}/>
                <input type="button" className="btn btn-block btn-primary mt-2" value="Change Name" onClick={()=>props.updateValue(firstValue)}></input>
            </div>
        </div>
    );
}
export default UpdateComponent;