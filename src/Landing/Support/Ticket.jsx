import React from 'react'

const Ticket = ({heading , first , second , third  , four  , five}) => {
  return (
    <div className='container mt-5'>
      <div class="dropdown">
  <button class="btn btn-secondary "   type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" style={{width: "60%" , height : "40px" , background :"#FFFFFF" , color : "#424242", border : "1px solid #3d4c96" }  } aria-expanded="false">
    {heading}
  </button>
  <ul class="dropdown-menu" style={{width : "60%"  }} aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" style={{color : "rgb(61, 76, 150)"}} href="#">{first}</a></li>
    <li><a class="dropdown-item" style={{color : "#3d4c96"}} href="#">{second}</a></li>
    <li><a class="dropdown-item" style={{color : "#3d4c96"}} href="#">{third}</a></li>
    <li><a class="dropdown-item" style={{color : "#3d4c96"}} href="#">{four}</a></li>
    <li><a class="dropdown-item" style={{color : "#3d4c96"}} href="#">{five}</a></li>
  </ul>
</div>  
    </div>
  )
}

export default Ticket