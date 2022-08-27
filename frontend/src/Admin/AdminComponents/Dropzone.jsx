import React, { useRef, useState } from 'react';
import { useEffect } from 'react';

export default function Dropzone(props){
    const ref = useRef();
    const [img, setImg] = useState("./Placeholder.png");
    function fileHandler(event){
      imageViewer(event.target.files[0]);
    }
    useEffect(()=>{
      props.event(img)
    },[img])
    function imageViewer(file){
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file)
        fileReader.onload = (data) =>{
          setImg(data.target.result)
        }
    }
    function Trigger(){
        ref.current.click();
    }
  return (
    <>
      <div style={{width:"385px",height:"350px",display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
        <input type="file" onChange={(event)=>{fileHandler(event)}} ref={ref} hidden/>
        <img style={{width:"385px",height:"350px"}} src={img} onClick={Trigger}/>
      </div>  
    </>
  )
}
