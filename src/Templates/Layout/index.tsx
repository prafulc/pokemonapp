import React from "react";
import { Outlet } from "react-router-dom";

import ErrorBoundary from "../../Organism/ErrorBoundary/ErrorBoundary";
import style from "./index.module.scss";

const Layout = (): JSX.Element => {
  return (
    <div className="container">
      <div className={`row ${style.header}`}>
        <div className="col">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
            alt="pokemon"
            loading="lazy"
            className={style.logo}
          />
        </div>
      </div>
      <div className="row gy-4 gx-4">
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
      </div>
    </div>
  );
};

export default Layout;
