import React from "react";
import Photo from "../../assets/profile.jpg";

const Users = () => {
  const tableHeads = [
    {
      id: 1,
      name: "User Id",
    },
    {
      id: 2,
      name: "Name",
    },
    {
      id: 3,
      name: "Photo",
    },
    {
      id: 4,
      name: "Role",
    },
    {
      id: 5,
      name: "Since",
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
                  <span> {tableHeads[1].name} </span> Pankaj Yadav
                </td>
                <td>
                  <span> {tableHeads[2].name} </span>
                  <img src={Photo} alt="user" />
                </td>
                <td>
                  <span> {tableHeads[3].name} </span> {"User"}
                </td>
                <td>
                  <span> {tableHeads[4].name} </span> {"24-11-2001"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default Users;
