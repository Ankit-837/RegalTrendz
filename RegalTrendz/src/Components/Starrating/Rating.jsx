import React from "react";

const Rating = ({ rating, numReviews }) => {
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star"   style={{ color: 'rgb(157,157,157)' }}></i>);
    }

    if (hasHalfStar) {
      stars.push(
        <i
          key="half"
          className="fas fa-star-half-alt"
         style={{ color: 'rgb(157,157,157)'}}
        ></i>
      );
    }

    const remainingStars = 5 - stars.length;

    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <i
          key={`empty-${i}`}
          className="far fa-star"
          style={{ color: 'rgb(157,157,157)'}}
        ></i>
      );
    }

    return stars;
  };

  return (
    <div className="rating" style={{ display: "flex", alignItems: "center",justifyContent:"center" }}>
      <div className="stars">{renderStars()}</div>
      <p className="num-reviews" style={{marginTop:"16px"}}>{`(${numReviews} Review${
        numReviews !== 1 ? "s" : ""
      })`}</p>
    </div>
  );
};

export default Rating;
