import React, { useState, useEffect } from "react";
import axios from "axios";
import Profiles from "./components/Profiles";
import "./App.css";
import useScroll from "./components/useScroll";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [profiles, setProfiles] = useState([]);

  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [allowMoreProfiles, setAllowMoreProfiles] = useState(true);
  useScroll(loading); // attach scroll-save to loading boolean...

  const fetchProfiles = async () => {
    if (!allowMoreProfiles) {
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
    if (pageNumber === 6) {
      setAllowMoreProfiles(false);
    }
  };
  useEffect(() => {
    // körs när komponenten mountas samt uppdateras...
    // eslint-disable-next-line react-hooks/exhaustive-deps
    fetchProfiles(); // är OK med funktion utanför eftersom hooks enbart uppdateras vid reload samt om loadMore-knappen trycks...?
  }, []);

  //console.log(profiles);

  function loadMore() {
    fetchProfiles();
  }

  return (
    <div className="App">
      <h1>Secret Profiles</h1>

      <Profiles profiles={profiles} loading={loading}></Profiles>
      {loading === false && allowMoreProfiles === true ? (
        <button onClick={loadMore} className="btn btn-info">
          Load more
        </button>
      ) : null}
    </div>
  );
};

export default App;
