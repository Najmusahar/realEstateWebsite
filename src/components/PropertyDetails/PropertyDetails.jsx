import React, { useEffect, useState } from "react";
import data from "../../utils/slider.json";
import "./PropertyDetails.css";
import Header1 from "../Header/Header1";
import Footer from "../Footer/Footer";

const PropertyDetails = () => {
  const [cardDetails, setCardDetails] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

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

          <div className="property-info">
            <div className="info-item">
              <strong>Configuration:</strong> 2 BHK
            </div>
            <div className="info-item">
              <strong>Rent:</strong> ₹{cardDetails.price}
            </div>
            <div className="info-item">
              <strong>Area:</strong> 1200 sqr ft
            </div>
            <div className="info-item">
              <strong>Address:</strong>Whitefield, Bangalore, Karnataka
            </div>
            <div className="info-item">
              <strong>Furnishing:</strong> Semi-Furnished
            </div>
            <div className="info-item">
              <strong>Available For:</strong> Family, Bachelors
            </div>
            <div className="info-item">
              <strong>Available From:</strong> 1st December 2024
            </div>
            <div className="info-item">
              <strong>Posted By:</strong> Owner
            </div>
            <div className="info-item">
              <strong>Posted On:</strong> 20th November 2024
            </div>
          </div>
        </div>
      </div>

      <div className="nearby-section">
        <h3>Near By</h3>
        <div className="nearby-icons">
          <div className="icon-item">
            <span role="img" aria-label="metro">
              🚇
            </span>{" "}
            <select className="dropdown">
              <option> Metro</option>
              <option>Whitefield Metro Station</option>
              <option>MG Road Metro Station</option>
              <option>Indiranagar Metro Station</option>
              <option>Majestic Metro Station</option>
            </select>
          </div>

          <div className="icon-item">
            <span role="img" aria-label="groceries">
              🛒
            </span>{" "}
            <select className="dropdown">
              <option>Groceries</option>
              <option>Big Bazaar</option>
              <option>Reliance Fresh</option>
              <option>More Supermarket</option>
              <option>D-Mart</option>
            </select>
          </div>

          <div className="icon-item">
            <span role="img" aria-label="bus-stop">
              🚏
            </span>{" "}
            <select className="dropdown">
              <option>Bus Stop</option>
              <option>Whitefield Bus Stop</option>
              <option>KR Puram Bus Stop</option>
              <option>Marathahalli Bus Stop</option>
              <option>Majestic Bus Terminal</option>
            </select>
          </div>
        </div>
      </div>
      <div className="contact-container">
        {/* Left Section */}
        <div className="left-section">
          <h2>Let's Chat</h2>
          <p>
          Have any questions or concerns? We're here to help! Fill out the form
        on the right or contact us via email or phone. Let's start a
        conversation and find the solutions you need.
          </p>


          {/* <p>Feel free to send me a message in the contact form.</p> */}
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h3>Contact</h3>

          <form className="contact-form">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name *"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email *"
                required
              />
            </div>

            <div className="form-group">
              <input type="tel" id="phone" name="phone" placeholder="Phone" />
            </div>

            <button type="submit" className="submit-button">
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default PropertyDetails;
