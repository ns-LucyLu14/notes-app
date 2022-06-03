import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AvatarImg from "../images/avatar1.svg";

import { makeStyles } from "@mui/styles";
import { Drawer } from "@mui/material";
import { Typography } from "@mui/material";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import { SubjectOutlined } from "@mui/icons-material";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Avatar } from "@mui/material";

const drawerWidth = 240;

const menuItems = [
  {
    text: "My Notes",
    icon: <SubjectOutlined color="secondary" />,
    path: "/",
  },
  {
    text: "Create New Note",
    icon: <AddCircleOutlineOutlined color="secondary" />,
    path: "/create",
  },
];

const useStyles = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: "lightgray",
      width: "100%",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },

    active: {
      background: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(2),
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

const Layout = (props) => {
  const classes = useStyles();

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={classes.root}>
      {/* AppBar */}
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          <Typography flexGrow={1}>This is my material ui notes app</Typography>
          <Typography>Domagoj</Typography>
          <Avatar src={AvatarImg} className={classes.avatar} />
        </Toolbar>
      </AppBar>

      {/* Side drawwer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Domagoj's Notes App
          </Typography>
        </div>

        {/* list items / links */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => navigate(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
