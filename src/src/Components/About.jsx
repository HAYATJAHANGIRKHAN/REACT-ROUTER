import React from 'react'
import { useNavigate } from 'react-router-dom';

 function About() {
  const navigate =useNavigate();
  function onclickHandler() {
    navigate("/support")
  }
  return (
    <div>
      <div>
      JAHANGIR
      </div>
      <button onClick={onclickHandler}> Move to Support Page </button>
    </div>
  )
}
export default About;