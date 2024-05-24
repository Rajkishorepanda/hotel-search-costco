import * as React from "react";

import packageicon  from '../images/flight.svg'
import hotelIcon  from '../images/hotel.svg'
import cruiseIcon  from '../images/cruisesvg.svg'
import rentalCarIcon  from '../images/rentalcar.svg'
import '../style/hotelsearchwidget.css'

const TravelOption = ({ src, alt, label, className }) => (
  <div className={`travel-option ${className}`}>
    <img src={src} alt={alt} className="travel-image" />
    <p className="travel-label">{label}</p>
  </div>
);

const InputField = ({ id, label, placeholder, type = "text" }) => (
  <div className="input-field">
    <label htmlFor={id} className="input-label">
      {label}
    </label>
    <input id={id} type={type} className="input" placeholder={placeholder} aria-label={label} />
  </div>
);

function HotelsearchWidget() {
  return (
    <>
      <section className="main-section">
       {/* <header className="travel-options">
          <TravelOption src={packageicon} alt="Packages" label="Packages" />
          <TravelOption src={hotelIcon} alt="Hotels" label="Hotels" className="highlighted" />
          <TravelOption src={cruiseIcon} alt="Cruises" label="Cruises" />
          <TravelOption src={rentalCarIcon} alt="Rental Cars" label="Rental Cars" />
        </header> */} 
        
        <hr className="divider" />
      
        <form className="vacation-form">
          <p className="required-fields">*Indicates required fields</p>
          <InputField id="destination" label="Destination*" placeholder="Please select a destination" />
          <InputField id="departure" label="Departure*" placeholder="mm/dd/yyyy" type="date" />
          <InputField id="return" label="Return*" placeholder="mm/dd/yyyy" type="date" />
          
          <div className="room-info">
            <InputField id="rooms" label="Rooms" placeholder="1" />
            <InputField id="adults" label="Adults (19+)" placeholder="2" />
            <InputField id="children" label="Children (0-18)" placeholder="0" />
          </div>
          
          <div className="add-options">
            <div className="add-option">
              <input type="checkbox" id="add-flight" />
              <label htmlFor="add-flight" className="option-label">Add Flight</label>
            </div>
          </div>
          <div className="add-options">
            <div className="add-option">
              <input type="checkbox" id="add-flight" />
              <label htmlFor="add-flight" className="option-label">Yes, I am at least 25 years old*</label>
            </div>
          </div>
          
          
          <button type="submit" className="submit-btn">Find My Vacation</button>
        </form>
      </section>
      
      
    </>
  );
}

export default HotelsearchWidget;