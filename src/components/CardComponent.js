import React from "react";
export default class CardComponent extends React.Component
{
    constructor(props){
        super(props);

    }
    render(){
        return (
            <div className="card m-2 p-2" style={{width:'200px'}}>
    
                  <img src={this.props.product.image} className="card-img-top" height="150"/>
                  <div className="card-header" style={{height:'160px'}}>
                      <p>{this.props.product.title}</p>
                  </div>
                  <div className="card-body">
                      <dl>
                          <dt>Price</dt>
                          <dd>{this.props.product.price}</dd>
                          <dt>Rating</dt>
                          <dd><span className="bi bi-star-fill text-success"></span>{this.props.product.rating.rate}<span>[{this.props.product.rating.count}]</span></dd>
                             
                      </dl>
                  </div>
                  <div className="card-footer">
                      <button id={this.props.product.id}  className="btn btn-danger w-100">
                          <span className="bi bi-cart4">Add to cart</span>
                      </button>
                  </div>
                </div>
        ) 
    }
}

// export function CardComponent(props){

//     return (
//         <div className="card m-2 p-2" style={{width:'200px'}}>

//               <img src={props.product.image} className="card-img-top" height="150"/>
//               <div className="card-header" style={{height:'160px'}}>
//                   <p>{props.product.title}</p>
//               </div>
//               <div className="card-body">
//                   <dl>
//                       <dt>Price</dt>
//                       <dd>{props.product.price}</dd>
//                       <dt>Rating</dt>
//                       <dd><span className="bi bi-star-fill text-success"></span>{props.product.rating.rate}<span>[{props.product.rating.count}]</span></dd>
                         
//                   </dl>
//               </div>
//               <div className="card-footer">
//                   <button id={props.product.id}  className="btn btn-danger w-100">
//                       <span className="bi bi-cart4">Add to cart</span>
//                   </button>
//               </div>
//             </div>
//     )
// }