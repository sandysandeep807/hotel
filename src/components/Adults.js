import React from 'react';

let Adults = ({onAdultInc,onAdultDec,adults})=>{

    return(
        <div className="row">
            <div className="col-6">
            <p className="h4">Adults:</p>
            </div>
            <div className="col-6">
            <button className = "btn btn-success btn-sm" onClick = {onAdultInc}>
            <i className="fa fa-plus-circle" /> 
            </button>
            {adults}
            <button className = "btn btn-danger btn-sm" onClick = {onAdultDec}>
            <i className="fa fa-minus-circle" />  
            </button>
            </div>           
        </div>
    )
}

export default Adults;