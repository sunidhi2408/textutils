import React, { useState } from 'react';

export default function About() {
  const [mystyle, setmystyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  });

  const [btntext, setBtnText] = useState("Enable Dark Mode");

  const togglestyle = () => {
    if (mystyle.color === 'black') {
      // Switch to dark mode
      setmystyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white',
      });
      setBtnText("Enable Light Mode");
    } else {
      // Switch back to light mode
      setmystyle({
        color: 'black',
        backgroundColor: 'white',
      });
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <div className="container" style={mystyle}>
      <h1 className="my-3">About Us</h1>

      <div className="accordion" id="accordionExample" style={mystyle}>
        {/* Accordion Items */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>This is the first item’s accordion body.</strong>
            </div>
          </div>
        </div>

        {/* Add the remaining accordion items the same way */}
        {/* Accordion Item 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>This is the second item’s accordion body.</strong>
            </div>
          </div>
        </div>

        {/* Accordion Item 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>This is the third item’s accordion body.</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <button onClick={togglestyle} type="button" className="btn btn-primary">
          {btntext}
        </button>
      </div>
    </div>
  );
}
