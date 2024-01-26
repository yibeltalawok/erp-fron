import React, { useCallback, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import { Button, IconButton, Tooltip } from "@mui/material";
import { FiEye, FiTrash, FiPenTool } from "react-icons/fi";
import { Box } from "@mui/system";

export const Table = ({
  data,
  fields,
  numberOfRows,
  enableTopToolBar,
  enableBottomToolBar,
  enablePagination,
  enableColumnFilters,
  enableEditing,
  enableColumnDragging,
  showPreview,
  // routeLink,
  deleteFunction,
  upDatefunction,
}) => {
  const columns = useMemo(() => fields, []);
  const { tableData, setTableData } = useState(() => data);
  return (
    <>
      <MaterialReactTable
        columns={columns}
        data={Array.from(data).slice(0, numberOfRows)}
        getRowId={(row) => row.id}
        enableEditing={enableEditing}
        enableColumnDragging={enableColumnDragging}
        enableColumnOrdering
        enableColumnFilters={enableColumnFilters}
        enablePagination={enablePagination}
        enableBottomToolbar={enableBottomToolBar}
        enableTopToolbar={enableTopToolBar}
        muiTableBodyRowProps={{ hover: false }}
        positionActionsColumn="last"
        muiTablePaperProps={{
          sx: {
            padding: "20px",
            borderRadius: "15px",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "divider",
          },
        }}
        muiTableContainerProps={{
          sx: { borderRadius: "15px" },
        }}
        muiTableHeadCellProps={{
          sx: {
            fontSize: "14px",
            fontWeight: "bold",
          },
        }}
        muiTableHeadProps={{
          sx: {
            "& tr th": {
              borderWidth: "1px",
              borderColor: "divider",
              borderStyle: "solid",
            },
          },
        }}
        muiTableBodyProps={{
          sx: {
            "& tr td": {
              borderWidth: "1px",
              borderColor: "divider",
              borderStyle: "solid",
            },
          },
        }}
        renderRowActions={({ row }) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Tooltip arrow placement="right" title="Delete">
              <IconButton
                color="error"
                onClick={() => deleteFunction(row.original)}
              >
                <FiTrash />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="View">
              <IconButton onClick={() => upDatefunction(row.original)}>
                <FiPenTool />
              </IconButton>
            </Tooltip>
          </Box>
        )}
      />
    </>
  );
};

export default Table;
