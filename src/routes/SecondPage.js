import React from "react";
import Header from "../components/Header";

function SecondPage(props) {
  return (
    <div>
    <Header/>
    <div
      className="border border-info rounded-3 mx-auto px-4 py-4"
      style={{
        maxWidth: "690px"
      }}>
      <h1>I'm the second page on this site!</h1>
    </div>
    </div>
  );
}

export default SecondPage;
