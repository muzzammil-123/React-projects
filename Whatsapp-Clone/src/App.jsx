import React from "react";
import BgImage from "./components/BgImage";
import CallPage from "./components/CallPage";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
    <>
      <div className="App">
        <BgImage />
        <CallPage />
      </div>
    </>
  );
}
