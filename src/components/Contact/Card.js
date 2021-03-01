import React from 'react';

const Card = ({ children, color, textColor, shade, title }) => (
  <div className={`card-panel ${color} ${textColor} center, ${shade}`}>
    <i className="material-icons medium">email</i>
    <h5>{title}</h5>
    {children}
  </div>
);

export default Card;
