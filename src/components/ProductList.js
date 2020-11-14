import React from 'react';
import '../../src/style.css'

const ProductList = (props) => {
    const products = props.products;
    return (
        <div className="container-fluid rounded border d-block mt-5 p-5 fade-in">
            <h2 className="text-center">Premium Coffee Goods</h2>
            <div className="d-flex flex-wrap justify-content-center">
                {
                    products.map(p => {
                        return (
                            <div key={p.product_id} className="card col-sm-3 m-3" style={{width: "18rem"}}>
                                <img src={p.product_img} className="card-img-top" alt={p.product_name}/>
                                <div className="card-body d-flex flex-column justify-content-between">
                                        <h5 className="card-title">{p.product_name}</h5>
                                        <p className="card-text">{p.product_desc}</p>
                                        <p className="card-text">${p.product_price}</p>
                                        <input type="hidden" name="price" value={p.product_price}/>
                                        <button onClick={(e)=>{props.add_shop_cart(e, p)}} className="btn btn-warning">Add to cart</button>
                                    </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProductList;