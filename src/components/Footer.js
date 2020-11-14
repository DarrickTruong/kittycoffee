import React from 'react';
import kitty from '../img/kitty.png';
import coffee from '../img/coffee-cup.png';
const Footer = () => {
    return (
        <footer className="bg-light p-5 mt-5 ">
            <div className="row d-flex justify-content-center">
                <div className="col-sm-4 d-flex flex-column">
                    <a className="text-dark" href="/">Home</a>
                    <a className="text-dark" href="/shop">Shop</a>
                    <a className="text-dark" href="#" onClick={() => document.getElementById("shop_cart").style.display = "block"}>Cart</a>
                    <img className="mt-2 align-self-left" src={kitty} alt="coffee icon" />
                </div>
                <div className="d-inline-block">
                    <p className="font-italic font-weight-bold"> The premier online shop for coffee and cat lovers.</p>
                    <p> Thanks for checking out our shop!</p>
                    <address> 123 Kitty Coffee rd. <br/> Kitty City, KC 12345</address>
                    <a id="email" href="mailto:support@kittycoffee.com">support@kittycoffee.com</a>
                </div>
                <img className="float-right ml-5" src={coffee} alt="coffee" />
            </div>
            
        </footer>
    );
};

export default Footer;