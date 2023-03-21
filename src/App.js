import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) => {
   setAlert({
      message: message,
        type: type
   })
   setTimeout(() => {
      setAlert(null)
    },(1500))
  }
  const handleOnClick = () => {
    if (mode === 'light') {
      console.log('dark mode enabled')
      setmode('dark')
      document.body.style.backgroundColor = "rgb(136 143 177)";
      showAlert("Dark Mode has been enabled","success" )
    }
    else {
      console.log('light mode enabled')
      setmode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar mode={mode} handleOnClick={handleOnClick} />
        <Alert alert={alert} />

        <div className="container my-5">
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact
              path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading="Enter your text here below to analyze"
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}
