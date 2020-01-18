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

  const fetchProfiles = async () => {
    if (pageNumber === 6) {
      return;
    }
    setLoading(true);
    var url = "https://randomuser.me/api/?results=40&page=" + pageNumber;
    console.log(url);
    setPageNumber(pageNumber + 1);
    const res = await axios.get(url);
    console.log(res.data);
    if (profiles.length === 0) {
      setProfiles(res.data.results);
    } else {
      setProfiles(profiles => [...profiles, ...res.data.results]);
    }

    setLoading(false);
  };
  useEffect(() => {
    // körs när komponenten mountas samt uppdateras...
    fetchProfiles();
  }, []);

  console.log(profiles);

  function loadMore() {
    fetchProfiles();
  }

  return (
    <div className="App">
      <Profiles profiles={profiles} loading={loading}></Profiles>
      <button onClick={loadMore}>Load more</button>
    </div>
  );
};

export default App;
