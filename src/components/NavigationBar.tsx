import {AppBar, Container, Button, Avatar, Typography, Toolbar, Tooltip, IconButton, Menu, Box, MenuItem} from '@mui/material';
import { logDOM } from '@testing-library/react';
import { useState } from 'react';
import liderbordLogo from "../res/tinyLogo.png";
import { useMoralis } from "react-moralis";
import { useNavigate, Navigate } from "react-router-dom";
import userIcon from "../res/icons/authent.png";
import notAuthentIcon from "../res/icons/notAuthent.png";


export default function NavigationBar() {
    let { isAuthenticated, logout, user } = useMoralis();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const navigate = useNavigate();

    function redirectLogin() {
        navigate('/login');
    }
   

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <AppBar position="absolute" style={{ background: 'transparent', boxShadow: 'none'}}>
            <Container maxWidth="xl">
                <Toolbar >
                    <Box sx={{ flexGrow: 1, mt: 3, display: { xs: 'none', md: 'flex' } }}>
                        <div className="container">
                            <img height={30} width={200} src={liderbordLogo} alt="liderbord Logo" />
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
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={logout}>Log out</MenuItem>
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
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <img width={40} height={40} src={notAuthentIcon} alt="Not Authent" />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={redirectLogin}>Log in</MenuItem>
                        </Menu>
                        </div>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}