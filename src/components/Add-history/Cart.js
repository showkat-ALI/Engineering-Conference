import React from "react";
import "./Cart.css";
// selecting cart
const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  for (const engineer of cart) {
    total = total + engineer.salary;
  }
  return (
    <div className="cart-container">
      <h3>
        Total cost: <i className="fas fa-dollar-sign"></i> {total}
      </h3>
      <h4>
        Total engineer added: <i className="fas fa-male"></i>{" "}
        {props.cart.length}
      </h4>

      <ul className="engineers-name">
        <Name cart={cart} />
      </ul>
      <button className="btn text-center adding-button">
        <i className="fas fa-users"></i> Add them together
      </button>
    </div>
  );
};
// name showing
function Name({ cart }) {
  return cart.map((engineer,index) => (
    <li key={index}>
      {engineer.name}-Added <i className="fas fa-check-circle"></i>
    </li>
  ));
}
export default Cart;
