import React from "react";

import { CompanyLogo } from "components/CompanyLogo";

import tickets from "shared/tickets.json";

import "./App.scss";

export const App = () => {
  return (
    <>
      <header>
        <CompanyLogo />
      </header>

      <main>
        <aside className="whiteBox">
          <p>ВАЛЮТА</p>

          <div>
            <input type="radio" name="currency" id="ruble" />
            <label htmlFor="ruble">RUB</label>

            <input type="radio" name="currency" id="dollar" />
            <label htmlFor="dollar">USD</label>

            <input type="radio" name="currency" id="euro" />
            <label htmlFor="euro">EUR</label>
          </div>

          <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>

          <div>
            <input type="checkbox" id="allTransfers" />
            <label htmlFor="allTransfers">Все</label>

            <input type="checkbox" id="NoTransfers" />
            <label htmlFor="NoTransfers">Без пересадок</label>

            <input type="checkbox" id="OneTransfer" />
            <label htmlFor="OneTransfer">1 пересадка</label>

            <input type="checkbox" id="TwoTransfers" />
            <label htmlFor="TwoTransfers">2 пересадки</label>

            <input type="checkbox" id="ThreeTransfers" />
            <label htmlFor="ThreeTransfers">3 пересадки</label>
          </div>
        </aside>

        <ul>
          {tickets.map((ticket) => (
            <li className="whiteBox">
              <div>
                {ticket.departure_time} - {ticket.arrival_time}
              </div>

              <div>
                <p>
                  {ticket.origin}, {ticket.origin_name}
                  <span>{ticket.departure_date}</span>
                </p>
                <p>
                  {ticket.destination_name}, {ticket.destination}
                  <span>{ticket.arrival_date}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};
