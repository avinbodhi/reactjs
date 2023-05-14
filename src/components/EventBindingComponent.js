import { useState,useEffect } from "react";


export default function EventBindigComponebt(){
    const [userName,setUserName]=useState('Keb');
   
   function handleUserName(e){
       setUserName(e.target.value)
       console.log(e.target.value)
   }
    return (
        <div className="container-fluid">
            <dl>
                <dt> User Name</dt>
                <dd><input type="text" value={userName} onChange={handleUserName}></input></dd>
            </dl>
        <h3>Hello ! {userName}</h3>
        </div>


    );
}