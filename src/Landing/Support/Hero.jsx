import React from 'react'

const Hero = () => {
  return (
    <div className='container' style={{width : "100%" , height : "200px" , alignContent : "center" , background : "#F6F6F6" }}>
      <div className="inner d-flex justify-content-between m-1" style={{alignItems : "center"}}>
      <h1>Support Portal</h1>
      <button className='btn btn-secondary ' style={{background : "#397DD0"}}>My Tickets</button>
      </div>
      <input type="search" className='mt-3'  placeholder="Search tickets..." style={{width : "100%"}} name="" id="" />
    </div>
  )
}

export default Hero