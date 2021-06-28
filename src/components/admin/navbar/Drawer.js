/** @format */

import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import PersonIcon from "@material-ui/icons/Person";
import { Link } from "react-router-dom";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import EventIcon from "@material-ui/icons/Event";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            CMS ADMIN
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key="dashboard">
            <ListItemIcon>
              <Link to="/admin/dashboard">
                <DashboardIcon style={{ color: "#000000" }} />
              </Link>
            </ListItemIcon>
            <ListItemText primary="dashboard" />
          </ListItem>
          <ListItem button key="Users">
            <ListItemIcon>
              <Link to="/admin/user-list">
                <PersonIcon style={{ color: "#000000" }} />
              </Link>
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem button key="Super Users">
            <ListItemIcon>
              <Link to="/admin/super-users">
                <SupervisorAccountIcon style={{ color: "#000000" }} />
              </Link>
            </ListItemIcon>
            <ListItemText primary="Super Users" />
          </ListItem>
          <ListItem button key="Reviewers">
            <ListItemIcon>
              <Link to="/admin/reviewer-list">
                <SupervisedUserCircleIcon style={{ color: "#000000" }} />
              </Link>
            </ListItemIcon>
            <ListItemText primary="Reviewers" />
          </ListItem>
          <ListItem button key="Pending Users">
            <ListItemIcon>
              <Link to="/admin/pending-users">
                <AccessibilityIcon style={{ color: "#000000" }} />
              </Link>
            </ListItemIcon>
            <ListItemText primary="Pending Users" />
          </ListItem>
          <ListItem button key="Keynotes">
            <ListItemIcon>
              <Link to="/admin/keynotes">
                <AssignmentIndIcon />
              </Link>
            </ListItemIcon>
            <ListItemText primary="Keynotes" />
          </ListItem>
          <ListItem button key="Conference">
            <ListItemIcon>
              <Link to="/admin/conference">
                <EventIcon />
              </Link>
            </ListItemIcon>
            <ListItemText primary="Conference" />
          </ListItem>
        </List>

        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}
