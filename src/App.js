import React,{useState} from 'react';
import Adults from './components/Adults';
import Children from './components/Children';
import Rooms from './components/Rooms';
import './App.css';

function App() {
  
  let [state,setState] =  useState({adults : 1,childrens : 0});
  
  let handleAdultInc = () => {
    setState({
      ...state,
      adults:state.adults + 1
    });
  };
  let handleAdultDec = () => {
    setState({
      ...state ,
      adults:(state.adults -1 )> 1 ? state.adults-1 :1
    })
  };
  let handleChildInc = () => {
    setState({...state , childrens:state.childrens + 1})
  };
  let handleChildDec = () => {
    setState({...state,childrens:(state.childrens -1) > 0 ? state.childrens-1 :0})
  };
  let handleIncrementFour = () => {
    setState({...state,adults:state.adults + 4})
  };
 let handleDecrementFour = () => {
    setState({...state,adults:(state.adults - 4) > 4 ? state.adults - 4 :1})
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-header bg-primary">
              <p className="h3 text-white">Hotel Booking App</p>
            </div>
            <div className="card-body bg-light">
            <Rooms totalPersons = {Math.ceil((state.adults + state.childrens)/4)}
            onIncrementFour = {handleIncrementFour}
            onDecrementFour = {handleDecrementFour}/>
            <Adults onAdultInc = {handleAdultInc} onAdultDec = {handleAdultDec} 
            adults = {state.adults}/>
            <Children onChildInc = {handleChildInc} onChildDec = {handleChildDec} 
            child = {state.childrens}/>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;
