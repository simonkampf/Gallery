import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import axios from "axios";
import Profiles from "./components/Profiles";
import LoadProfiles from "./components/LoadProfiles";
import "./App.css";

const App = () => {
  const { profiles, loading } = LoadProfiles("123", 2);

  console.log(profiles);

  return (
    <div className="App">
      <Profiles profiles={profiles} loading={loading}></Profiles>
    </div>
  );
};

export default App;
