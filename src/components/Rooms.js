import React from 'react';

let Rooms = ({onDecrementFour,onIncrementFour,totalPersons})=>{
    
    return (
        <div className="row">
          <div className="col-6">
          <p className="h4"> Total Rooms: </p> 
          </div>
          <div className="col-6">
                <button className = "btn btn-success btn-sm" onClick = {onIncrementFour}>
                <i className="fa fa-plus-circle" />
                </button>
                {totalPersons} 
                <button className = "btn btn-danger btn-sm" onClick = {onDecrementFour}>
                <i className="fa fa-minus-circle" />
                </button> 
          </div>                       
        </div>
        )
}
export default Rooms;