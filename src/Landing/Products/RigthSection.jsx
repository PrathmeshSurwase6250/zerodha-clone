import React from 'react';

const RightSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className='container mt-5 p-5'>
      <div className="row align-items-center">
        
        <div className="col-lg-6 col-12">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <a href={tryDemo} className="btn btn-primary me-2">
            Try Demo
          </a>

          <a href={learnMore} className="btn btn-secondary">
            Learn More
          </a>

          <div className="mt-5 d-flex gap-3">
            <a href={googlePlay} target="_blank" rel="noopener noreferrer">
              <img 
                src="/googlePlayBadge.svg" 
                alt="Get it on Google Play" 
                className="img-fluid"
              />
            </a>

            <a href={appStore} target="_blank" rel="noopener noreferrer">
              <img 
                src="appstoreBadge.svg" 
                alt="Download on App Store" 
                className="img-fluid"
              />
            </a>
          </div>
        </div>

        <div className="col-lg-6 col-12 p-3">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>

      </div>
    </div>
  );
};

export default RightSection;