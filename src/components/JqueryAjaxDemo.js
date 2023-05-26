
import { useState,useEffect } from "react";
import $ from "jquery";



export default function JqueryAjaxDemo(){
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        $.ajax({
            method:"GET",
            url:"https://fakestoreapi.com/users",

            success:function(response){
                setUsers(response);
                console.log(response)
            },
            error:function(xhr){
                // alert(xhr.statusCode)
            }
        })
    },[])
    return(
        <div className="container-fluid">
            <h2>User Details</h2>
            <ol>
                {
                    users.map(user=>
                     <li>${user.userId}</li>   

                     )
                }
            </ol>
        </div>
    )
}