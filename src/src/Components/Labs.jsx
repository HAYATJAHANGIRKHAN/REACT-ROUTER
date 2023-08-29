import React from 'react'
import { useNavigate } from 'react-router-dom';

function Labs() {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/about")
    
  }
  return (
    <div>
    <div>
      AHMAD
    </div>
    <button onClick={clickHandler}> MOve to About Page</button>
    </div>
  )
}
export default Labs;