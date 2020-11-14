import React from 'react';
import '../../src/style.css';
import close from '../img/close.png'
import cancel from '../img/cancel.png'
import coffee from '../img/coffee-cup.png';

const ShoppingCart = (props) => {

    const cart_items = props.shop_cart_items;

    // const [shop_item_qty, setShopItemQty] = useState([])

    const hideCart = () => {
        document.getElementById("shop_cart").style.display = "none";
    }

    const handleChange = (product, e) => {
        // console.log(product);
        const item = {
            product: product,
            qty: Number(e.target.value)
        }
        // setShopItemQty([...shop_item_qty, item]);
        props.updateCart(item);
    }

    

    return (
        <div id="shop_cart" className="bg-light fade-in">
            <img id="close" onClick={hideCart} className="rounded float-right" src={close} alt="close button" />
            <h6 className="d-inline-block mr-3">Shopping Cart</h6>
            <img id="cup" src={coffee} alt="kitty"/>
            <hr />
            <form onSubmit={(e)=>props.checkout(e)} method="POST">
                <table>
                    <thead>
                        <tr>
                            <th className="td_name_width">Items</th>
                            <th className="td_qty_width">Qty</th>
                            <th className="td_qty_width text-center">$</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart_items.map(item => {
                            return (
                                <tr key={item.product.product_id}>
                                    <td className="td-name_width">{item.product.product_name}</td>
                                    <td>
                                        <input onChange={(e) => handleChange(item.product, e)} className="td_qty_width" type="number" name="qty" id="qty" min={0} max={100} />
                                    </td>
                                    <td className="td_qty_width text-center">{item.product.product_price}</td>
                                    <td><img onClick={() => props.removeItem(item.product.product_id)} id="cancel" className="rounded float-right" src={cancel} alt="close button" /></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                <hr></hr>
                <div className="d-flex justify-content-between">
                    <p className="d-inline">Total ${props.total.toFixed(2)}</p>
                    <button className="btn btn-sm btn-checkout d-inline justify-self-center" type="submit">Checkout</button>
                </div>
            </form>
        </div>
    );
};

export default ShoppingCart;