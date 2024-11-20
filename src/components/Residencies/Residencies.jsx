// import React from "react";
// import data from "../../utils/slider.json";
// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "./Residencies.css";
// import { sliderSettings } from "../../utils/common";
// const Residencies = () => {
//   return (
//     <div id="residencies" className="r-wrapper">
//       <div className="paddings innerWidth r-container">
//         <div className="flexColStart r-head">
//           <span className="orangeText">Best Choices</span>
//           <span className="primaryText">For Your Dream House</span>
//         </div>
//         <Swiper {...sliderSettings}>
//           <SlideNextButton />
//           {/* slider */}
//           {data.map((card, i) => (
//             <SwiperSlide key={i}>
              
//               <div className="flexColStart r-card">
//                 <img src={card.image} alt="home" />

//                 <span className="secondaryText r-price">
//                   <span style={{ color: "orange" }}>₹</span>
//                   <span>{card.price}</span>
//                 </span>
//                 <span className="primaryText">{card.name}</span>
//                 <span className="secondaryText">{card.detail}</span>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Residencies;

// const SlideNextButton = () => {
//   const swiper = useSwiper();
//   return (
//     <div className="flexCenter r-buttons">
//       <button onClick={() => swiper.slidePrev()} className="r-prevButton">
//         &lt;
//       </button>
//       <button onClick={() => swiper.slideNext()} className="r-nextButton">
//         &gt;
//       </button>
//     </div>
//   );
// };



import React from "react";
import data from "../../utils/slider.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import { sliderSettings } from "../../utils/common";

const Residencies = () => {
  // Function to navigate to a new page with ID
  const handleCardClick = (id) => {
    // window.location.href = `/PropertyDetails?id=${id}`;
    window.location.href = `/PropertyDetails?id=${id}`;
  };

  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">For Your Dream House</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div
                className="flexColStart r-card"
                onClick={() => handleCardClick(i)}
                style={{ cursor: "pointer" }}
              >
                <img src={card.image} alt="home" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>₹</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};


// import React from "react";
// import data from "../../utils/slider.json";
// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import "swiper/css";
// import "./Residencies.css";
// import { sliderSettings } from "../../utils/common";
// import { Link } from "react-router-dom";

// const Residencies = () => {
//   return (
//     <div id="residencies" className="r-wrapper">
//       <div className="paddings innerWidth r-container">
//         <div className="flexColStart r-head">
//           <span className="orangeText">Best Choices</span>
//           <span className="primaryText">For Your Dream House</span>
//         </div>
//         <Swiper {...sliderSettings}>
//           <SlideNextButton />
//           {/* slider */}
//           {data.map((card, i) => (
//             <SwiperSlide key={i}>
//               <Link
//                 to={`/property/${i}`}
//                 className="flexColStart r-card"
//                 style={{ textDecoration: "none", color: "inherit" }}
//               >
//                 <img src={card.image} alt="home" />
//                 <span className="secondaryText r-price">
//                   <span style={{ color: "orange" }}>₹</span>
//                   <span>{card.price}</span>
//                 </span>
//                 <span className="primaryText">{card.name}</span>
//                 <span className="secondaryText">{card.detail}</span>
//               </Link>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Residencies;

// const SlideNextButton = () => {
//   const swiper = useSwiper();
//   return (
//     <div className="flexCenter r-buttons">
//       <button onClick={() => swiper.slidePrev()} className="r-prevButton">
//         &lt;
//       </button>
//       <button onClick={() => swiper.slideNext()} className="r-nextButton">
//         &gt;
//       </button>
//     </div>
//   );
// };
