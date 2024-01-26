import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import Table from "../../components/Table";
import {
  viewTicketing,
  deleteTicketing,
} from "../../states/actions/ticketingAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "../../pages/layout/Layout";

const ViewTicketing = () => {
  // dispatch
  const dispatch = useDispatch();
  // hooks
  const tickets = useSelector((state) => state.tickets);
  // use effect
  useEffect(() => {
    dispatch(viewTicketing());
  }, []);

  const navigate = useNavigate();

  const handleUpdateBusOwner = (data) => {
    navigate("/ticketing/" + data.id);
  };
  function handleRemoveBusOwner(data) {
    if (
      window.confirm(
        "Data deleted permantly. Are you sure to delete completely!"
      )
    ) {
      dispatch(deleteTicketing(data.id));
    }
    if (tickets?.success == false) {
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
          <Typography variant="h6">Ticketing History</Typography>
          <Link to="/newTicketing" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<FiPlus />}
              sx={{ borderRadius: "5px" }}
            >
              Add Ticketing
            </Button>
          </Link>
        </Box>
        <Table
          data={tickets?.tickets}
          fields={ticketingColumns}
          numberOfRows={tickets?.tickets?.length}
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
      </Box>
      <ToastContainer />
    </Layout>
  );
};
export default ViewTicketing;

export const ticketingColumns = [
  {
    accessorKey: "Bus.talga",
    header: "Bus Talga",
  },
  // {
  //   accessorKey: "Passenger.name", //access nested data with dot notation
  //   header: "Passenger Name",
  // },
  // {
  //   accessorKey: "Terminal.sourceStation.stationName", //access nested data with dot notation
  //   header: "Source Station",
  // },
  {
    accessorKey: "Terminal.destinationStation.stationName", //access nested data with dot notation
    header: "Destination Station",
  },
  {
    accessorKey: "seatNumber", //access nested data with dot notation
    header: "Seat Number",
  },
  {
    accessorKey: "Terminal.cost", //access nested data with dot notation
    header: "Cost",
  },
];


