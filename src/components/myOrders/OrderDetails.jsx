import React from "react";

const OrderDetails = () => {
  return (
    <section className="order__details">
      <main className="container">
        <h1>Order Details</h1>

        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {"Mandola, Dadri, 123456"}
          </p>
        </div>

        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"Pankaj Yadav"}
          </p>
          <p>
            <b>Phone</b>
            {"82955*****"}
          </p>
        </div>

        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {"Processing"}
          </p>
          <p>
            <b>Placed At</b>
            {"26-11-2022"}
          </p>
          <p>
            <b>Delivered At</b>
            {"30-11-2022"}
          </p>
        </div>

        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>
            {"COD"}
          </p>
          <p>
            <b>Payment Reference</b>#{"12234567899ajhcfi2"}
          </p>
          <p>
            <b>Paid At</b>
            {"26-11-2022"}
          </p>
        </div>

        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>₹ {"20213"}
          </p>
          <p>
            <b>Shipping Charges</b>₹{"200"}
          </p>
          <p>
            <b>Tax</b>₹{"105"}
          </p>
          <p>
            <b>Total Amount</b>₹{20213 + 200 + 105}
          </p>
        </div>

        <article>
          <h1>Ordered Items</h1>

          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{2}</span> X<span>₹{400}</span>
            </div>
          </div>
          <div>
            <h4>Veg Burger</h4>
            <div>
              <span>{3}</span> X<span>₹{245}</span>
            </div>
          </div>
          <div>
            <h4>Burger With French Fries</h4>
            <div>
              <span>{1}</span> X<span>₹{457}</span>
            </div>
          </div>
          <div>
            <h4>Sub Total</h4>
            <div>₹{2546}</div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
