import React from "react";
import { useNavigate } from "react-router-dom";

const ConfirmOrder = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/paymentsuccess");
  };

  return (
    <section className="confirm_order">
      <main>
        <h1>Confirm Order</h1>

        <form>
          <div>
            <label>Cash On Delivery</label>
            <input type="radio" name="payment" />
          </div>
          <div>
            <label>Online</label>
            <input type="radio" name="payment" />
          </div>
          <button onClick={submitHandler} type="submit">
            Place Order
          </button>
        </form>
      </main>
    </section>
  );
};

export default ConfirmOrder;
