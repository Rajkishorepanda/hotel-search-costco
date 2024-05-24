import React,{ useState } from "react";

import packageicon  from '../images/flight.svg'
import hotelIcon  from '../images/hotel.svg'
import cruiseIcon  from '../images/cruisesvg.svg'
import rentalCarIcon  from '../images/rentalcar.svg'
import '../style/hotelsearchwidget.css'
import HotelsearchWidget from './HotelsearchWidget';
import CruiseSeachhWidget from './CruiseSearchWidget';

const TravelOption = ({ src, alt, label, className  }) => (
    <div className={`travel-option ${className}`} id="travel-option-div">
      <img src={src} alt={alt} className="travel-image" />
      <p className="travel-label">{label}</p>
    </div>
  );

function OptionsSearchWidget() {
    const [activeWidget, setActiveWidget] = useState('hotels');

    const renderActiveWidget = () => {
        switch (activeWidget) {
        //   case 'packages':
        //     return <PackageSearchWidget />;
          case 'hotels':
            return <HotelsearchWidget />;
          case 'cruises':
                
            return <CruiseSeachhWidget />;
          default:
            return null;
        }
      };
    return (
      <>
        <section className="main-section">
          <header className="travel-options">
            <TravelOption src={packageicon} alt="Packages" label="Packages"  />
            <a href="#" onClick={() => setActiveWidget('hotels')} style={{ textDecoration: 'none' }}>
                <TravelOption src={hotelIcon} alt="Hotels" label="Hotels"  />
                </a> 
                <a href="#" onClick={() => setActiveWidget('cruises')} style={{ textDecoration: 'none' }}>
            <TravelOption src={cruiseIcon} alt="Cruises" label="Cruises"  />
            </a>
            <TravelOption src={rentalCarIcon} alt="Rental Cars" label="Rental Cars" />
          </header>    
          {/* Render the active widget */}
        {renderActiveWidget()}  
        </section>
        
        
      </>
    );
  }
  
  export default OptionsSearchWidget;