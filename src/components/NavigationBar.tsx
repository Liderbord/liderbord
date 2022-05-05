import {
  AppBar,
  Container,
  Button,
  Avatar,
  Typography,
  Toolbar,
  Tooltip,
  IconButton,
  Menu,
  Box,
  MenuItem,
} from "@mui/material";
import { logDOM } from "@testing-library/react";
import { useState, useEffect } from "react";
import liderbordLogo from "../res/tinyLogo.png";
import { useMoralis } from "react-moralis";
import { useNavigate, Navigate } from "react-router-dom";
import userIcon from "../res/icons/authent.png";
import notAuthentIcon from "../res/icons/notAuthent.png";
import useLiderbordContract from "hooks/useLiderbordContract";

export default function NavigationBar() {
  let { isAuthenticated, logout, user, authenticate } = useMoralis();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [loginUser, setloginUser] = useState(user);
  const {
    onClaimHappycoins,
    isMetatransactionProcessing,
    isBiconomyInitialized,
  } = useLiderbordContract({ liderbordName: null });

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const login = async () => {
    if (!isAuthenticated) {
      const tempUser = await authenticate(
        {
          signingMessage: "Liderbord",
          chainId: 0x13881,
        } /*{
        provider: "web3Auth",
        chainId: process.env.REACT_APP_LIDERBORD_CHAIN_ID
          ? parseInt(process.env.REACT_APP_LIDERBORD_CHAIN_ID)
          : 0x13881,
        clientId: process.env.REACT_APP_MORALIS_CLIENT_ID ?? "",
        theme: "light",
        appLogo:
          "https://raw.githubusercontent.com/Liderbord/liderbord/master/public/logo512.png",
      }*/
      );
      setloginUser(tempUser ?? null);
    }
  };

  const onLogout = () => {
    logout();
    handleClose();
  };

  const onRequestHappycoins = () => {
    onClaimHappycoins();
    handleClose();
  };

  return (
    <AppBar
      position="absolute"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ flexGrow: 1, mt: 3, display: { xs: "none", md: "flex" } }}>
            <div className="container">
              <img
                height={30}
                width={200}
                src={liderbordLogo}
                alt="liderbord Logo"
              />
            </div>
          </Box>
          {isAuthenticated && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <img width={40} height={40} src={userIcon} alt="user" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  disabled={
                    !isBiconomyInitialized || isMetatransactionProcessing
                  }
                  onClick={onRequestHappycoins}
                >
                  Claim HC
                </MenuItem>
                <MenuItem onClick={onLogout}>Log out</MenuItem>
              </Menu>
            </div>
          )}
          {!isAuthenticated && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={login}
                color="inherit"
              >
                <img
                  width={40}
                  height={40}
                  src={notAuthentIcon}
                  alt="Not Authent"
                />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
