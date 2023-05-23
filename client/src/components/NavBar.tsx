import {
  AppBar,
  Toolbar,
  styled,
  Box,
  InputBase,
  Badge,
  Avatar,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import pain from "../public/assets/pain.jpg";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: 4,
  width: "40%",
});

const NavBar = () => {
  const [openAcc, setOpenAcc] = useState<boolean>(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Avatar alt="Pain" src={pain} />
        <Search>
          <InputBase placeholder="search something..." fullWidth />
        </Search>
        <Box display="flex" justifyContent="space-between">
          <Badge badgeContent={4} color="error">
            <ChatIcon
              color="secondary"
              sx={{
                bgcolor: "lightgray",
                p: 1,
                borderRadius: "100%",
              }}
            />
          </Badge>
          <Badge badgeContent={4} color="error" sx={{ mx: 2 }}>
            <NotificationsIcon
              color="secondary"
              sx={{
                bgcolor: "lightgray",
                p: 1,
                borderRadius: "100%",
              }}
            />
          </Badge>
          <Badge
            onClick={() => setOpenAcc(true)}
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <AccountCircleIcon
              color="secondary"
              sx={{
                bgcolor: "lightgray",
                p: 1,
                borderRadius: "100%",
              }}
            />
          </Badge>
        </Box>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={openAcc}
        onClick={() => setOpenAcc(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>Log Out</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;