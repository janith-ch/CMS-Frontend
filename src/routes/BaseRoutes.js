/** @format */
import React from "react";
import { Route, Switch } from "react-router-dom";
//import Routepaths from "./route-paths";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import CreateUser from "../pages/admin/user/CreateUser";
import EditUser from "../pages/admin/user/EditUser";
import UserList from "../pages/admin/user/UserList";
import ReviewerList from "../pages/admin/reviewer/ReviewerList";
import Admin from "../pages/admin/Admin";
import Home from "../pages/home/Home";
import CreateReviewer from "../pages/admin/reviewer/CreateReviewer";
import EditReviewer from "../pages/admin/reviewer/EditReviewer";
import PendingUsers from "../pages/admin/pending users/PendingUsers";
import HomeDashboard from "../pages/home/dashboard/HomeDashboard";

const BaseRoutes = () => {
  //const paths = RoutePaths;
  return (
    <>
      <Switch>
        <Route
          path="/home"
          render={({ match: { url } }) => (
            <Home>
              <Route path={url} component={HomeDashboard} exact />
              <Route path={`${url}/dashboard`} component={HomeDashboard} />
            </Home>
          )}
        />

        <Route
          path="/admin"
          render={({ match: { url } }) => (
            <Admin>
              <Route path={url} component={Dashboard} exact />
              <Route path={`${url}/dashboard`} component={Dashboard} />
              <Route
                path={`${url}/user-list`}
                render={({ match: { url } }) => (
                  <div>
                    <Route path={url} component={UserList} exact />
                    <Route path={`${url}/create`} component={CreateUser} />
                    <Route path={`${url}/edit/:id`} component={EditUser} />
                  </div>
                )}
              />
              <Route
                path={`${url}/reviewer-list`}
                render={({ match: { url } }) => (
                  <div>
                    <Route path={url} component={ReviewerList} exact />
                    <Route path={`${url}/create`} component={CreateReviewer} />
                    <Route path={`${url}/edit/:id`} component={EditReviewer} />
                  </div>
                )}
              />
              <Route
                path={`${url}/pending-users`}
                render={({ match: { url } }) => (
                  <div>
                    <Route path={url} component={PendingUsers} exact />
                  </div>
                )}
              />
            </Admin>
          )}
        />
      </Switch>
    </>
  );
};

export default BaseRoutes;
