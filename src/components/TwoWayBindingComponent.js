import { useState,useEffect } from "react";

export default function TwoWayBinding(){
    const [product,setProduct] = useState({Name:'',Price:0,City:'',Stock:false});
    const [newProduct,setNewProduct] = useState({Name:'',Price:0,City:'',Stock:false});

    function handleName(e){
        setProduct({
            
                Name : e.target.value,
                Price : product.Price,
                
                City : product.City,
                Stock : product.Stock,


        })
    }
    function handlePrice(e){

        setProduct({
            
            Name : product.Name,
            Price :e.target.value,
            
            City : product.City,
            Stock : product.Stock,


    })
    }
    
    function handleCity(e){
        setProduct({
            
            Name : product.Name,
            Price : product.Price,
            
            City : e.target.value,
            Stock : product.Stock,


    })
    }
    
    function handleStock(e){
        setProduct({
            
            Name : product.Name,
            Price : product.Price,
            
            City : product.City,
            Stock : e.target.checked,


    })
    }
    function handleRegister(){
        setNewProduct(product);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <h2>Register product</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd><input type="text"  className="form-control" onChange={handleName}/></dd>
                        <dt>Price</dt>
                        <dd><input type="text"  className="form-control" onChange={handlePrice}/></dd>
                        <dt>City</dt>
                        <dd>
                            <select onChange={handleCity} className="form-select">
                                <option>Delhi</option>
                                <option>Mumbai</option>
                                <option>Hyderabad</option>
                            </select>
                        </dd>
                        <dt>Stock</dt>
                        <dd className="form-switch">
                            <input type="checkbox" className="form-check-input " onChange={handleStock} />Available
                           



                        </dd>
                <button onClick={handleRegister} className="btn btn-primary">Register</button>
                    </dl>
                </div>
                <div className="col-9 p-2">
                    <h2>Summary</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{newProduct.Name}</dd>
                        <dt>Price</dt>
                        <dd>{newProduct.Price}</dd>

                        <dt>City</dt>
                        <dd>{newProduct.City}</dd>

                        <dt>Stock</dt>
                        <dd>{(newProduct.Stock)?"Available":"Out Of Stock"}</dd>
                        </dl>

                </div>
            </div>
        </div>
    );
}