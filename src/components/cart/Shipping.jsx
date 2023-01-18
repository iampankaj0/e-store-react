import React from "react";
import { Country, State, City } from "country-state-city";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Shipping = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [hNo, setHNo] = useState(
    localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo")).hNo
      : ""
  );
  const [city, setCity] = useState(
    localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo")).city
      : ""
  );
  const [country, setCountry] = useState(
    localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo")).country
      : ""
  );
  const [state, setState] = useState(
    localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo")).state
      : ""
  );
  const [pinCode, setPinCode] = useState(
    localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo")).pinCode
      : ""
  );
  const [phoneNo, setPhoneNo] = useState(
    localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo")).phoneNo
      : ""
  );

  const submitHandler = (e) => {
    e.preventDefault();

    if (hNo && city && country && state && pinCode && phoneNo) {
      dispatch({
        type: "ADD_SHIPPING_INFO",
        payload: {
          hNo,
          city,
          country,
          state,
          pinCode,
          phoneNo,
        },
      });

      localStorage.setItem(
        "shippingInfo",
        JSON.stringify({
          hNo,
          city,
          country,
          state,
          pinCode,
          phoneNo,
        })
      );

      navigate("/confirmorder");
    } else {
      toast.warning("Please fill all fields");
    }
  };

  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>Phone No.</label>
            <input
              type="number"
              placeholder="Enter Phone No."
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>
          <div>
            <label>Country</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Select Country</option>
              {Country?.getAllCountries().map((i) => {
                return (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                );
              })}
            </select>
          </div>
          {country && (
            <div>
              <label>State</label>
              <select value={state} onChange={(e) => setState(e.target.value)}>
                <option value="">Select State</option>
                {State?.getStatesOfCountry(country).map((i) => {
                  return (
                    <option value={i.isoCode} key={i.isoCode}>
                      {i.name}
                    </option>
                  );
                })}
              </select>
            </div>
          )}
          {state && (
            <div>
              <label>City</label>
              <select value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="">Select City</option>
                {City?.getCitiesOfState(country, state).map((i) => {
                  return (
                    <option value={i.name} key={i.name}>
                      {i.name}
                    </option>
                  );
                })}
              </select>
            </div>
          )}

          {city && (
            <div>
              <label>Pin Code</label>
              <input
                type="number"
                placeholder="Enter Pin Code"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>
          )}

          {pinCode && (
            <div>
              <label>H. No.</label>
              <input
                type="text"
                placeholder="Enter House No."
                value={hNo}
                onChange={(e) => setHNo(e.target.value)}
              />
            </div>
          )}

          <button onClick={submitHandler} type="submit">
            Confirm Order
          </button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
