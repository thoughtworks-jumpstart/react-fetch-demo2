import React from "react";

function Card({ imageUrl, title }) {
  const styles = { width: "18rem" };

  return (
    <div className="card m-3" style={styles}>
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
}

export default Card;
