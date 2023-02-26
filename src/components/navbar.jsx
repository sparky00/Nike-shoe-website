import React from "react";

const Navbar = () => {

  return (
    <div id="Left-Box" className="Box">
        {/* <h1>Navbar</h1> */}
      <nav>
        <ul> 
          <li>
            <a  className="button-59" href="#section-1">Home</a>
          </li>
          <li>
            <a  className="button-59" href="#section-2">About</a>
          </li>
          <li>
            <a  className="button-59" href="#section-3">Find a Store</a>
          </li>
          <li>
            <a className="button-59"  href="#section-4">Help</a>
          </li>
          <li>
            <a className="button-59"  href="#section-5">Join us</a>
          </li>
          <li>
            <a className="button-59"  href="#section-6">Sign In</a>
          </li>
          <li>
            <a  className="button-59" href="#section-7">Men</a>
          </li>
          <li>
            <a className="button-59"  href="#section-8">Women</a>
          </li>
          <li>
            <a className="button-59"  href="#section-9">Kids</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
