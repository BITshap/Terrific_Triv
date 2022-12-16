import React,{useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

/* function DropDownButtonWrapper({children}) {
    return (
        <>
        <style type="text/css">
        {`
    .btn-test {
      background-color: white;
      color: black;
    }`}
      </style>
      <DropdownButton variant="test">{children}</DropdownButton>
        </>
    )
} */

function input(props) {
  const [value,setValue]=useState({});
  const handleSelect=(e)=>{
    const selection = JSON.parse(e);
    setValue(selection);
    props.setId(selection._id);
  }

  return (
    <div className="drop-down-container">
        <div id="button-wrap">
      <DropdownButton style={{backgroundColor:"white"}} className="linky-button"
        title="Options"
        onSelect={ (e) => handleSelect(e)}
      >
            {props.options.map(option => (
                <div>
                    <Dropdown.Item style={{color:"purple", textAlign:"center"}} eventKey={ JSON.stringify(option) }>{ option.name }</Dropdown.Item>
                    <Dropdown.Divider />
                </div>
            ))}
      </DropdownButton>
      </div>
      <div id="selected">
      <h4>Selected Subject: {value.name}</h4>
      </div> 
    </div>
  );
}

export default input;