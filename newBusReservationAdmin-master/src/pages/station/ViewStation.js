import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Table from "../../components/Table";
import {
  viewStation,
  deleteStation,
} from "../../states/actions/stationAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "../../pages/layout/Layout";
const AllStation = () => {
  // dispatch
  const dispatch = useDispatch();
  // useSelectors
  const stations = useSelector((state) => state.stations);
  // use effect
  useEffect(() => {
    dispatch(viewStation());
  }, []);

  const navigate = useNavigate();
  //update passenger funcion
  const handleUpdateStation = (data) => {
    navigate("/station/" + data.stationId);
  };
  //delete passenger funcion
  function handleRemoveStation(data) {
    if (
      window.confirm(
        "Data deleted permantly. Are you sure to delete completely!"
      )
    ) {
      dispatch(deleteStation(data.stationId));
    } 
    if (stations?.success == false) {
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
          <Typography variant="h6">Station</Typography>
        </Box>
        <Table
          data={stations?.stations}
          fields={stationColumns}
          numberOfRows={stations?.stations?.length}
          enableTopToolBar={true}
          enableBottomToolBar={true}
          enablePagination={true}
          enableRowSelection={true}
          enableColumnFilters={true}
          enableEditing={true}
          enableColumnDragging={true}
          showPreview={true}
          deleteFunction={handleRemoveStation}
          upDatefunction={handleUpdateStation}
        />
      </Box>
      <ToastContainer />
    </Layout>
  );
};
export default AllStation;

export const stationColumns = [
  {
    accessorKey: "stationName",
    header: "Name",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "contactPersonName",
    header: "Contact Person Name",
  },
  {
    accessorKey: "contactPersonEmail",
    header: "Contact Person Email",
  },
  {
    accessorKey: "contactPersonPhone",
    header: "Contact Person Phone",
  },
];
