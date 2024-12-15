import './App.css';
import { useState,useEffect} from 'react';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  const [darkMode, setDarkMode] = useState(true); // Start in dark mode by default

  // Set body class when the component mounts (initial render)
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]); // Only run when darkMode state changes

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  

  return (

    <div className={`app ${darkMode ? "dark" : "light"}`}>
     
      <div className="sidebar">
        <Sidebar darkMode={darkMode}/>
      </div>
      
      <div className="main">
        <Main darkMode={darkMode} toggleMode={toggleMode}/>
      </div>

    </div>
  );
}

export default App;
