import React from 'react';
import ReactDOM from 'react-dom';
import './Room.css'
import Reddit from './Reddit'

function Room() {
    const [isLit, setLit] = React.useState(false);
    const brightness = isLit ? "lit" : "dark";

    return (
    <div className={`room ${brightness}`}>
        
  <label className="switch">
  <input type="checkbox"   onClick={() => setLit(!isLit)}/>
    <span className="slider"></span>
   </label>
   <Reddit/>

         
    </div>
  );
}

export default Room;