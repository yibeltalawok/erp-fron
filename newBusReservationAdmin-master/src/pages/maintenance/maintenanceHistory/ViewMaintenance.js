import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import {
  viewMaintenanceSchedule,
  deleteMaintenanceHistory,
} from "../../../states/actions/maintenanceAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Table from "../../../components/Table";
import { ToastContainer } from "react-toastify";
import Layout from "../../../pages/layout/Layout";
const ViewMaintenace = () => {
  // dispatch
  const dispatch = useDispatch();
  // hooks
  const maintenance = useSelector((state) => state.maintenance);
  // use effect
  useEffect(() => {
    dispatch(viewMaintenanceSchedule());
  }, []);
  const navigate = useNavigate();

  const handleUpdateMaintenance = (data) => {
    navigate("/maintenance/" + data.maintenanceId);
  };
  function handleRemoveMaintenance(data) {
    //console.log("id : ", id);
    if (
      window.confirm(
        "Data deleted permantly. Are you sure to delete completely!"
      )
    ) {
      dispatch(deleteMaintenanceHistory(data.maintenanceId));
    }
    if (maintenance?.success == false) {
      setTimeout(function () {
        window.location.reload();
      }, 500);
      //  console.log("handle ondelet true");
    }
  }

  return (
    <Layout>
      <Box sx={{ pt: "10px", pb: "20px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "16px",
          }}
        >
          <Typography variant="h6">Maintenance Schedule</Typography>
        </Box>
        <Table
          data={maintenance?.maintenance}
          fields={busMaintenanceColumns}
          numberOfRows={maintenance?.maintenance.length}
          enableTopToolBar={true}
          enableBottomToolBar={true}
          enablePagination={true}
          enableRowSelection={true}
          enableColumnFilters={true}
          enableEditing={true}
          enableColumnDragging={true}
          showPreview={true}
          //  routeLink="products"
          deleteFunction={handleRemoveMaintenance}
          upDatefunction={handleUpdateMaintenance}
        />
      </Box>
      <ToastContainer />
    </Layout>
  );
};
export default ViewMaintenace;

export const busMaintenanceColumns = [
  {
    accessorKey: "Bus.talga", //access nested data with dot notation
    header: "Bus Talga",
  },
  {
    accessorKey: "Bus.sideNo", //access nested data with dot notation
    header: "Side Number",
  },
  {
    accessorKey: "cost", //access nested data with dot notation
    header: "Cost",
  },
  {
    accessorKey: "description", //access nested data with dot notation
    header: "Description",
  },
];
