import * as React from "react";

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
        <header className="travel-options">
          <TravelOption src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f83f070afd126c12b8a103f5c95aaba8daf137913af61eef7ea93b280708925?apiKey=8044b0bd7a224965926e382e5c2e8503&" alt="Packages" label="Packages" />
          <TravelOption src="https://cdn.builder.io/api/v1/image/assets/TEMP/e97557883260abe19c9e1930509f22e27d220f3992d0a0cea6b7b0f915d4828b?apiKey=8044b0bd7a224965926e382e5c2e8503&" alt="Hotels" label="Hotels" className="highlighted" />
          <TravelOption src="https://cdn.builder.io/api/v1/image/assets/TEMP/4059f10a8b0968a19d925d014ada52f20fdd7095f11c85b722a0fa68b502c82f?apiKey=8044b0bd7a224965926e382e5c2e8503&" alt="Cruises" label="Cruises" />
          <TravelOption src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e8e4eb545f9ffb74418f36e7d68a164aad47c3ab8d625d36a0aa09ec484a270?apiKey=8044b0bd7a224965926e382e5c2e8503&" alt="Rental Cars" label="Rental Cars" />
        </header>
        
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
      
      <style jsx>{`
        .main-section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 30px 25px;
          background-color: #fff;
        }
        
        .travel-options {
          display: flex;
          justify-content: space-between;
          font-size: 20px;
          color: #666;
          font-weight: 300;
        }
        
        .travel-option {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        
        .highlighted {
          color: #3572a1;
        }
        
        .travel-image {
          object-fit: auto;
          object-position: center;
          width: 30px;
        }
        
        .divider {
          border-top: 1px solid #3572a1;
          margin: 10px 0;
        }
        
        .required-fields {
          font-size: 14px;
          color: #003054;
          margin-top: 30px;
        }
        
        .vacation-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 20px;
        }

        .input-field {
          display: flex;
          flex-direction: column;
        }

        .input-label {
          font-size: 14px;
          color: #003054;
          font-weight: 400;
        }

        .input {
          margin-top: 5px;
          padding: 10px 15px;
          border: 1px solid #003054;
          border-radius: 5px;
          font-weight: 300;
          font-size: 14px;
          color: #666;
        }

        .room-info {
          display: flex;
          gap: 10px;
        }

        .add-options {
          display: flex;
          gap: 10px;
          margin-top: 10px;
        }

        .add-option {
          display: flex;
          gap: 6px;
          align-items: center;
        }

        .note-age {
          font-size: 14px;
          color: #666;
          margin-top: 10px;
        }

        .submit-btn {
          margin-top: 20px;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          background-color: #3572a1;
          color: #fff;
          font-size: 16px;
          font-weight: 300;
          text-align: center;
          cursor: pointer;
      `}</style>
    </>
  );
}

export default HotelsearchWidget;