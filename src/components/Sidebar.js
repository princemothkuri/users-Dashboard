import React, { useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const Sidebar = ({ users, onUserClick }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="sidebar">
      <SimpleBar style={{ maxHeight: "85vh" }}>
        {users.map(function (user, index) {
          return (
            <>
              <p
                id={selectedUser === index ? "select" : ""}
                key={user.id}
                onClick={() => {
                  onUserClick(user);
                  setSelectedUser(index);
                }}
                className="d-flex gap-2 align-items-center"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                  alt="image"
                  style={{ width: "25px", height: "25px" }}
                />
                {user.profile.firstName} {user.profile.lastName}
              </p>
            </>
          );
        })}
      </SimpleBar>
    </div>
  );
};

export default Sidebar;
