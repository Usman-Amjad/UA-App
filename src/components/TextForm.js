import React, { useState } from "react";

const TextForm = (props) => {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text has been converted to uppercase', 'success');
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Text has been converted to lowercase', 'success');
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert('Text has been cleared', 'success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert('Text has been copied to clipboard', 'success');
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra spaces have been removed', 'success');
  };

  const [text, setText] = useState("Enter Text Here");

  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>

        <button className="btn btn-primary" onClick={handleClearClick}>
          Clear Text
        </button>

        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>

        <button className="btn btn-primary" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text:"Enter Something in the text box above to preview that here"}</p>
      </div>
    </>
  );
};

export default TextForm;
