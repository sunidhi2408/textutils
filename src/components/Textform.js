import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClClick = () => {
    setText('');
    props.showAlert("Text cleared!", "success");
  };

  const handleCopy = () => {
    var textElement = document.getElementById("myBox");
    textElement.select();
    navigator.clipboard.writeText(textElement.value);
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleExtraspace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            placeholder="Enter text here"
            style={{
              backgroundColor: props.mode === 'dark' ? 'gray' : 'white',
              color: props.mode === 'dark' ? 'white' : '#042743'
            }}
          ></textarea>
        </div>

        {/* Button container with spacing and responsiveness */}
        <div className="d-flex flex-wrap gap-2">
          <button className="btn btn-primary my-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary my-1" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary my-1" onClick={handleClClick}>
            Clear Text
          </button>
          <button className="btn btn-primary my-1" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary my-1" onClick={handleExtraspace}>
            Remove Extra Spaces
          </button>
        </div>
      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your text summary</h2>
        <p>{text.trim().split(/\s+/).filter((word) => word !== "").length} words and {text.length} characters</p>
        <p>{0.008 * text.trim().split(/\s+/).filter((word) => word !== "").length} minute read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
