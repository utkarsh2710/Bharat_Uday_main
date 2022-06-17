import React from "react";
import AddIcon from '@mui/icons-material/Add';
import ButtonText from "./ButtonText.jsx";

function NotHomeButton(props) {
  
  const [isClicked,SetIsClicked] = React.useState(false);

  function handleClick(){
    SetIsClicked(!isClicked);
  }

  return (
    <div class="not-home-button">

      <p style={{display:"inline-block", backgroundColor:"#FFED54", paddingRight: "7px", paddingLeft: "7px"}}>{props.title}</p>
      <AddIcon onClick={handleClick} style={{marginLeft:"50px", position:"relative", top:"7px"}}/>
      
      {isClicked ? <ButtonText text={props.text}/> : null}
      <hr style={{marginTop:"10px"}}></hr>

    </div>
  );
}

export default NotHomeButton;