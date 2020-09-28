import React from 'react';
import ReactDOM from 'react-dom';
import './Room.css'

function Room() {
    const [isLit, setLit] = React.useState(false);
    const brightness = isLit ? "lit" : "dark";
    const switchSource=isLit ? "checked" : "";
  return (
    <div className={`room ${brightness}`}>
        
        <label className="switch">
  <input type="checkbox"  checked={isLit} onClick={() => setLit(!isLit)}/>
  <span className="slider"></span>
     </label>



         
    </div>
  );
}

export default Room;