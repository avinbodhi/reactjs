import React from "react";
import  CardComponent  from "./CardComponent";


export default class ShoppingClassDemo extends React.Component
{
    //config state in class 
    constructor(props){
        super(props);
        this.state = {
            categories:[],
            products:[]
        }
        //without bind event trigger wont work 
        // first way
        // this.handleCategoryChange = this.handleCategoryChange.bind(this)
    }

    GetCategories(){
        fetch('https://fakestoreapi.com/products/categories')
        .then(response=>response.json())
        .then(data=>{
            data.unshift('all')
            this.setState({
                categories:data
            })
        })
    }

    GetProducts(url){
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            this.setState({
                products:data
            })
        })
    }
    handleCategoryChange(e){
        
        if (e.target.value=="all"){
            this.GetProducts('https://fakestoreapi.com/products');
        }
        else{
            this.GetProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
        }
    }

    componentDidMount(){
        this.GetCategories();
        this.GetProducts('https://fakestoreapi.com/products');

    }
    render(){
        return(
            <div className="container">
                <header className="bg-danger p-2 text-white text-center">
                    <span className="bi bi-cart">Shopping Cart</span> 
                </header>
                <section className="row">
                    <nav className="col-3">
<h2>Select Category</h2>
{/* second way of binding .... */}
<select onChange={this.handleCategoryChange.bind(this)} className="form-select">
{
    this.state.categories.map(category=>
            <option key={category} value={category}>{category}</option>
    )
}
</select>
                    </nav>
<main className="col-9">
<div className="d-flex flex-wrap">
        {
            this.state.products.map(product=>
            //     <div className="card m-2 p-2 w-25">
            //     <img src={product.image} className="card-img-top" height="150"/>
            //     <div className="card-header" style={{height:'160px'}}>
            //         <p>{product.title}</p>
            //     </div>
            //     <div className="card-body">
            //         <dl>
            //             <dt>Price</dt>
            //             <dd>{product.price}</dd>
            //             <dt>Rating</dt>
            //             <dd><span className="bi bi-star-fill text-success"></span>{product.rating.rate}<span>[{product.rating.count}]</span></dd>
                         
            //         </dl>
            //     </div>
            //     <div className="card-footer">
            //         <button id={product.id}  className="btn btn-danger w-100">
            //             <span className="bi bi-cart4">Add to cart</span>
            //         </button>
            //     </div>
            // </div>
            <CardComponent product={product} />
          )
        }

   
</div>
</main>
<aside>

</aside>
                </section>
            </div>
        )
    }
}