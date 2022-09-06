import React, { useRef } from 'react';

export default function Dropzone(props){
    const ref = useRef();
    function fileHandler(event){
      props.event(event.target.files[0])
    }
  return (
    <>
      <div style={{display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
        <input type="file" value={props.img} onChange={(event)=>{fileHandler(event)}} ref={ref}/>
      </div>  
    </>
  )
}