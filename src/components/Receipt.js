import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Receipt = () => {
    const location = useLocation();

    let items = location.state.detail.items;
    let total = location.state.detail.total;
    
    useEffect(()=> {
        console.log(location.state.detail);
        
    },[location])
    return (
        <div className="container">
            <h1>Thank you for your purchase!</h1>
            <table className="table mt-5">
                <thead>
                    <tr>
                        <th className="td_name_width">Items</th>
                        <th className="td_qty_width">Qty</th>
                        <th className="td_qty_width text-center">$/unit</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => {
                        return (
                            <tr key={item.product.product_id}>
                                <td className="td-name_width">{item.product.product_name}</td>
                                <td> {item.qty}</td>
                                <td className="td_qty_width text-center">${item.product.product_price}</td>
                            </tr>
                        )
                        })
                    }
                    <tr>
                        <td></td>
                        <th className="text-right">Total</th>
                        <td className="text-center">${total.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Receipt;