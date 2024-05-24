import React, { useState } from 'react';

import '../style/hotelsearchwidget.css'

function CruiseSearchWidget() {

    const dropdownContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
      };
    
      const dropdownStyle = {
        fontSize: '14px',
    color: '#003054',
    fontWeight: 400,
    height: '35px', // Adjust height as needed
    width: '650px',
    //backgroundColor: '#3572a1'
        /* Add other dropdown styles here */
      };

      const radioStyle = {
        fontSize: '14px',
    color: '#003054',
    fontWeight: 400,
      };

      
  return (
    <>
      <section className="main-section">
      
        <hr className="divider" />
      
        <form className="vacation-form">
          <p className="required-fields">*Indicates required fields</p>
          <div style={dropdownContainerStyle}>
          <div>
        <input type="radio" id="allCruises" name="cruiseType" value="allCruises" checked />
        <label htmlFor="allCruises">All Cruises</label>
        <input type="radio" id="alaskaCruiseTours" name="cruiseType" value="alaskaCruiseTours" />
        <label htmlFor="alaskaCruiseTours">Alaska Cruise Tours</label>
      </div>
      <div>
  <label htmlFor="destination" style={dropdownStyle}>Destination*</label>
  </div>
      <select id="destination" label="Destination*"  style={dropdownStyle}>
          <option value="">Any Destination</option>
         <option value="destination1">Alaska</option>
         <option value="destination2">Antarctica</option>
            <option value="destination3">Asia Africa and Middle East</option>
            </select>
           
          </div> 
          <div>
  <label htmlFor="destination" style={dropdownStyle}>Depurture*</label>
  </div> 
          <div style={dropdownContainerStyle}>
          <select id="departure" label="Depurture*"  style={dropdownStyle}>
          <option value="">Please select departure month</option>
         <option value="destination1">May 2024</option>
         <option value="destination2">June 2024</option>
            <option value="destination3">July 2024</option>
            </select>  
          </div>
          <div>
  <label htmlFor="cruiseLine" style={dropdownStyle}>Cruise Line</label>
  </div> 
          <div style={dropdownContainerStyle}>
          <select id="departure" label="Depurture*"  style={dropdownStyle}>
          <option value="">Any Cruise Line</option>
         <option value="destination1">Azamara</option>
         <option value="destination2">Carnival Cruise</option>
            <option value="destination3">Celibrity Cruises</option>
            </select>  
          </div>
          <div>
  <label htmlFor="destination" style={dropdownStyle}>Duration</label>
  </div> 
          <div style={dropdownContainerStyle}>
          <select id="departure" label="Depurture*"  style={dropdownStyle}>
          <option value="">Any duration</option>
         <option value="destination1">1-2 Nights</option>
         <option value="destination2">3-6 Nights</option>
            <option value="destination3">7-10 Nights</option>
            </select>  
          </div>            
          <button type="submit" className="submit-btn">Search</button>
        </form>
      </section>
      
      
    </>
  );
}

export default CruiseSearchWidget;