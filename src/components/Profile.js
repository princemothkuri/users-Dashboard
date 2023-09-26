import React, { useState, useEffect } from "react";

const Profile = ({ profile }) => {
  const [showText, setShowText] = useState(true);
  const [data, setData] = useState();

  if (!profile) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <h3>Please select a user to display there profile.</h3>
      </div>
    );
  }

  if (data !== profile) {
    setShowText(false);
    setData(profile);
    setTimeout(() => {
      setShowText(true);
    }, 500);
  }

  // useEffect(() => {
  //   setShowText(profile);
  // }, [showText]);

  return (
    <>
      <section class={`vh-100 card5 ${showText ? "card1" : "card2"}`}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-lg-11 mb-4 mb-lg-0">
              <div class="card mb-3" style={{ borderRadius: ".5rem" }}>
                <div class="row g-0">
                  <div
                    class="col-md-5 gradient-custom text-center text-white d-flex flex-column justify-content-center align-content-center"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: ".5rem",
                    }}
                  >
                    <div>
                      <img
                        src={
                          "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        }
                        alt="Avatar"
                        class="img-fluid mb-3"
                        style={{ width: "80px" }}
                      />
                    </div>
                    <h5>@{data ? data.profile.username : ""}</h5>
                  </div>
                  <div class="col-md-7">
                    <div class="card-body p-4">
                      <h6>Information</h6>
                      <hr class="mt-0 mb-4" />
                      <div class="row pt-1">
                        <div class="col-12 mb-3">
                          <h6>Full Name</h6>
                          <p class="text-muted">
                            {data ? data.profile.firstName : ""}{" "}
                            {data ? data.profile.lastName : ""}
                          </p>
                        </div>
                      </div>
                      <div class="row pt-1">
                        <div class="col-12 mb-3">
                          <h6>Job Title</h6>
                          <p class="text-muted">{data ? data.jobTitle : ""}</p>
                        </div>
                      </div>
                      <div class="row pt-1">
                        <div class="col-12 mb-3">
                          <h6>Email</h6>
                          <p class="text-muted">
                            {data ? data.profile.email : ""}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
