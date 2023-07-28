import React from "react";
import Button1 from "./Button1";

const Navbar = () => {
  return (
    <div className="flex justify-between ml-10">
      <div>Coding Vets</div>
      <div className="flex gap-24 mr-10">
        <div>Home</div>
        {/* <div>Program</div>
        <div>Our Story</div>
        <div>Rules</div>
        <div>Contact</div> */}
        <div>
          <Button1 buttonText="Donate" padding="p-2" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
