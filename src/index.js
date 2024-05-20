import React from "react";
import ReactDom from "react-dom/client";
import { UserCard } from "./userCard";
import "./index.css";
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <UserCard />
  </React.StrictMode>
);
