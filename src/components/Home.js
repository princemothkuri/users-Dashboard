import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Profile from "./Profile";
import Sidebar from "./Sidebar";

const Home = () => {
  const data = useLoaderData();

  const [users, setUsers] = useState(data.data);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4 p-3">
            <p
              className=" p-2 text-center"
              style={{
                color: "black",
                backgroundColor: "#C5DFFF",
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "29.26px",
                borderTopRightRadius: "5px",
                borderTopLeftRadius: "5px",
              }}
            >
              USERS LIST
            </p>
            <div className="usersList" style={{ height: "84vh" }}>
              <Sidebar users={users} onUserClick={handleUserClick} />
            </div>
          </div>
          <div className="col-8">
            <div className="row">
              {" "}
              <Profile profile={selectedUser} />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
