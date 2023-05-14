import "./login.css"

export function Login(){
    return (
<div className="container-fluid">

<form>
<h2>User Login</h2>
<dl>
    <dt>Username</dt>
    <dd><input type="text" className="form-control"></input></dd>
    <dt>Password</dt>
    <dd><input type="password" className="form-control"></input></dd>
    
</dl>
<button className="btn btn-primary">Login</button> 
</form>

</div>
);

}