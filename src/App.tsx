import React from "react";

import { Tickets } from "components/Tickets";
import { CompanyLogo } from "components/CompanyLogo";
import { CurrencySwitch } from "components/CurrencySelect";
import { TransfersFilters } from "components/TransfersFilters";

import "./App.scss";

export const App = () => {
  return (
    <>
      <header>
        <CompanyLogo />
      </header>

      <main>
        <aside className="whiteBox">
          <CurrencySwitch />

          <TransfersFilters />
        </aside>

        <div>
          <Tickets />
        </div>
      </main>
    </>
  );
};
