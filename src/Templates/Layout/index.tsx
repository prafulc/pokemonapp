import React from "react";
import { Outlet } from "react-router-dom";
import ErrorBoundary from "../../Organism/ErrorBoundary/ErrorBoundary";

const Layout = (): JSX.Element => {
  return (
    <ErrorBoundary>
        Layout
      <Outlet />
    </ErrorBoundary>
  );
};

export default Layout;
