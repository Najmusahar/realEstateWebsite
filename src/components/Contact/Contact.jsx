import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by Providing the best services for you. We
            beleive a good blace to live can make your life better{" "}
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <a
                      href="https://wa.me/919902823247"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="secondaryText"
                    >
                      +91-9902823247
                    </a>
                  </div>
                </div>
                <a     href="https://wa.me/919902823247"
                      target="_blank"
                      rel="noopener noreferrer">
                <div className="flexCenter button">Call Now</div></a>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <a
                      href="https://wa.me/919902823247"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="secondaryText"
                    >
                      +91-9902823247
                    </a>
                  </div>
                </div>
                <a     href="https://wa.me/919902823247"
                      target="_blank"
                      rel="noopener noreferrer">
                <div className="flexCenter button">Chat Now</div></a>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <a
                      href="https://wa.me/919902823247"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="secondaryText"
                    >
                      +91-9902823247
                    </a>
                  </div>
                </div>
                <a     href="https://wa.me/919902823247"
                      target="_blank"
                      rel="noopener noreferrer">
                <div className="flexCenter button">Video Call Now</div></a>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <a
                      href="https://wa.me/919902823247"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="secondaryText"
                    >
                      +91-9902823247
                    </a>
                  </div>
                </div>
                <a     href="https://wa.me/919902823247"
                      target="_blank"
                      rel="noopener noreferrer">
                <div className="flexCenter button">Message Now</div></a>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./rs3.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
