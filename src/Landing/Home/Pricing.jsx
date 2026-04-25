import React from 'react';

const Pricing = () => {
  return (
    <div className="container my-5">

      <div className="row align-items-center">

        {/* LEFT */}
        <div className="col-md-4">
          <h1 className="mb-3">Unbeatable pricing</h1>
          <p className="text-secondary">
            We pioneered the concept of discount broking and price transparency in India.
            Flat fees and no hidden charges.
          </p>

          <a href="/" className="btn btn-primary">
            See Pricing 
            <i className="fa-solid fa-arrow-right ms-2"></i>
          </a>
        </div>

        {/* SPACE */}
        <div className="col-md-2"></div>

        {/* RIGHT */}
        <div className="col-md-6">
          <div className="row text-center">

            <div className="col border p-4">
              <h1>$0</h1>
              <p className="text-secondary">Account opening fee</p>
            </div>

            <div className="col border p-4">
              <h1>$20</h1>
              <p className="text-secondary">
                Intraday and <br /> F&O
              </p>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default Pricing;