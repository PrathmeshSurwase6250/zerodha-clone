import React from 'react';

const Award = () => {
  return (
    <div className="container my-5">

      <div className="row align-items-center">

        {/* LEFT */}
        <div className="col-md-6 text-dark">
          <h3 className="mb-4">Trust with confidence</h3>

          {[
            {
              title: "Customer-first always",
              desc: "That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments."
            },
            {
              title: "No spam or gimmicks",
              desc: "No gimmicks, spam, or annoying push notifications."
            },
            {
              title: "The Zerodha universe",
              desc: "A whole ecosystem with 30+ fintech startups."
            },
            {
              title: "Do better with money",
              desc: "We help you do better with your money."
            }
          ].map((item, index) => (
            <div className="mb-4" key={index}>
              <h6>{item.title}</h6>
              <p className="text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="col-md-6 text-center">
          <img
            src="ecosystem.png"
            className="img-fluid mb-3"
            alt="ecosystem"
          />

          <div className="d-flex justify-content-center gap-4">

            <a href="#" className="text-primary text-decoration-none fw-medium text-hover">
              Explore our products
              <i className="fa-solid fa-arrow-right ms-2"></i>
            </a>

            <a href="#" className="text-primary text-decoration-none fw-medium text-hover">
              Try Kite demo
              <i className="fa-solid fa-arrow-right ms-2"></i>
            </a>

          </div>
        </div>

      </div >
      <div className='text-center mt-5'> 
         <img
          src="pressLogos.png"
          className="img-fluid"
          alt="Press logos"
        />
      </div>
    </div>
  );
};

export default Award;