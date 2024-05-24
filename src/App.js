import './App.css';
import OptionsSearchWidget from './component/OptionsSearchWidget';
import NavBar from './component/navBar';

function App() {
  return (
    <div className='App'>
    <div>
      <NavBar/>
      
    </div>
    
   <div className='app-container'>
   <OptionsSearchWidget/>
      {/*<HotelsearchWidget/>
       <CruiseSearchWidget/> */} 
</div>
</div>

      
    
  );
}

export default App;
