/** @format */
import React from "react";
import { Route } from "react-router-dom";
import ReviewerList from "../components/admin/reviewer/ReviewerList";
import Dashboard from "../components/admin/dashboard/Dashboard";

const Routes = () => {
  return (
    <>
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/reviewerList" component={ReviewerList} />
    </>
  );
};

export default Routes;
