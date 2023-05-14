export function NetflixHeader(){
    return(
        <div className="d-flex justify-content-between p-4">
        <div>
            <h2>Netflix</h2>
        </div>
        <div>
        <div className="input-group me-2">
            <select className="me-2 form-select">
                <option>Language</option>
            </select>
            <button className="btn btn-danger">Signin</button>

        </div>
        </div>
        </div>
    )

}