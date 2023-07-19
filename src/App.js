import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000)
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been enabled", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#212529';
      showAlert("Light Mode has been enabled", "success");
    }
  }

  // const blueToggleMode = ()=>{
  //   if(mode === 'light'){
  //     setMode('blue');
  //     document.body.style.backgroundColor = '#213363';
  //     document.body.style.color = 'white';
  //     showAlert("Blue Dark Mode has been enabled!", "success");
  //   }else{
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     document.body.style.color = '#212529';
  //     showAlert("Light Mode has been enabled", "success");
  //   }
  // }

  // const greyToggleMode = ()=>{
  //   if(mode === 'light'){
  //     setMode('grey');
  //     document.body.style.backgroundColor = '#526D82';
  //     document.body.style.color = 'white';
  //     showAlert("Grey Dark Mode has been enabled!", "success");
  //   }else{
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     document.body.style.color = '#212529';
  //     showAlert("Light Mode has been enabled", "success");
  //   }
  // }

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={[<Navbar title={"TextUtils"} mode={mode} toggleMode={toggleMode} />, <Alert alert={alert} />, <TextForm heading={"Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces"} showAlert={showAlert} mode={mode} toggleMode={toggleMode} />]}></Route>
        <Route exact path='/about' element={[<Navbar title={"TextUtils"} mode={mode} toggleMode={toggleMode} />, <Alert alert={alert} />,< About mode={mode} />]}></Route>
      </Routes>
    </BrowserRouter>    
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
