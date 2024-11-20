// import React from "react";
// import "./Footer.css";
// const Footer = () => {
//   return (
//     <div className="f-wrapper">
//       <div className="paddings innerWidth flexCenter f-container">
//         {/* left side */}
//         <div className="flexColStart f-left">
//           <img src="./logo2.png" alt="" width={120} />
//           <span className="secondaryText">
//             Our vision is to make all people <br />
//             the best place to live for them.
//           </span>
//         </div>

//         <div className="flexColStart f-right">
//           <span className="primaryText">Information</span>
//           <span className="secondaryText">
//             Head Office: 1234, Real Estate Avenue, Devanahalli, Bangalore -
//             562110
//           </span>
//           <span className="secondaryText">📞 Phone: +91-98765-43210</span>
//           <span className="secondaryText">📧 Email: info@yourcompany.com</span>


//           <span className="primaryText">Follow Us</span>
//           <span className="secondaryText">
//           Stay connected with us on:
//           </span>

//           {/* <div className="flexCenter f-menu">
//             <span>Property</span>
//             <span>Services</span>
//             <span>Product</span>
//             <span>About Us</span>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;



import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* Homzy Column */}
        <div className="flexColStart f-left">
          <img src="./logo1.jpeg" alt="Homzy Logo" width={120} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        {/* Information Column */}
        <div className="flexColStart f-middle">
          <span className="primaryText">Information</span>
          <span className="secondaryText">
            Head Office: 1234, Real Estate Avenue, Devanahalli, Bangalore -
            562110
          </span>
          <span className="secondaryText">📞 Phone: +91-98765-43210</span>
          <span className="secondaryText">📧 Email: info@yourcompany.com</span>
        </div>

        {/* Follow Us Column */}
        <div className="flexColStart f-right">
          <span className="primaryText">Follow Us</span>
          <span className="secondaryText">Stay connected with us on:</span>
          <div className="flexCenter social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./facebook.png" alt="Facebook" width={30} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./insta.jpg" alt="Instagram" width={30} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./twitter.jpg" alt="Twitter" width={30} />
            </a>
            <a
              href="https://wa.me/919902823247"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./whatsup.png" alt="WhatsApp" width={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
