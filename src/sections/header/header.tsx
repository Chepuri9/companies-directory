import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Avatar,
  IconButton,
  Badge,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useNavigate } from "react-router-dom";
import headerData from "./headerData.json";
import { Business as BusinessIcon } from "@mui/icons-material";

const ResponsiveHeader: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => setDrawerOpen((open) => !open);

  const navigate = useNavigate();
  const drawerContents = (
    <Box sx={{ width: 250, p: 2 }}>
      {/* Display logo */}
      <Button onClick={() => navigate("/")} sx={{ mb: 2, textAlign: "center" }}>
        <Box
          sx={{
            bgcolor: "primary.main",
            p: 1,
            cursor: "pointer",
            borderRadius: 1.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BusinessIcon sx={{ color: "white", fontSize: 24 }} />
        </Box>{" "}
      </Button>

      <Divider />
      <List>
        {headerData.nav.map((item) => (
          <ListItem
            sx={{
              cursor: "pointer",
              "&:hover": {
                bgcolor: "primary.light",
                color: "primary.main",
              },
            }}
            component={NavLink}
            to={item.to}
            key={item.label}
            onClick={handleDrawerToggle}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        <ListItem>
          <ListItemIcon>
            <Badge badgeContent={headerData.notifications} color="error">
              <NotificationsIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Avatar
              src={headerData.user.avatar}
              alt={headerData.user.name}
              sx={{ width: 32, height: 32 }}
            />
          </ListItemIcon>
          <ListItemText primary={headerData.user.name} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              minHeight: 64,
            }}
          >
            {/* Left: Logo and Menus */}
            <Box
              sx={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 3,
              }}
            >
              {/* Logo */}
              <Box
                onClick={() => navigate("/")}
                sx={{
                  bgcolor: "primary.main",
                  p: 1,
                  cursor: "pointer",
                  borderRadius: 1.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BusinessIcon sx={{ color: "white", fontSize: 24 }} />
              </Box>

              {/* Navigation - hidden on small screens */}
              {headerData.nav.map((item) =>
                !isMobile ? (
                  <Button
                    key={item.label}
                    component={NavLink}
                    to={item.to}
                    color="inherit"
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: 500,
                      fontSize: "1rem",
                    }}
                  >
                    {item.label}
                  </Button>
                ) : null
              )}
            </Box>

            {/* Right */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {!isMobile && (
                <IconButton color="inherit">
                  <Badge badgeContent={headerData.notifications} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              )}
              {!isMobile && (
                <IconButton color="inherit">
                  <Avatar
                    src={headerData.user.avatar}
                    alt={headerData.user.name}
                    sx={{ width: 32, height: 32 }}
                  />
                </IconButton>
              )}

              {/* Hamburger Menu (Mobile Only) */}
              {isMobile && (
                <>
                  <IconButton color="inherit" onClick={handleDrawerToggle}>
                    <MenuIcon />
                  </IconButton>
                  <Drawer
                    anchor="left"
                    open={drawerOpen}
                    onClose={handleDrawerToggle}
                  >
                    {drawerContents}
                  </Drawer>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default ResponsiveHeader;
