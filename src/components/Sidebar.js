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
              >
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
