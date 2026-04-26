import React from 'react'

const Hero = () => {
  return (
    <div className='container'>
      <h1 className='text-center m-3'>Charges</h1>
      <p className='text-center'>List of all charges and taxes</p>
      <div className='row mt-5'>
        <div className='col-lg-4 col-md-6 mb-4 text-center'>
         <img src="pricing0.svg" alt="" />
         <h5>Free equity delivery</h5>
          <p>
           All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.  </p>  
        </div>
        <div className='col-lg-4 col-md-6 mb-4 text-center'>
         <img src="intradayTrades.svg" alt="" />
         <h5>Intraday and F&O trades</h5>
          <p>
           Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades. </p>  
        </div>
        <div className='col-lg-4 col-md-6 mb-4 text-center'>
         <img src="pricing0.svg" alt="" />
         <h5>Free direct MF</h5>
          <p>
          All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.    </p>  
        </div>
        </div>
          <div className="col-md-8 mt-5 text-center mx-auto">
          <h1>Open a Zerodha account</h1>
          <h3>Modern platform and apps , $0 investment , and flat $20 intraday and F&O trades</h3>
         
        <button className='btn btn-secondary' style={{background : "#387ED1"}}>investment offerings →</button>
      
        </div>

    </div>
  )
}

export default Hero