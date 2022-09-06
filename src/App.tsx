import React from "react";

import { Tickets } from "components/Tickets";
import { CompanyLogo } from "components/CompanyLogo";
import { CurrencySwitch } from "components/CurrencySelect";
import { TransfersFilter } from "components/TransfersFilter";

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

          <TransfersFilter />
        </aside>

        <div>
          <Tickets />
        </div>
      </main>
    </>
  );
};
