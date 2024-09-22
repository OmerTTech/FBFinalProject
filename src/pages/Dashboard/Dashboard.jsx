import React from "react";
import Searchbar2 from "../../components/Searchbar/Searchbar2";
import Infoboxs from "../../components/Infoboxs/Infoboxs";
import Artable from "../../components/Article_td/Artable";

const Dashboard = () => {

  return (
    <>
      <Searchbar2 />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
      />

      <Infoboxs />

      <Artable/>
    </>
  );
};

export default Dashboard;
