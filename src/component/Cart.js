import React from "react";

const Cart = () => {
  const cart = JSON.parse(localStorage.getItem("Cart"));

  let productCost = cart
    ? cart.reduce((a, b) => a + b.price * b.quantity, 0)
    : 0;
  let shippingCost = cart ? cart.reduce((a, b) => a + b.shipping, 0) : 0;
  let tax = parseFloat((productCost * 0.1).toFixed(2));
  return (
    <div>
      <div className="card p-2 shoppingCart bg-dark text-white">
        <h3 className="text-center">Cart details</h3>
        <hr />
        <h5>Total Item:{cart ? cart.length : 0}</h5>
        <h6>Price:{productCost}</h6>
        <h6>Shipping fee:{shippingCost}</h6>
        <h6>Tax:{tax}</h6>
        <h6>Total Cost:{(productCost + shippingCost + tax).toFixed(2)}</h6>
      </div>
    </div>
  );
};

export default Cart;
