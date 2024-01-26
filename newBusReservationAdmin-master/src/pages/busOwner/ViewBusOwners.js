import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useReducer } from "react";
import { FiPlus } from "react-icons/fi";
import Loading from "../loading/Loading";
import Table from "../../components/Table";
import {
  viewBusOwner,
  deleteBusOwner,
} from "../../states/actions/busOwnerAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "../layout/Layout";

const ViewBusOwners = () => {
  // dispatch
  const dispatch = useDispatch();
  // hooks
  const busOwner = useSelector((state) => state.busOwner);

  // use effect
  useEffect(() => {
    dispatch(viewBusOwner());
  }, []);

  const navigate = useNavigate();

  const handleUpdateBusOwner = (data) => {
    navigate("/BusOwner/" + data?.busOwnerId);
  };
  function handleRemoveBusOwner(data) {
    if (
      window.confirm(
        "Data deleted permantly. Are you sure to delete completely!"
      )
    ) {
      dispatch(deleteBusOwner(data?.busOwnerId));
    }
    if (busOwner?.success == false) {
      setTimeout(function () {
        window.location.reload();
      }, 500);
    }
  }
  const handleNavigate = () => {
    navigate("/addBusOwner");
  };
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
          <Typography variant="h6">BusOwners</Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FiPlus />}
            sx={{ borderRadius: "5px" }}
            onClick={handleNavigate}
          >
            Add Bus Owner
          </Button>
        </Box>
        {busOwner?.busOwner ? (
          <Table
            data={busOwner?.busOwner}
            fields={busOwnerColumns}
            numberOfRows={busOwner?.busOwner?.length}
            enableTopToolBar={true}
            enableBottomToolBar={true}
            enablePagination={true}
            enableRowSelection={true}
            enableColumnFilters={true}
            enableEditing={true}
            enableColumnDragging={true}
            showPreview={true}
            //  routeLink="products"
            deleteFunction={handleRemoveBusOwner}
            upDatefunction={handleUpdateBusOwner}
          />
        ) : (
          <Loading />
        )}
      </Box>
      <ToastContainer />
    </Layout>
  );
};

export default ViewBusOwners;

export const busOwnerColumns = [
  {
    accessorKey: "firstName", //access nested data with dot notation
    header: "First Name",
  },
  {
    accessorKey: "lastName", //access nested data with dot notation
    header: "Last Name",
  },
  {
    accessorKey: "phone", //access nested data with dot notation
    header: "Phone Number",
  },
  {
    accessorKey: "email", //access nested data with dot notation
    header: "Email",
  },
  {
    accessorKey: "address", //access nested data with dot notation
    header: "Address",
  },
];
