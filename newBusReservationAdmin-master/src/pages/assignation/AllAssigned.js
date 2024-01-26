import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Table from "../../components/Table";
import {
  viewAssignation,
  deleteassignation,
} from "../../states/actions/assignationAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "../../pages/layout/Layout";
const AllAssigned = () => {
  // dispatch
  const dispatch = useDispatch();
  // hooks
  const assignation = useSelector((state) => state.assignation);
  // use effect
  useEffect(() => {
    dispatch(viewAssignation());
  }, []);

  const navigate = useNavigate();

  const handleUpdateAssigned = (data) => {
    navigate("/assign/" + data.id);
  };
  function handleRemoveAssigned(data) {
    if (
      window.confirm(
        "Data deleted permantly. Are you sure to delete completely!"
      )
    ) {
      dispatch(deleteassignation(data.id));
    }
    if (assignation?.success == false) {
      setTimeout(function () {
        window.location.reload();
      }, 500);
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
          <Typography variant="h6">Assignation List</Typography>
        </Box>
        <Table
          data={assignation?.assignation}
          fields={assignationColumns}
          numberOfRows={assignation?.assignation?.length}
          enableTopToolBar={true}
          enableBottomToolBar={true}
          enablePagination={true}
          enableRowSelection={true}
          enableColumnFilters={true}
          enableEditing={true}
          enableColumnDragging={true}
          showPreview={true}
          //  routeLink="products"
          deleteFunction={handleRemoveAssigned}
          upDatefunction={handleUpdateAssigned}
        />
      </Box>
      <ToastContainer />
    </Layout>
  );
};

export default AllAssigned;

export const assignationColumns = [
  {
    accessorKey: "Bus.talga", //access nested data with dot notation
    header: "Bus",
  },
  {
    accessorKey: "Driver.name", //access nested data with dot notation
    header: "Driver",
  },
  {
    accessorKey: "Terminal.sourceStation.stationName", //access nested data with dot notation
    header: "Router",
  },
  {
    accessorKey: "assignationType",
    header: "Assignation Type",
  },
  {
    accessorKey: "startTime",
    header: "Start Time",
  },
  {
    accessorKey: "endTime",
    header: "End Time",
  },
];
