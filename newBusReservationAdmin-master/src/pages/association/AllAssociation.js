import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { FiPlus } from "react-icons/fi";
//import { Link } from "react-router-dom";
import Table from "../../components/Table";
import {
  viewAssociation,
  deleteAssociation,
} from "../../states/actions/associationAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "../../pages/layout/Layout";

const AllAssociation = () => {
  // dispatch
  const dispatch = useDispatch();
  // hooks
  const association = useSelector((state) => state.association);
  // console.log("association : ", association?.association);
  // use effect
  useEffect(() => {
    dispatch(viewAssociation());
  }, []);

  const navigate = useNavigate();

  const handleUpdateAssociation = (data) => {
    //console.log("row data : ", data.associationId);
    navigate("/association/" + data.associationId);
  };
  function handleRemoveAssociation(data) {
    if (
      window.confirm(
        "Data deleted permantly. Are you sure to delete completely!"
      )
    ) {
      dispatch(deleteAssociation(data.associationId));
    }
    if (association?.success == false) {
      setTimeout(function () {
        window.location.reload();
      }, 50);
      //  console.log("handle ondelet true");
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
          <Typography variant="h6">Association List</Typography>
          <Link to="/addAssociation" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<FiPlus />}
              sx={{ borderRadius: "5px" }}
            >
              New Association
            </Button>
          </Link>
        </Box>
        <Table
          data={association?.association}
          fields={associationColumns}
          numberOfRows={association?.association?.length}
          enableTopToolBar={true}
          enableBottomToolBar={true}
          enablePagination={true}
          enableRowSelection={true}
          enableColumnFilters={true}
          enableEditing={true}
          enableColumnDragging={true}
          showPreview={true}
          //  routeLink="products"
          deleteFunction={handleRemoveAssociation}
          upDatefunction={handleUpdateAssociation}
        />
      </Box>
      <ToastContainer />
    </Layout>
  );
};

export default AllAssociation;

export const associationColumns = [
  {
    accessorKey: "associationName", //access nested data with dot notation
    header: "Name",
  },
  {
    accessorKey: "associationAddress", //access nested data with dot notation
    header: "Address",
  },
  {
    accessorKey: "contactPersonName", //access nested data with dot notation
    header: "Person Name",
  },
  {
    accessorKey: "contactPersonEmail", //access nested data with dot notation
    header: "Email",
  },
  {
    accessorKey: "contactPersonPhone", //access nested data with dot notation
    header: "Phone",
  },
];
