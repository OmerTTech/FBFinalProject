import React from "react";
import Comingsoon from "../../assets/ComingSoon.png";

const SoonFuture = () => {
  return Comingsoon ? (
    <div className="w-100 d-flex justify-content-center">
        <img style={{width:"250px"}} src={Comingsoon} alt="Coming soon..." />
    </div>
  ) : (
    <h6 className=" alert alert-warning mt-2 m-0 text-center border-rounded w-50 mx-auto">
      Coming soon...
    </h6>
  );
};

export default SoonFuture;
