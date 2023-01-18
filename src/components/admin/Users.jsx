import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAllUsers } from "../../redux/actions/userAction";
import { CLEAR_ERROR } from "../../redux/constants/userConstant";
import Loader from "../layout/Loader";

const Users = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

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

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: CLEAR_ERROR,
      });
    }
  }, [error, dispatch]);

  return (
    <Fragment>
      {loading === true ? (
        <Loader />
      ) : (
        <section className="tableClass">
          <main className="container">
            <table className="table-responsive">
              <thead>
                <tr>
                  {tableHeads &&
                    tableHeads.map((item) => (
                      <th key={item.id}> {item.name} </th>
                    ))}
                </tr>
              </thead>

              <tbody>
                {users?.map((ele) => (
                  <tr key={ele?._id}>
                    <td>
                      <span> {tableHeads[0].name} </span> #{ele?._id}
                    </td>
                    <td>
                      <span> {tableHeads[1].name} </span> {ele?.name}
                    </td>
                    <td>
                      <span> {tableHeads[2].name} </span>
                      <img src={ele?.photo} alt="user" />
                    </td>
                    <td>
                      <span> {tableHeads[3].name} </span> {ele?.role}
                    </td>
                    <td>
                      <span> {tableHeads[4].name} </span>{" "}
                      {ele?.createdAt.split("T")[0]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </main>
        </section>
      )}
    </Fragment>
  );
};

export default Users;
