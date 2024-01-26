import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Table from "../../../components/Table";
import { viewItem, deleteItem } from "../../../states/actions/lostItemAction";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import Layout from "../../../pages/layout/Layout";
const ViewLostitem = () => {
  // dispatch
  const dispatch = useDispatch();
  // hooks
  const itemList = useSelector((state) => state.itemList);
  console.log("all item : ", itemList);
  // use effect
  useEffect(() => {
    dispatch(viewItem());
  }, []);

  const navigate = useNavigate();

  const handleUpdateLostItem = (data) => {
    navigate("/lostItem/" + data.materialId);
  };
  function handleRemoveLostItem(data) {
    if (
      window.confirm(
        "Data deleted permantly. Are you sure to delete completely!"
      )
    ) {
      dispatch(deleteItem(data.materialId));
    }
    if (itemList?.success == false) {
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
          <Typography variant="h6">Lost Item</Typography>
          <Link to="/newLostItem" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<FiPlus />}
              sx={{ borderRadius: "5px" }}
            >
              Add Lost
            </Button>
          </Link>
        </Box>
        <Table
          data={itemList?.itemList}
          fields={itemColumns}
          numberOfRows={itemList?.itemList?.length}
          enableTopToolBar={true}
          enableBottomToolBar={true}
          enablePagination={true}
          enableRowSelection={true}
          enableColumnFilters={true}
          enableEditing={true}
          enableColumnDragging={true}
          showPreview={true}
          //  routeLink="products"
          deleteFunction={handleRemoveLostItem}
          upDatefunction={handleUpdateLostItem}
        />
      </Box>
    </Layout>
  );
};
export default ViewLostitem;

export const itemColumns = [
  {
    accessorKey: "itemName", //access nested data with dot notation
    header: "Lost Item",
  },
  {
    accessorKey: "contactPerson", //access nested data with dot notation
    header: "Personal Contact",
  },
  {
    accessorKey: "contactEmail", //access nested data with dot notation
    header: "Email",
  },
  {
    accessorKey: "contactPhone", //access nested data with dot notation
    header: "Phone",
  },
  {
    accessorKey: "description", //access nested data with dot notation
    header: "Description",
  },
];
