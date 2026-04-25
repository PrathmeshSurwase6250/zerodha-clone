import React from 'react';

const Education = () => {
  return (
    <div className="container my-5">

      <div className="row align-items-center">

        {/* LEFT */}
        <div className="col-md-6">
          <img 
            src="education.svg" 
            className="img-fluid" 
            alt="Stock market education" 
          />
        </div>

        {/* RIGHT */}
        <div className="col-md-6">
          <h1 className="mb-3">Free and open market education</h1>

          <p className="text-secondary">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a href="/" className="text-primary text-decoration-none fw-medium d-inline-block mb-3 text-hover">
            Varsity 
            <i className="fa-solid fa-arrow-right ms-2"></i>
          </a>

          <p className="text-secondary">
            TradingQ&A, the most active trading and investment community in India
            for all your market related queries.
          </p>

          <a href="/" className="text-primary text-decoration-none fw-medium text-hover">
            TradingQ&A 
            <i className="fa-solid fa-arrow-right ms-2"></i>
          </a>
        </div>

      </div>

    </div>
  );
};

export default Education;