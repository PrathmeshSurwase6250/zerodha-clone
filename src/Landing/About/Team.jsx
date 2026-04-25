import React from 'react'

const Team = () => {
  return (
    <div>   <div className='container  mt-5  '><br />
    
    <h5 className='mt-5' style={{marginLeft : '51%'}}>People</h5>
    <div className="row mt-5 d- justify-content-center" style={{color : '#A0A0A0', fontSize : '13px' , letterSpacing : '1px'}}>
      <div className="col " style={{display : 'flex' , justifyContent : 'center'}}>   
        <img  src="nithinKamath.jpg" style={{ borderRadius: "50%"   , marginBottom : '20px' , height : '200px' , width : '200px' }} alt="" />
      </div>
        <div className="col ">
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
    <p>Playing basketball is his zen.</p>
    <p>Connect on <a href="https://www.zerodha.com/" target="_blank" rel="noopener noreferrer">Homepage</a> / <a href="https://www.zerodha.com/tradingqnA/" target="_blank" rel="noopener noreferrer">TradingQnA</a> / <a href="https://twitter.com/zerodha" target="_blank" rel="noopener noreferrer">Twitter</a></p>
          </div>
    </div>

    </div></div>
  )
}

export default Team