import React from 'react';

const Universe = () => {
  return (
    <div className='container mt-5 p-5'>
      
      <p className="text-center">
        Want to know more about our technology stack? Check out the Zerodha.tech blog.
      </p>

      <h4 className="text-center m-5">The Zerodha Universe</h4>

      <p className="text-center">
        Extend your trading and investment experience even further with our partner platforms
      </p>

      <div className="row mt-5 text-center">
        
        <div className="col-lg-4 col-md-6 mb-4">
          <img 
            src="/zerodhaFundhouse.png" 
            style={{ width: '150px' }} 
            alt="Zerodha Fundhouse" 
            className="img-fluid mb-3"
          />
          <p>
            Our asset management venture that is creating simple and transparent 
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <img 
            src="/sensibullLogo.svg" 
            style={{ width: '150px' }} 
            alt="Sensibull" 
            className="img-fluid mb-3"
          />
          <p>
            Options trading platform that lets you create strategies, analyze positions, 
            and examine data points like open interest, FII/DII, and more.
          </p>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <h1 style={{ textDecoration: "underline gold" }}>TIJORI</h1>
          <p>
            Investment research platform that offers detailed insights on stocks, 
            sectors, supply chains, and more.
          </p>
        </div>
        
      </div>

      <div className="row mt-5 text-center">
        
        <div className="col-lg-4 col-md-6 mb-4">
          <img 
            src="/streakLogo.png" 
            style={{ width: '150px' }} 
            alt="" 
            className="img-fluid mb-3"
          />
          <p>
           Systematic trading platform
that allows you to create and backtest
strategies without coding.
          </p>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <img 
            src="/smallcaseLogo.png" 
            style={{ width: '150px' }} 
            alt="Sensibull" 
            className="img-fluid mb-3"
          />
          <p>
           Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
           <img 
            src="/dittoLogo.png" 
            style={{ width: '100px' }} 
            alt="Sensibull" 
            className="img-fluid mb-3"
          />
          <p>
            Personalized advice on life
and health insurance. No spam
and no mis-selling.

          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Universe;