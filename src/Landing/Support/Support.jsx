import React from "react";
import Hero from "./Hero";
import Ticket from "./Ticket";

const Support = () => {
  return (
    <>
      <Hero />
      <div className="col-md-10 mt-5" style={{ marginLeft: "8%" }}>
        <div className="col">
        <Ticket
          heading="Account Opening"
          first="Resident individual"
          second="Minor"
          third="Non Resident Indian (NRI)"
          four="Company, Partnership, HUF and LLP"
          five="Glossary"
        />
        <Ticket
          heading="Your Zerodha Account"
          first="Your Profile"
          second="Account modification"
          third="Client Master Report (CMR) and Depository Participant (DP)"
          four="Nomination"
          five="Transfer and conversion of securities"
        />
        <Ticket
          heading="Kite"
          first="IPO"
          second="Trading FAQs"
          third="Margin Trading Facility (MTF) and Margins"
          four="Charts and orders"
          five="Alerts and Nudges"
        />
        <Ticket
          heading="Funds"
          first="Add money"
          second="Withdraw money"
          third="Add bank accounts"
          four="eMandates"
        />
        <Ticket
          heading="Console"
          first="Portfolio"
          second="Corporate actions"
          third="Funds statement"
          four="Reports"
          five="Profile"
        />
        <Ticket
          heading="Coin"
          first="Mutual funds"
          second="National Pension Scheme (NPS)"
          third="Fixed Deposit (FD)"
          four="Features on Coin
"
          five="Payments and Orders"
        />

        </div>
       
      </div>

    </>
  );
};

export default Support;
