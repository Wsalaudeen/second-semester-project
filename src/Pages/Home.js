import React from "react";
import Navigation from "../components/navigation";

const ProfileCard = () => {
  return (
    <>
      <div className="image-div">
        {" "}
        <img
          src="https://avatars.githubusercontent.com/Wsalaudeen"
          alt=" "
          className="profile-picture"
        />{" "}
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <section className="home-container">
        <Navigation />
        <div className="profile-block">
          <ProfileCard />
        </div>
        <div className="home-details">
          <p>
            <b>Name</b>: Salaudeen olanrewaju
          </p>
          <p>
            <b>Twitter</b>: @w_salaudeen
          </p>
          <p>
            <b>Job-tittle</b>: Frontend Engineer
          </p>
          <p>
            <b>Followers</b>: 225
          </p>
          <p>
            <b>Following</b>:741{" "}
          </p>
          <p>
            <b>Bio</b>:Working on living my best life
          </p>
        </div>
      </section>
    </>
  );
};
export default Home;
