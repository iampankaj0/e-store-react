import React, { useState } from "react";
import DataTable from "react-data-table-component";
import myJSON from "./myJSON.json";

const ReactDataTable = () => {
  const [myData, setMyData] = useState(myJSON);
  // console.log(setMyData);
  //   myJSON =>>>> is a jason file where my static data present

  const columns = [
    {
      name: "Country Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Country Native Name",
      selector: (row) => row.nativeName,
    },
    {
      name: "Country Capital",
      selector: (row) => row.capital,
    },
    {
      name: "Country Flas",
      selector: (row) => (
        <img src={row.flag} width={50} height={50} alt="flag" />
      ),
    },
    {
      name: "Action",
      selector: (row) => (
        <button
          className="btn btn-warning"
          onClick={() =>
            alert(`This is dianamic data from data table ${row.name}`)
          }
        >
          Edit
        </button>
      ),
    },
    {
      name: "New Action",
      cell: (row) => (
        <button
          className="btn btn-warning"
          onClick={() => alert(`This is dianamic data is deleted ${row.name}`)}
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <div>
      <DataTable
        title="County List"
        data={myData}
        columns={columns}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="400px"
        selectableRows
      />
    </div>
  );
};

export default ReactDataTable;
