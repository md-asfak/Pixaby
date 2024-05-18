import React from "react";
import spiner from "../Images/Spinner-3.gif";

function Loder() {
  return (
    <div className="flex justify-center items-center">
      <img src={spiner} alt="loder image" className="w-52" />
    </div>
  );
}

export default Loder;
