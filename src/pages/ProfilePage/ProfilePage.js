import React from "react";
import { Helmet } from "react-helmet";
import LinearProgress from "@mui/material/LinearProgress";
import bountyIcon from "../../assets/images/bounty-3.webp";
import trustIcon from "../../assets/images/bounty.png";

const ProfilePage = () => {
  const userName = "Aryan Dixit";
  const userProfilePicture =
    "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
  const userEmail = "aryan.dixit@bc.com";
  const bounty = 400;
  const trustScore = 89;
  const trustColor =
    trustScore < 40 ? "error" : trustScore < 60 ? "warning" : "success";

  return (
    <>
      <Helmet>
        <title>DeMedia | Profile Page</title>
      </Helmet>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img
                    className="inline-block rounded-full ring-2 ring-white"
                    src={userProfilePicture}
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    {userName}
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">{userEmail}</p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:px-8 sm:py-8  mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <div>
                  <div className="flex items-center mb-3">
                    <img src={bountyIcon} alt="bounty" className="bountyIcon" />
                    <div className="ml-3">
                      <h2>
                        <strong>{bounty}</strong>
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <img src={trustIcon} alt="bounty" className="w-12" />
                    <div className="ml-2 flex-grow">
                      <LinearProgress
                        style={{
                          height: 10,
                          borderRadius: 5,
                        }}
                        color={trustColor}
                        variant="determinate"
                        value={trustScore}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
