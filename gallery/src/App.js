import React, { useState, useEffect } from "react";
import axios from "axios";
import Profiles from "./components/Profiles";
import "./App.css";
import useScroll from "./components/useScroll";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [profiles, setProfiles] = useState([]); // all of the profiles to show
  const [loading, setLoading] = useState(false); // if we're waiting for the rest-response
  const [pageNumber, setPageNumber] = useState(1); // page number for next request
  const [allowMoreProfiles, setAllowMoreProfiles] = useState(true); // max profiles = 200
  useScroll(loading); // attach scroll-location-restore to loading boolean...

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

    setProfiles(profiles => [...profiles, ...res.data.results]); // append 40 new profiles to previous old data (or append to empty array if first)

    setLoading(false);
    if (pageNumber > 5) {
      setAllowMoreProfiles(false); // allow only 5*40 profiles to be loaded
    }
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    fetchProfiles();
  }, []);

  //console.log(profiles);

  //update button
  function loadMore() {
    fetchProfiles();
  }

  return (
    <div className="App">
      <h1>Secret Profiles</h1>

      <Profiles profiles={profiles} loading={loading}></Profiles>
      {loading === false && allowMoreProfiles === true ? ( // dont display button whilst loading or if we have reached limit for number of profiles (200)
        <button onClick={loadMore} className="btn btn-info">
          Load more
        </button>
      ) : null}
    </div>
  );
};

export default App;
