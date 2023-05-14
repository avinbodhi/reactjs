import { useState, useEffect } from "react";
export default function ShoppingComponent(){



    const [categories,setCategories] = useState([]);
    const [cartItems,setCartItems] = useState([]);
    const [itemCounts,setItemCounts] = useState([0]);

    function LoadCategories(){
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>{
                json.unshift('all')
                    setCategories(json);
                    console.log(json)
            })

    }

    const [products,setProducts] = useState([]);
    function LoadProducts(url){
        fetch(url)
            .then(res=>res.json())
            .then(json=>{
                    setProducts(json);
                    console.log(json)
            })

    }

    function LoadProductsByCategory(e){
        if (e.target.value=="all"){
            LoadProducts('https://fakestoreapi.com/products');
        }
        else{
            LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
        }
    }

    function handleAddtoCart(e){
        alert(e.target.id)
        fetch(`https://fakestoreapi.com/products/${e.target.id}`)
        .then(res=>res.json())
        .then(json=>{
                console.log(json)
                // setCartItems(json)
                cartItems.push(json);
                GetCartItemsCount()
                console.log(cartItems.length)
        })
    }

    function GetCartItemsCount(){
        setItemCounts(cartItems.length)
    }

    function handleDelete(e){
        alert(e.target.id)
        // cartItems.filter(w => w.id !==3)

        cartItems.pop(cartItems[e.target.id]);
    //    ~rindex && cartItems.splice(rindex, 1);
    //    GetCartItemsCount()

    }
    useEffect(()=>{
        LoadCategories();
        LoadProducts('https://fakestoreapi.com/products');
    },[cartItems.length])
    return (
        <div className="container">
            <header className="row bg-danger text-white text-center p-2">
                <h1><span className="bi bi-cart">Shopping Home</span></h1>
            </header>
            <section className="row">
                <nav className="col-3">
                     <div>
                         <label>Select a Category</label>
                         <div>
                             <select onChange={LoadProductsByCategory} className="form-select">
                                    {
                                        categories.map(category=>
                                        <option value = {category} key = {category}>{category.toUpperCase()}</option>
                                        )
                                    }
                             </select>
                         </div>
                     </div>
                </nav>
                <main className="col-7 d-flex flex-wrap overflow-auto" height="500">
                {
                    products.map(product=>
                        <div className="card m-2 p-2 w-25">
                            <img src={product.image} className="card-img-top" height="150"/>
                            <div className="card-header" style={{height:'160px'}}>
                                <p>{product.title}</p>
                            </div>
                            <div className="card-body">
                                <dl>
                                    <dt>Price</dt>
                                    <dd>{product.price}</dd>
                                    <dt>Rating</dt>
                                    <dd><span className="bi bi-star-fill text-success"></span>{product.rating.rate}<span>[{product.rating.count}]</span></dd>
                                     
                                </dl>
                            </div>
                            <div className="card-footer">
                                <button id={product.id} onClick={handleAddtoCart} className="btn btn-danger w-100">
                                    <span className="bi bi-cart4">Add to cart</span>
                                </button>
                            </div>
                        </div>

                    )
                }
                </main>
                <aside className="col-2 p-2">
                    <button className="btn btn-warning w-100">
                        <span className="bi bi-cart3">Total Items in cart[{itemCounts}]</span>
                    </button>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Preview</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.map(item=>
                                    <tr key={item.id}>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td><img src={item.image} width="50" height="50"/></td>
                                        <td>
                                        <button id={item.id} onClick={handleDelete} className="btn btn-danger"><span className="bi bi-trash"></span></button>
                                        </td>
                                    </tr>
                                    )
                            }
                        </tbody>
                    </table>
                </aside>
            </section>
        </div>
    );

}