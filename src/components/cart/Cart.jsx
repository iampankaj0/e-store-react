import React from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const CartItem = ({ title, img, decrement, value, increment }) => {
  return (
    <div className="cartItem">
      <div>
        <h4>{title}</h4>
        <img src={img} alt={title} />
      </div>
      <div>
        <button onClick={decrement}>-</button>
        <input type="number" readOnly value={value} />
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

const Cart = () => {
  const decrement = (item) => {};
  const increment = (item) => {};

  return (
    <section className="cart">
      <main>
        <CartItem
          title="Veg Burger"
          img={burger1}
          decrement={() => decrement(1)}
          value="2"
          increment={() => increment(1)}
        />
        <CartItem
          title="Veg Cheese Burger"
          img={burger2}
          decrement={() => decrement(1)}
          value="3"
          increment={() => increment(1)}
        />
        <CartItem
          title="Veg Burger With French Fries"
          img={burger3}
          decrement={() => decrement(1)}
          value="1"
          increment={() => increment(1)}
        />

        <article>
          <div>
            <h4>Sub Totoal</h4>
            <p>₹ {2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹ {2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹ {20}</p>
          </div>
          <div>
            <h4>Totoal</h4>
            <p>₹ {2380}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
