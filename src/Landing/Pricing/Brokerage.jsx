import React from "react";

const Brokerage = () => {
  return (
    <div className="container mt-5">
      <h2 style={{marginLeft : "50px"}}>Charges explained</h2>
      <div className="row d-flex justify-content-around">
      <div className="col-md-5 mt-4">
        <h6>Securities/Commodities transaction tax</h6>
        <p>
          Tax by the government when transacting on the exchanges. Charged as
          above on both buy and sell sides when trading equity delivery. Charged
          only on selling side when trading intraday or on F&O.
        </p>
        <p>
          When trading at Zerodha, STT/CTT can be a lot more than the brokerage
          we charge. Important to keep a tab.
        </p>
        <h6>Transaction/Turnover Charges</h6>
        <p>
          Charged by exchanges (NSE, BSE, MCX) on the value of your
          transactions.
        </p>
        <p>
          BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to
          ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged
          into a new group X w.e.f 01.12.2017)
        </p>
      </div>  
      <div className="col-md-5 mt-4">
        <h6>GST</h6>
       
        <p>
          Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)
        </p>
        <h6>SEBI Charges</h6>
        <p>
          Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.
        </p>
       
      </div>  
      </div>
    </div>
  );
};

export default Brokerage;
