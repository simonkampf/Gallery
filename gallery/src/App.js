import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import axios from "axios";
import Profiles from "./components/Profiles";
import "./App.css";

const App = () => {
  const [profiles, setProfiles] = useState([]); // använda hooks
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [profilesPerPage, setProfilesPerPage] = useState(10);

  useEffect(() => {
    // körs när komponenten mountas samt uppdateras...
    const fetchProfiles = async () => {
      setLoading(true);
      const res = await axios.get("https://randomuser.me/api/?results=50");
      console.log(res.data);

      setProfiles(res.data.results);
      setLoading(false);
    };
    fetchProfiles();
  }, []);

  console.log(profiles);

  return (
    <div className="App">
      <Profiles profiles={profiles} loading={loading}></Profiles>
    </div>
  );
};

export default App;
