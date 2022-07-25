import React from 'react'
// import { Button } from '@mui/material';
import styled from "styled-components";



function Search() {

  return (
    <>
      {/* <Button variant="contained">Contained</Button> */}
      <img className="natubeImage" alt="natube" src="image/나투브.png"
        style={{
          width: "30vw",
          height: "30vh",
          margin: "50px"
        }} />
        			
              
              <button type="button"  style={{
               position: "relative",
               right: "16.5em",
               bottom: "23em"
              }}>Login</button>
              <button type="button"  style={{
               position: "relative",
               right: "15.5em",
               bottom: "23em"
               }}>Signup</button>


<div className="bar">

<input type="text" style={{
  width: "33.6vw",
  height: "2.3vh",
  borderRadius: "16px",
  borderWidth: "1px",
  padding: "6px, 0, 6px, 0",
  margin: "2px 90px 2px 2px"
}}/>

</div>
        
    </>


  );

}





export default Search;