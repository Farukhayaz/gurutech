import React,{useState,useEffect} from 'react';
import './App.css';
import Home from './pages/Home';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Hide the welcome message after 3 seconds (adjust the duration as needed)
    const timeoutId = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    // Clear the timeout to avoid side effects when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Run this effect only once on component mount
  return (
   <>
   {showWelcome ? (
        <div className="text-center h-[100vh] flex justify-center items-center p-4 bg-black">
          
          <img className='img' src='/image/lo.png'  alt='log'/>
          {/* <h1 className="text-6xl text-white font-bold">WELCOME TO YOUR <br/> <br/> GURU TECH IT SOLUTIONS </h1> */}
        </div>
      ) : (
        <Home />
      )}
   </>
  );
}

export default App;
