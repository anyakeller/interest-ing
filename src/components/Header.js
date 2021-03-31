import React from "react";
import { usePageDetailsContext } from "../utils/GlobalState";

function Header(props) {
  const [state, _] = usePageDetailsContext();
  return (
    <header>
      <h1>{"Header"}</h1>
    </header>
  );
}

export default Header;
