/** @format */
import React from "react";
import { Route } from "react-router-dom";
import ReviewerList from "../components/admin/reviewer/ReviewerList";
import Dashboard from "../components/admin/dashboard/Dashboard";

const Routes = () => {
  return (
    <>
      <Route path="/admin/dashboard" component={Dashboard} />
      <Route path="/admin/reviewer-list" component={ReviewerList} />
    </>
  );
};

export default Routes;
