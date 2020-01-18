import React from "react";
import "./Profiles.css";
const Profiles = ({ profiles, loading }) => {
  if (loading) {
    return <h2>loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {profiles.map(profile => (
        <li key={profile.uuid} className="list-group-item">
          <div class="card" className="Profiles">
            <div class="card-body">
              <h5 class="card-title">
                {profile.name.title +
                  " " +
                  profile.name.first +
                  " " +
                  profile.name.last}
              </h5>
              <img src={profile.picture.large}></img>
              <p class="card-text">
                {"Date of birth: " + profile.dob["date"].substring(0, 10)}
                <br></br>
                {"\n Country: " + profile.location.country}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Profiles;
