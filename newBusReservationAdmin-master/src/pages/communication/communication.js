import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import AlarmIcon from "@mui/icons-material/Alarm";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";

import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { BsBell } from "react-icons/bs";
import { MailOutline } from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";

const Communication = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Tooltip title="Account settings" arrow>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Badge color="error" variant="dot">
            <MailOutlineIcon />
          </Badge>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <NavLink to="/sendMessage">
            <ListItemIcon>
              <ForwardToInboxIcon fontSize="small" />
            </ListItemIcon>
            Messages
          </NavLink>
        </MenuItem>
        <Divider />
        <MenuItem>
          <NavLink to="/scheduleChange">
            <ListItemIcon>
              <AlarmIcon fontSize="small" />
            </ListItemIcon>
            Schedule change
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/viewPromotion">
            <ListItemIcon>
              <NotificationImportantIcon fontSize="small" />
            </ListItemIcon>
            Promotion
          </NavLink>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Communication;
