import logo from './logo.svg';
import './App.css';
import HotelsearchWidget from './component/HotelsearchWidget';
import NavBar from './component/navBar';

function App() {
  return (
    <div className='App'>
    <div>
      <NavBar/>
    </div>
    
   <div className='app-container'>
       <HotelsearchWidget/>
</div>
</div>

      
    
  );
}

export default App;
