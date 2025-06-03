import React from "react";

export default function ReviewComponent ({ user, rating, reviewText, date }){
  return (
    <div className="review-card">
      {/* User Profile */}
      <div className="review-user">
        <img src={user.profilePic} alt={user.name} className="profile-pic" />
        <div>
          <h4>{user.name}</h4>
          <p className="user-status">{user.status}</p>
        </div>
      </div>

      <div className="stars">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <span key={index} className={index < rating ? "filled-star" : "empty-star"}>
              ★
            </span>
          ))}
      </div>

      <p className="review-text">"{reviewText}"</p>
      <p className="review-date">{date}</p>
    </div>
  );
};

