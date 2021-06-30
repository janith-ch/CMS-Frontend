/** @format */
import React from "react";
import { Route, Switch } from "react-router-dom";
//import Routepaths from "./route-paths";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import CreateUser from "../pages/admin/user/CreateUser";
import EditUser from "../pages/admin/user/EditUser";
import UserList from "../pages/admin/user/UserList";
import UserDetail from "../pages/admin/user/UserDetail";
import ReviewerList from "../pages/admin/reviewer/ReviewerList";
import Home from "../pages/home/Home";
import CreateReviewer from "../pages/admin/reviewer/CreateReviewer";
import EditReviewer from "../pages/admin/reviewer/EditReviewer";
import PendingUsers from "../pages/admin/pending users/PendingUsers";
import HomeDashboard from "../pages/home/dashboard/HomeDashboard";
import CreateSuperUser from "../pages/admin/super users/CreateSuperUser";
import EditSuperUser from "../pages/admin/super users/EditSuperUser";
import SuperUserList from "../pages/admin/super users/SuperUserList";
import MiniDrawer from "../components/admin/navbar/Drawer";
import Login from "../pages/Login&Register/Login";
import ViewConference from "../pages/home/conference/ViewConferance";
import AdminViewConference from "../pages/admin/conference/ViewConference";
import ViewKeynote from "../pages/admin/keynotes/ViewKeynotes";
import CreateConference from "../pages/admin/conference/CreateConference";
import ViewWorkshop from "../pages/admin/workshop/ViewWorkshop";
import PendingWorkshop from "../pages/admin/workshop/PendingWorkshop";
import Editworkshop from "../pages/admin/workshop/EditWorkshop";
import EditConference from "../pages/admin/conference/EditConference";
import CreateKeynotes from "../pages/admin/keynotes/CreateKeynotes";

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
              <Route path={`${url}/login`} component={Login} />
              <Route path={`${url}/conference`} component={ViewConference} />
            </Home>
          )}
        />

        <Route
          path="/admin"
          render={({ match: { url } }) => (
            <MiniDrawer>
              <Route path={url} component={Dashboard} exact />
              <Route path={`${url}/dashboard`} component={Dashboard} />
              <Route
                path={`${url}/user-list`}
                render={({ match: { url } }) => (
                  <div>
                    <Route path={url} component={UserList} exact />
                    <Route path={`${url}/create`} component={CreateUser} />
                    <Route path={`${url}/edit/:id`} component={EditUser} />
                    <Route path={`${url}/detail/:id`} component={UserDetail} />
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
              <Route
                path={`${url}/super-users`}
                render={({ match: { url } }) => (
                  <div>
                    <Route path={url} component={SuperUserList} exact />
                    <Route path={`${url}/create`} component={CreateSuperUser} />
                    <Route path={`${url}/edit/:id`} component={EditSuperUser} />
                  </div>
                )}
              />
              <Route
                path={`${url}/keynotes`}
                render={({ match: { url } }) => (
                  <div>
                    <Route path={url} component={ViewKeynote} exact />
                    <Route path={`${url}/create`} component={CreateKeynotes} />
                  </div>
                )}
              />
              <Route
                path={`${url}/conference`}
                render={({ match: { url } }) => (
                  <div>
                    <Route path={url} component={AdminViewConference} exact />
                    <Route
                      path={`${url}/create`}
                      component={CreateConference}
                    />
                    <Route
                      path={`${url}/edit/:id`}
                      component={EditConference}
                    />
                  </div>
                )}
              />
              <Route
                path={`${url}/workshop`}
                render={({ match: { url } }) => (
                  <div>
                    <Route path={url} component={ViewWorkshop} exact />
                    <Route
                      path={`${url}/pending`}
                      component={PendingWorkshop}
                    />
                    <Route path={`${url}/edit/:id`} component={Editworkshop} />
                  </div>
                )}
              />
            </MiniDrawer>
          )}
        />
      </Switch>
    </>
  );
};

export default BaseRoutes;
