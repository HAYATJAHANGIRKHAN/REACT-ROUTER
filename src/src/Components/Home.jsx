import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

 function Home() {
  const navigate = useNavigate();
  function clickHandler(){
    navigate("/labs")
  }
  function backHandler(){
    navigate(-1)
  }
  return (
    <div>
      <div>
     This is my home page
     </div>
     <button onClick={clickHandler}> Move to labs</button> <br />
        <button onClick={backHandler}> move to back</button>
    </div>
  )
}

export default Home;