import React from 'react'
import { useNavigate } from 'react-router-dom';

 function Support() {
  const navigate= useNavigate();
   function clickHandler(){
    navigate("/")
   }
  function backHandler(){
    navigate(-1);

   }

  return (
    <div>
   <div>
    support
   </div>
   <button onClick={clickHandler}> Move to Home</button>
   <button onClick={backHandler}>Go Back</button>
    </div>
  )
}
export default Support;