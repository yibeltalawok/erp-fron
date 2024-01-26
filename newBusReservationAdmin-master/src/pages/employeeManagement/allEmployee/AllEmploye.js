import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { FiPlus } from "react-icons/fi";
//import { Link } from "react-router-dom";
import Table from "../../../components/Table";
import {
  viewEmployee,
  deleteEmployee,
} from "../../../states/actions/employeeAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "../../../pages/layout/Layout";

const AllEmployee = () => {
  // dispatch
  const dispatch = useDispatch();
  // hooks
  const employee = useSelector((state) => state.employee);
  // use effect
  useEffect(() => {
    dispatch(viewEmployee());
  }, []);

  const navigate = useNavigate();

  const handleUpdateEmployee = (data) => {
    navigate("/employee/" + data.id);
  };
  function handleRemoveEmployee(data) {
    if (
      window.confirm(
        "Data deleted permantly. Are you sure to delete completely!"
      )
    ) {
      dispatch(deleteEmployee(data.id));
    }
    if (employee?.success == false) {
      setTimeout(function () {
        window.location.reload();
      }, 3000);
    }
  }
  return (
    <Layout>
      <Box sx={{ pt: "80px", pb: "20px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "16px",
          }}
        >
          <Typography variant="h6">Employee List</Typography>
        </Box>
        <Table
          data={employee?.employee}
          fields={employeeColumns}
          numberOfRows={employee?.employee.length}
          enableTopToolBar={true}
          enableBottomToolBar={true}
          enablePagination={true}
          enableRowSelection={true}
          enableColumnFilters={true}
          enableEditing={true}
          enableColumnDragging={true}
          showPreview={true}
          //  routeLink="products"
          deleteFunction={handleRemoveEmployee}
          upDatefunction={handleUpdateEmployee}
        />
      </Box>
      <ToastContainer />
    </Layout>
  );
};

export default AllEmployee;

export const employeeColumns = [
  {
    accessorKey: "firstName", //access nested data with dot notation
    header: "First Name",
  },
  {
    accessorKey: "lastName", //access nested data with dot notation
    header: "Last Name",
  },
  // {
  //   accessorKey: "position", //access nested data with dot notation
  //   header: "Position",
  // },
  {
    accessorKey: "email", //access nested data with dot notation
    header: "Email",
  },
];
