import { useState } from "react"

export default function FormComponent(){

    const [users] = useState([
        {UserId:'john'},
        {UserId:'john12'},
        {UserId:'john3'},
        {UserId:'john4'},
        {UserId:'john5'}
    ]);
    const [userMsg,setUserMsg] = useState('');
    const [userIdValid,setUserIdValid] = useState(false);
    const [capsStatus,setCapsStatus] = useState(false);
    const [cityMsg,setCityMsg] = useState(false);
    
    const [userDetails, setUserDetails]=useState({UserId:'',Password:'',City:''});
    const [passMsg,setPassMsg] = useState('');


    function VerifyUserId(e){
        for (var user of users){
            if (e.target.value==user.UserId){
                setUserMsg('Not Available');
                setUserIdValid(false);

                break;

            }else{
                setUserMsg('Available');
                setUserIdValid(true);

            }
        }
    }
    function hideUserMsg(e){
        if(e.target.value==''){
            setUserMsg('User id required');
        }
        else
        {setUserMsg('');
    }    
    }

    function hidePassMsg(){
        setPassMsg('');
        setCapsStatus(false);
             
    }
    function VerifyPassword(e){
        if(e.target.value.match(/(?=.*[A-Z])\w{4,10}/))
            {
                setPassMsg('Strong Password')
            }
            else{
                if (e.target.value.length > 4){
                    setPassMsg('Poor Password')
                }else{
                    setPassMsg('Weak Password')
    
                }
        }
    }


    function VerifyCaps(e){

        console.log(e.keyCode)

        if(e.keyCode>60 && e.KeyCode<=90 || e.which>60 && e.which<=90){
            setCapsStatus(true);
        }
        else{
            setCapsStatus(false);
        }

    }
    function VerifyCity(e){
        if(e.target.value=="nocity"){
            setCityMsg('Select City')
        }
    }

    function HandleUserChange(e){
        setUserDetails({
            UserId:e.target.value,
            Password:userDetails.Password,
            City:userDetails.City
        })
    }
   
    function HandlePassChange(e){
        setUserDetails({
            UserId:userDetails.UserId,
            Password:e.target.value,
            City:userDetails.City
        })
    }
    function RegisterClick(){
        alert(JSON.stringify( userDetails))
    }
    return (
        <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
                    <dt>User Id</dt>
                    <dd>
                        <input type="text" onChange={HandleUserChange} onBlur={hideUserMsg} onKeyUp={VerifyUserId} />
                    </dd>
                    <dd><span className={(userIdValid==true)?'text text-success':'text-danger'} >{userMsg}</span></dd>


                    <dt>Password</dt>
                    <dd>
                        <input type="password" onChange={HandlePassChange} onKeyPress={VerifyCaps} onBlur={hidePassMsg} onKeyUp={VerifyPassword} />
                    </dd>
                    <dd><span  >{passMsg}</span></dd>
                    <dd className={(capsStatus==true)?'d-block':'d-none'}>
                        <span className="bi bi-exclamation-triangle"></span> Caps ON
                    </dd>
                    <dt>Select Your City</dt>
                    <dd>
                        
                        <select onChange={VerifyCity}>
                            <option value="nocity">Select Your City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hyderabad">Hyderabad</option>
                        </select>
                        <dd><span  className="text-danger">{cityMsg}</span></dd>

                    </dd>
                    <dd><button className="btn btn-primary" onClick={RegisterClick} >Register</button></dd>
            </dl>

        </div>
    )
}