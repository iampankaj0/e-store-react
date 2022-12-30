import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const tableHeads = [
    {
      id: 1,
      name: "Order Id",
    },
    {
      id: 2,
      name: "Status",
    },
    {
      id: 3,
      name: "Item Qty",
    },
    {
      id: 4,
      name: "Amount",
    },
    {
      id: 5,
      name: "Payment Method",
    },
    {
      id: 6,
      name: "Action",
    },
  ];

  const arr = [1, 2, 3, 4, 5, 6, 7];

  return (
    <section className="tableClass">
      <main className="container">
        <table className="table-responsive">
          <thead>
            <tr>
              {tableHeads &&
                tableHeads.map((item) => <th key={item.id}> {item.name} </th>)}
            </tr>
          </thead>

          <tbody>
            {arr.map((i) => (
              <tr key={i}>
                <td>
                  <span> {tableHeads[0].name} </span> #sjdgfiuosdg
                </td>
                <td>
                  <span> {tableHeads[1].name} </span> Processing
                </td>
                <td>
                  <span> {tableHeads[2].name} </span> 23
                </td>
                <td>
                  <span> {tableHeads[3].name} </span> ₹ {2380}
                </td>
                <td>
                  <span> {tableHeads[4].name} </span> COD
                </td>
                <td>
                  <span> {tableHeads[5].name} </span>
                  <Link to={`/order/${"orderId"}`}>
                    <AiOutlineEye />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
