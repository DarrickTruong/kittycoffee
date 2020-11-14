import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import shop_cart from '../img/shopping-cart.png';

const Shop = () => {

    const [products, setProducts] = useState(
        [
            {
                product_id: 123456,
                product_img: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
                product_name: "Course Coffee Grounds",
                product_desc: "These fresh Coffee grounds are best used for making your own cold brew.",
                product_price: 5.99
            },
            {
                product_id: 234567,
                product_img: "https://images.unsplash.com/photo-1531705829171-5c50027ccb82?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                product_name: "Fine Coffee Grounds",
                product_desc: "Fine Coffee grounds is best for strong, bold flavor.",
                product_price: 5.99
            },
            {
                product_id: 345678,
                product_img: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
                product_name: "Premium Coffee Filters - 100 Pack",
                product_desc: "Premium coffee filters will give the best chemical-free coffee experience.",
                product_price: 4.99
            },
            {
                product_id: 456789,
                product_img: "https://images.unsplash.com/photo-1503076634654-4383ec86da1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
                product_name: "Basic Coffee Filters - 100 Pack",
                product_desc: "Basic coffee filters are for basic people",
                product_price: 3.99
            },
            {
                product_id: 567890,
                product_img: "https://images.unsplash.com/photo-1573066380308-24ff4c273dbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
                product_name: "Hand Crank Coffee Grinder",
                product_desc: "Use your own muscles to grind whole coffee beans.",
                product_price: 10.99
            },
            {
                product_id: 678901,
                product_img: "https://images.unsplash.com/photo-1550623627-755160d35f08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
                product_name: "French Coffee Press",
                product_desc: "Get Unrivaled coffee flavor and aroma with our french coffee press",
                product_price: 18.99
            },
            {
                product_id: 789012,
                product_img: "https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80",
                product_name: "Coffee Mug",
                product_desc: "This coffee mug will keep your coffee hot and won't slide off the top of your moving vehicle.",
                product_price: 3.99
            },
            {
                product_id: 890123,
                product_img: "https://coffeegearx.com/wp-content/uploads/2019/08/What-Is-Nitro-Coffee.jpg",
                product_name: "Mini Nitro Cold-Brew System",
                product_desc: "Nothing beats a frothy, nitro cold-brew made by you!",
                product_price: 99.99
            },
        ]
    );


    const open_shop = (e) => {

        e.preventDefault();
        document.getElementById("shop_cart").style.display = "block";
    }





// shopping cart state
    const [shop_cart_items, setShopCart] = useState([])
    const add_shop_cart = (e, product) => {
        e.preventDefault();
        open_shop();

        for (let item of shop_cart_items) {
            // console.log("item", item);
            // console.log("product", product);
            if (item.product === product) {
                return;
            }
        }

        const item = {
            product: product,
            qty: 0
        }

        setShopCart([...shop_cart_items, item]);
        
    }
// update number of items in shopping cart
    const update_shop_cart = (item) => {

        let newArr = shop_cart_items;
    
        // update the shopping cart item 'in place'
        newArr.forEach(product => {    
            if (product.product.product_id === item.product.product_id) {
                product["qty"] = item.qty;
            }
        });
        // console.log(newArr);
        setShopCart([...newArr]);
    }

    const removeItem = (id) => {
        const filter = shop_cart_items.filter(item => item.product.product_id !== id);
        setShopCart(filter);
    }









    // shopping cart total price
    const [shop_total, setShopTotal] = useState(0)
    const shopTotal = () => {
        // console.log(shop_cart_items.length);
        if (shop_cart_items.length > 0) {
            let subtotal = 0;
            // use foreach?
            shop_cart_items.map(item => {
                subtotal += (item.product.product_price * item.qty)
                // console.log("in shopTotal", subtotal)
                setShopTotal(subtotal);
            })
        } else {
            // console.log("else");
            setShopTotal(0)
        }

    }
    // redirect to checkout receipt
    let history = useHistory();
    const checkout = (e) => {
        e.preventDefault();
        console.log("checkin out");
        let checkout_details = {
            items: shop_cart_items,
            total: shop_total
        }
        
        history.push({
            pathname:"/receipt",
            state: {
                detail: checkout_details
            }
        });
    }






// recalulate total after shopping cart is updated
    useEffect(() => {
        // console.log("effect", shop_cart_items);
        shopTotal()
    }, [shop_cart_items])

    return (
        <main className="container d-flex flex-column align-items-center fade-in">
            <h1>Kitty Coffee Products</h1>
            <button onClick={open_shop} className="btn btn-checkout"><img id="shopping-cart" className="mr-2" src={shop_cart} alt="shopping cart"/>View Cart</button>
            
            <ProductList products={products} add_shop_cart={add_shop_cart} />
            <ShoppingCart checkout={checkout} shop_cart_items={shop_cart_items} removeItem={removeItem} updateCart={update_shop_cart} shopTotal={shopTotal} total={shop_total} />
        </main>
    );
};

export default Shop;