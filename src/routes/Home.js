import React from "react";
import fiorDiLatte from "../fiorDiLatte.png";
import Header from "../components/Header";

function Home(props) {
  return (
    <div>
      <Header headerText="Home"/>
      <div
        className="border border-info rounded-3 mx-auto px-4 py-4"
        style={{
          maxWidth: "690px"
        }}>
        <img src={fiorDiLatte} className="img-fluid" alt="fiorDiLatte" />
      </div>
    </div>
  );
}

export default Home;
