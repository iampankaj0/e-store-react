import React from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect } from "react";
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
  const dispatch = useDispatch();

  const {
    cartItems: {
      cheeseBurger: { quantity: cheeseBurger },
      vegCheeseBurger: { quantity: vegCheeseBurger },
      burgerWithFries: { quantity: burgerWithFries },
    },
    subTotal,
    tax,
    shippingCharges,
    total,
  } = useSelector((state) => state.cart);

  const { cartItems: orderItems } = useSelector((state) => state.cart);

  const decrement = (item) => {
    switch (item) {
      case 1:
        if (cheeseBurger === 0) return;
        dispatch({ type: "DECREASE_CHEESE_BURGER" });
        dispatch({ type: "CALCULATE_PRICE" });
        break;
      case 2:
        if (vegCheeseBurger === 0) return;
        dispatch({ type: "DECREASE_VEGCHEESE_BURGER" });
        dispatch({ type: "CALCULATE_PRICE" });
        break;
      case 3:
        if (burgerWithFries === 0) return;
        dispatch({ type: "DECREASE_BURGER_WITH_FRIES" });
        dispatch({ type: "CALCULATE_PRICE" });
        break;
      default:
        if (cheeseBurger === 0) return;
        dispatch({ type: "DECREASE_CHEESE_BURGER" });
        dispatch({ type: "CALCULATE_PRICE" });
    }
  };
  const increment = (item) => {
    switch (item) {
      case 1:
        if (cheeseBurger >= 10) {
          toast.warning(
            `You are not able to buy more than ${cheeseBurger} Cheese Burger in one time`
          );
          return;
        }
        dispatch({ type: "INCREASE_CHEESE_BURGER" });
        dispatch({ type: "CALCULATE_PRICE" });
        break;
      case 2:
        if (vegCheeseBurger >= 10) {
          toast.warning(
            `You are not able to buy more than ${vegCheeseBurger} Veg Cheese Burger in one time`
          );
          return;
        }
        dispatch({ type: "INCREASE_VEGCHEESE_BURGER" });
        dispatch({ type: "CALCULATE_PRICE" });
        break;
      case 3:
        if (burgerWithFries >= 10) {
          toast.warning(
            `You are not able to buy more than ${burgerWithFries} Burger With French Fries in one time`
          );
          return;
        }
        dispatch({ type: "INCREASE_BURGER_WITH_FRIES" });
        dispatch({ type: "CALCULATE_PRICE" });
        break;
      default:
        dispatch({ type: "INCREASE_CHEESE_BURGER" });
        dispatch({ type: "CALCULATE_PRICE" });
    }
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(orderItems));
    localStorage.setItem(
      "cartPrices",
      JSON.stringify({subTotal, tax, shippingCharges, total})
    );
  }, [orderItems, subTotal, tax, shippingCharges, total]);

  return (
    <section className="cart">
      <main>
        <CartItem
          title="Veg Burger"
          img={burger1}
          decrement={() => decrement(1)}
          value={cheeseBurger}
          increment={() => increment(1)}
        />
        <CartItem
          title="Veg Cheese Burger"
          img={burger2}
          decrement={() => decrement(2)}
          value={vegCheeseBurger}
          increment={() => increment(2)}
        />
        <CartItem
          title="Veg Burger With French Fries"
          img={burger3}
          decrement={() => decrement(3)}
          value={burgerWithFries}
          increment={() => increment(3)}
        />

        <article>
          <div>
            <h4>Sub Totoal</h4>
            <p>₹ {subTotal}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹ {tax}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹ {subTotal === 0 ? 0 : shippingCharges}</p>
          </div>
          <div>
            <h4>Totoal</h4>
            <p>₹ {subTotal === 0 ? 0 : total}</p>
          </div>
          {subTotal !== 0 && <Link to="/shipping">Checkout</Link>}
        </article>
      </main>
    </section>
  );
};

export default Cart;
