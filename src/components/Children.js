import React from 'react';

let Children = ({onChildInc,onChildDec,child})=>{
    return(
        <div className="row">
            <div className="col-6">
                <p className="h4">Childrens:</p>
            </div>
            <div className="col-6">
            <button className  = "btn btn-success btn-sm" onClick = {onChildInc}>
            <i className="fa fa-plus-circle"/>
            </button>
            {child}
            <button className  = "btn btn-danger btn-sm" onClick = {onChildDec}>
            <i className="fa fa-minus-circle"/>
            </button>
            </div>
        </div>
    )
}

export default Children;