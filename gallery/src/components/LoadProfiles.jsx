import React, { useState, useEffect } from "react";
import axios from "axios";

export default function LoadProfiles(query, page) {
  const [profiles, setProfiles] = useState([]); // använda hooks
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // körs när komponenten mountas samt uppdateras...
    axios({
      method: "GET",
      url: "https://randomuser.me/api/?results=50"
    }).then(res => {
      setProfiles(res.data.results);
      setLoading(false);
      return { profiles, loading };
    });
    return { profiles, loading };
  }, []);
}
