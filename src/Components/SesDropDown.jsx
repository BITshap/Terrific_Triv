import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

function input(props) {
  const [value, setValue] = useState({});

  const handleSelect = (e) => {
    const selection = JSON.parse(e);
    setValue(selection);
    console.log(selection);
    console.log(selection._id);
    props.setId(selection._id);
  }

  return (
    <div className="drop-down-container">
      <div id="button-wrap">
        <DropdownButton className="btn-success"
          title="Options"
          onSelect={(e) => handleSelect(e)}
        >
          {props.options.map((option, index) => (
            <div key={option.date}>
              <Dropdown.Item style={{ color: "purple", textAlign: "center" }} eventKey={JSON.stringify(option)}>Date: {option.date} | Score: {option.score}</Dropdown.Item>
              {index === props.options.length - 1 ? null : <Dropdown.Divider />}
            </div>
          ))}
        </DropdownButton>
      </div>
      <br />
      <div id="selected">
        <h4>Selected Session - Date: {value.date} | Score: {value.score}</h4>
        <Link to="/QuizData">
          <Button className="linky-button glow-on-hover glow-on-hover:before glow-on-hover:active glow-on-hover:active:after glow-on-hover:hover:before glow-on-hover:after glowing">Session Details</Button>
        </Link>
      </div>
    </div>
  );
}

export default input;