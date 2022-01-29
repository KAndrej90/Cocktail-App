import React from "react";

export default function Input({newName}) {

  const changeValue=(e) =>{
    let name = e.target.value;
    newName(name);
  }

  return (
      <div >
        <input 
        type='text' 
        placeholder ='  stop drinking!' 
        id='koktel'  
        onChange={changeValue}
        autoFocus={true}>
        </input>
      </div>
  );
}