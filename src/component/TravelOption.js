import * as React from 'react'

const TravelOption = ({ src, alt, label, className }) => (
    <div className={`travel-option ${className}`}>
      <img src={src} alt={alt} className="travel-image" />
      <p className="travel-label">{label}</p>
    </div>
  );

  export default TravelOption;