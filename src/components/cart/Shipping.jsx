import React from "react";
import { Country, State } from "country-state-city";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();

    navigate('/confirmorder');
  };

  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>H. No.</label>
            <input type="text" placeholder="Enter House No." />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
            <label>Country</label>
            <select>
              <option value="">Select Country</option>
              {Country &&
                Country.getAllCountries().map((i) => {
                  return (
                    <option value={i.isoCode} key={i.isoCode}>
                      {i.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div>
            <label>State</label>
            <select>
              <option value="">Select State</option>
              {State &&
                State.getStatesOfCountry(`IN`).map((i) => {
                  return (
                    <option value={i.isoCode} key={i.isoCode}>
                      {i.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter Pin Code" />
          </div>
          <div>
            <label>Phoner No.</label>
            <input type="number" placeholder="Enter Phoner No." />
          </div>
          <button onClick={submitHandler} type="submit">
            Confirm Order
          </button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
