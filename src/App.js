import { useState } from "react";
//import { useInRouterContext } from "react-router-dom";
import "./App.css";
//import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";



function App() {
  const [mode,setMode] = useState('light') //whether dark mode is enabled or not 
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#212529'
      document.body.style.color = 'white'
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#212529'
      showAlert("Light mode has been enabled", "success")
    }
  }
  const [alert, setAlert] = useState(null)
  
  const showAlert = (message, type) => {
    setAlert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  return (
    // <Router>
    <>
    <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
    <div className="container my-3">
      
      <TextForm showAlert={showAlert} heading="Enter The text to analyse Below" mode={mode} />
    </div>
    </>
    );
    }
export default App;
