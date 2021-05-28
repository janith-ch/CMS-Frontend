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
import Home from "../pages/Home";
import CreateReviewer from "../pages/admin/reviewer/CreateReviewer";
import EditReviewer from "../pages/admin/reviewer/EditReviewer";

const BaseRoutes = () => {
  //const paths = RoutePaths;
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />

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
            </Admin>
          )}
        />
      </Switch>
    </>
  );
};

export default BaseRoutes;
