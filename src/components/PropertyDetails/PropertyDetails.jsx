import React, { useEffect, useState } from "react";
import data from "../../utils/slider.json";
import "./PropertyDetails.css"; // Add your custom styling here

import Header from "../Header/Header";
import Header1 from "../Header/Header1";
import Footer from "../Footer/Footer";

const PropertyDetails = () => {
  const [cardDetails, setCardDetails] = useState(null);

  useEffect(() => {
    // Get the ID from the URL
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    // Find the card details using the ID
    if (id !== null && data[id]) {
      setCardDetails(data[id]);
    } else {
      console.error("Invalid ID or property not found");
    }
  }, []);

  if (!cardDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <Header1 />
      </div>
      <div className="details-page">
      <div className="image">
          <img src={cardDetails.image} alt={cardDetails.name} />
        </div>
        <div className="content">
          <h1>{cardDetails.name}</h1>
          <p className="price">Price: ₹{cardDetails.price}</p>
          <p className="detail">{cardDetails.detail}</p>

          {/* Additional Property Details */}
          <div className="property-info">
            <div className="info-item">
              <strong>Configuration:</strong> {cardDetails.configuration}
            </div>
            <div className="info-item">
              <strong>Rent:</strong> ₹{cardDetails.rent}
            </div>
            <div className="info-item">
              <strong>Area:</strong> {cardDetails.area} sqr ft
            </div>
            <div className="info-item">
              <strong>Address:</strong> {cardDetails.address}
            </div>
            <div className="info-item">
              <strong>Furnishing:</strong> {cardDetails.furnishing}
            </div>
            <div className="info-item">
              <strong>Available For:</strong> {cardDetails.availableFor}
            </div>
            <div className="info-item">
              <strong>Available From:</strong> {cardDetails.availableFrom}
            </div>
            <div className="info-item">
              <strong>Posted By:</strong> {cardDetails.postedBy}
            </div>
            <div className="info-item">
              <strong>Posted On:</strong> {cardDetails.postedOn}
            </div>
          </div>
        </div>

      
      </div>

      <div>
        <Footer/>
       </div>
    </>
  );
};

export default PropertyDetails;
