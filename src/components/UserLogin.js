import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { date } from "yup";



export default function UserLogin(){
    const [cookies , setCookies , removeCookies] = useCookies(['username']);
    const [UserDetails,setUserDetails] = useState({UserName:'',Password:''});

    function handleUsername(e){
        setUserDetails({
            UserName:e.target.value,
            Password:UserDetails.Password
        })

    }
    function handlePassword(e){
        setUserDetails({
            UserName:UserDetails.UserName,
            Password:e.target.value,
        })

    }
    function handleLogin(){
            setCookies('username',UserDetails.UserName,{path:"/",expires: new Date("2023-05-17 17:59")})
            alert("Login Success...");

    }
    function handleRemove(){
        removeCookies('username')
        alert("Removed");

    }
    useEffect(()=>{
        if(cookies.username == undefined){
            alert("Please login")
        }
    })
    return (
        <div className="container-fluid">
            <h2>User Login</h2>
            <dl>
                <dt>Username</dt>
                <dd><input type="text" onChange={handleUsername} /> </dd>

                <dt>Password</dt>
                <dd><input type="password" onChange={handlePassword} /> </dd>
            </dl>
            <button onClick={handleLogin}>Login</button>
            <h3>Home</h3>
            Hello! {cookies.username}
               <button className="btn btn-danger" onClick={handleRemove}>SignOut</button> 

        </div>
    )
}