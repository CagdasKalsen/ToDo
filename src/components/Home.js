// components/Home.js
import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <h2 className="info">
        {" "}
        Welcome to the " Todo List" developed by Cagdas Kalsen.
      </h2>
      <h2 className="info">
        Start by clicking on the "TODOS" button located on the top right of the
        page. This will take you to the main Todo List screen.
      </h2>
    </div>
  );
};

export default Home;
