import React from "react";

const Footer = () => {
  return (
    <div className="container mt-5">
      <div className="row gy-4">
        {/* Left Section */}
        <div className="col-lg-3 col-md-6 col-12 text-center text-md-start">
          <h5 style={{ color: "#387ED1", fontSize: "35px" }}>Zerodha</h5>

          <p style={{ fontSize: "12px" }}>
            © 2010 - 2026, Zerodha Broking Ltd. <br />
            All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="d-flex gap-3 mt-2 justify-content-center justify-content-md-start">
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>

          <div className="d-flex gap-3 mt-3 justify-content-center justify-content-md-start">
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-brands fa-telegram"></i>
          </div>

          {/* App Buttons */}
          <div className="d-flex mt-4 gap-2 justify-content-center justify-content-md-start">
            <img
              src="googlePlayBadge.svg"
              className="img-fluid"
              alt="Google Play"
              style={{ maxWidth: "120px" }}
            />
            <img
              src="appstoreBadge.svg"
              className="img-fluid"
              alt="App Store"
              style={{ maxWidth: "120px" }}
            />
          </div>
        </div>
    {/* Account */}
<div className="col-lg-2 col-md-6 col-12 text-center text-md-start" style={{ fontSize: "13px" }}>
  <h5 style={{ fontSize: "20px" }}>Account</h5>

  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>Open an account</a>
  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>Minor demat account</a>
  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>NRI demat account</a>
  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>HUF demat account</a>
  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>Commodity</a>
  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>Dematerialisation</a>
  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>Fund transfer</a>
  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>MTF</a>
</div>

{/* Support */}
<div className="col-lg-2 col-md-6 col-12 text-center text-md-start" style={{ fontSize: "13px" }}>
  <h5 style={{ fontSize: "20px" }}>Support</h5>

  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>Contact us</a>
  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>Support portal</a>
  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>How to file a complaint?</a>
  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>Status of your complaints</a>
  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>Bulletin</a>
  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>Circular</a>
  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>Z-Connect blog</a>
  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>Downloads</a>
</div>

{/* Company */}
<div className="col-lg-2 col-md-6 col-12 text-center text-md-start" style={{ fontSize: "13px" }}>
  <h5 style={{ fontSize: "20px" }}>Company</h5>

  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>About</a>
  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>Philosophy</a>
  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>Press & media</a>
  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>Careers</a>
  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>Zerodha Cares (CSR)</a>
  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>Zerodha.tech</a>
  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>Open source</a>
  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>Referral program</a>
</div>

{/* Quick Links */}
<div className="col-lg-2 col-md-6 col-12 text-center text-md-start" style={{ fontSize: "13px" }}>
  <h5 style={{ fontSize: "20px" }}>Quick links</h5>

  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>Upcoming IPOs</a>
  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>Brokerage charges</a>
  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>Market holidays</a>
  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>Economic calendar</a>
  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>Calculators</a>
  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>Markets</a>
  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>Sectors</a>
  <a href="#" className="d-block mt-2 text-decoration-none" style={{ color: "#9B9B9B" }}>Gift Nifty</a>
</div>
        
           
          
      
       
      </div>
      <div className="row mt-4" style={{ fontSize: "11px", color: "#9B9B9B" }}>
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
          Registration no.: INZ000031633 CDSL/NSDL: Depository services through
          Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
          Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars
          Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
          560078, Karnataka, India. For any complaints pertaining to securities
          broking please write to <a href="">complaints@zerodha.com </a>, for DP
          related to <a href="">dp@zerodha.com. </a> Please ensure you carefully
          read the Risk Disclosure Document as prescribed by SEBI | ICF
        </p>
        <p>
          Procedure to file a complaint on <a href="">SEBI SCORES</a>: Register
          on SCORES portal. Mandatory details for filing complaints on SCORES:
          Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
          Communication, Speedy redressal of the grievances
        </p>
        <a href="">
          Smart Online Dispute Resolution | Grievances Redressal Mechanism
        </a>
        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
        <p>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>
        <p>
          India's largest broker based on networth as per NSE.{" "}
          <a href="">NSE broker factsheet </a>
        </p>
        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please{" "}
          <a href=""> create a ticket here. </a>
        </p>
        <p>
          *Customers availing insurance advisory services offered by Ditto
          (Tacterial Consulting Private Limited | IRDAI Registered Corporate
          Agent (Composite) License No CA0738) will not have access to the
          exchange investor grievance redressal forum, SEBI SCORES/ODR, or
          arbitration mechanism for such products.
        </p>
        <p>
          Fixed deposit products offered on this platform are third-party
          products (TPP) and are not Exchange traded products. These are offered
          through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI
          Registration No.: INZ000031633) is acting solely as a distributor for
          these products. Any disputes arising with respect to such distribution
          activity will not have access to SEBI SCORES/ODR, Exchange Investor
          Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits
          are regulated by the Reserve Bank of India (RBI).
        </p>
      </div>
    </div>
  );
};

export default Footer;
