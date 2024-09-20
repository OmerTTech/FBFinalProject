import React from "react";
import Searchbar2 from "../../components/Searchbar/Searchbar2";
import Article_td from "../../components/Article_td/Article_td";
import Infoboxs from "./Infoboxs/Infoboxs";

const Dashboard = () => {

  return (
    <>
      <Searchbar2 />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
      />

      <Infoboxs />

      <div className="report-container">
        <div className="report-header">
          <h1 className="recent-Articles">Recent Articles</h1>
          <button className="view">View All</button>
        </div>

        <div className="report-body">
          <div className="report-topic-heading">
            <h3 className="t-op">Article</h3>
            <h3 className="t-op">Views</h3>
            <h3 className="t-op">Comments</h3>
            <h3 className="t-op">Status</h3>
          </div>

          <div className="items">
            {[...Array(6)].map((_, i) => (
              <Article_td key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
