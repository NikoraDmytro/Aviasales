import { CompanyLogo } from "components/CompanyLogo";
import React from "react";

import "./App.scss";

export const App = () => {
  return (
    <>
      <header>
        <CompanyLogo />
      </header>

      <main>
        <aside>Filters</aside>

        <div>Tickets</div>
      </main>
    </>
  );
};
