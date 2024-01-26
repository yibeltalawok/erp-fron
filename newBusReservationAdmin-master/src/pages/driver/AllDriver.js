import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { FiPlus } from "react-icons/fi";
//import { Link } from "react-router-dom";
import Table from "../../components/Table";
import { viewDriver, deleteDriver } from "../../states/actions/driverAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Avatar } from "@mui/material";
import Layout from "../../pages/layout/Layout";
const AllDriver = () => {
  // dispatch
  const dispatch = useDispatch();
  // hooks
  const driver = useSelector((state) => state.driver);
  console.log("all driver list :", driver);
  // use effect
  useEffect(() => {
    dispatch(viewDriver());
  }, []);

  const navigate = useNavigate();

  const handleUpdateDriver = (data) => {
    navigate("/driver/" + data.id);
  };
  function handleRemoveDriver(data) {
    if (
      window.confirm(
        "Data deleted permantly. Are you sure to delete completely!"
      )
    ) {
      dispatch(deleteDriver(data.id));
    }
    if (driver?.success == false) {
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
          <Typography variant="h6">Driver</Typography>
          {/* <Link to="/addDriver" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<FiPlus />}
              sx={{ borderRadius: "5px" }}
            >
              Add driver
            </Button>
          </Link> */}
        </Box>
        <Table
          data={driver?.driver}
          fields={driverColumns}
          numberOfRows={driver?.driver?.length}
          enableTopToolBar={true}
          enableBottomToolBar={true}
          enablePagination={true}
          enableRowSelection={true}
          enableColumnFilters={true}
          enableEditing={true}
          enableColumnDragging={true}
          showPreview={true}
          //  routeLink="products"
          deleteFunction={handleRemoveDriver}
          upDatefunction={handleUpdateDriver}
        />
      </Box>
      <ToastContainer />
    </Layout>
  );
};

export default AllDriver;

export const driverColumns = [
  // {
  //   accessorKey: "photo", //access nested data with dot notation
  //   header: "Profile",
  // },
  {
    accessorKey: "name", //access nested data with dot notation
    header: "Name",
  },
  {
    accessorKey: "photo", //access nested data with dot notation
    header: "Images",
    size: 100,
    Cell: ({ cell }) => (
      <div>
        <Avatar
          src={`https://eplus.abyssiniasoftware.com${cell.getValue()}`}
          sx={{ width: 30, height: 30 }}
        />
      </div>
    ),
  },
  {
    accessorKey: "licenseNumber", //access nested data with dot notation
    header: "License",
  },
  {
    accessorKey: "contactNumber", //access nested data with dot notation
    header: "Contact Number",
  },
  {
    accessorKey: "email", //access nested data with dot notation
    header: "Email",
  },

  // {
  //   accessorKey: "licenseDocument", //access nested data with dot notation
  //   header: "License document",
  // },
];
