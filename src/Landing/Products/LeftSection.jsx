import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className=" container mt-5 p-5 ">
      <div className="row">
        <div className="col-6 p-3">
          <img src={imageURL} alt="" />
        </div>
        <div className="col-4 mt-5 m-lg-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <a href={tryDemo} className="btn btn-primary">
            Try Demo
          </a>
          <a href={learnMore} className="btn btn-secondary m-3">
            Learn More
          </a>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="/googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore}>
              <img
                src="appstoreBadge.svg"
                className="m-3"
                alt="Download on App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
