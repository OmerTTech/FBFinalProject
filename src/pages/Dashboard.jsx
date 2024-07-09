import React from "react";
import Searchbar from "../components/Searchbar/Searchbar";
import Article_td from "../components/Article_td/Article_td";

const Dashboard = () => {
  const articleComponents = [];
  for (let i = 0; i < 8; i++) {
    articleComponents.push(<Article_td key={i} />);
  }

  return (
    <>
      <Searchbar />
      <div className="box-container">
        <div className="box box1">
          <div className="text">
            <h2 className="topic-heading">60.5k</h2>
            <h2 className="topic">Article Views</h2>
          </div>

          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(31).png"
            alt="Views"
          />
        </div>

        <div className="box box2">
          <div className="text">
            <h2 className="topic-heading">150</h2>
            <h2 className="topic">Likes</h2>
          </div>

          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185030/14.png"
            alt="likes"
          />
        </div>

        <div className="box box3">
          <div className="text">
            <h2 className="topic-heading">320</h2>
            <h2 className="topic">Comments</h2>
          </div>

          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png"
            alt="comments"
          />
        </div>

        <div className="box box4">
          <div className="text">
            <h2 className="topic-heading">70</h2>
            <h2 className="topic">Published</h2>
          </div>

          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png"
            alt="published"
          />
        </div>
      </div>

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

          <div className="items">{articleComponents || null}</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
