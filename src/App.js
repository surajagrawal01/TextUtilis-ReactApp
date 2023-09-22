// import logo from './logo.svg';
////JSx Is html with some changes 
//In JSX we can sue js inside curly brackets
import React,{useState} from "react"; //to import react and useState into App.js
import './App.css'; //=>Import App.css, So we can do styling with this file using App.CSS
//=>This variable we can use in jSX within curly brackets as JS
import Navbar from './components/Navbar';
////=> To import TextForm
import TextForm from './components/TextForm';
////=>To import Alert Component
import Alert from "./components/Alert";
////=>To import About 
// import About from './components/About';
////to import contacts us 
// import Contactus from './components/Contactus';

////=>to import things from react-router-dom
// import {
//   BrowserRouter,
//    Route,
//     Routes 
// } from "react-router-dom";


// {/*className is same as class attribute we used in HTML */}

function App() {

  const[mode, setMode] = useState('light');  //Create a state 

  const[alert, setAlert] = useState(null);  //created a state alert

  const [btnColor, setBtnColor] =useState('primary');  //created a btn color state variable to change btn as per different mode

  const [navBgColor, setNavBgColor] = useState('white');  //created a Navbar background color state variable

  const showAlert = (message,type)=>{    //showAlert function to call showAlert
    setAlert({  //creating alert variable to object by setting value of msg and type keys with the help of showAlert
      msg:message,
      type:type
    })
    setTimeout(()=>{   //used to null the showalert after 1.5sec 
      setAlert(null) 
    },1000)
  }

  //To enable redMode
  const redMode =()=>{
    if(mode === "light" || mode === "green" || mode === "dark" ){
      setMode('red');  //it change the color of text to white
      document.body.style.backgroundColor ="#CB4335";  //change background color of body
      setBtnColor('danger');  //set btn color
      setNavBgColor('#A93226'); //set navbar background color
      showAlert("Red Mode Enabled","success"); //to set alert message and type
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ="white"; //to change backgroundColor of webApp
      setBtnColor('primary');
      setNavBgColor('light');
      showAlert("Light Mode Enabled","success");

    }
  }

  //To enable green Mode
  const greenMode =()=>{
    if(mode === "light" || mode === "red" || mode === "dark" ){
      setMode('green');
      document.body.style.backgroundColor ="green";
      setBtnColor('success');
      setNavBgColor('#145A32');
      showAlert("Green Mode Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ="white"; //to change backgroundColor of webApp
      setBtnColor('primary');
      setNavBgColor('light');
      showAlert("Light Mode Enabled","success");

    }
  }
  const toggleMode = ()=>{   //toggleMode function which weill call with switch in Navbar.js
    if(mode === "light" || mode === "green" || mode === "red" ){
      setMode('dark');       //to set the value of mode ="Dark"
      document.body.style.backgroundColor ="#042743"; //to change the backgroundColor of webapp
      showAlert("Dark Mode Enabled","success");  // to call showalert function when swicth is clicked
      setBtnColor('primary');
    }
    else{   
      setMode('light');     //to set the value of mode ="Dark"
      document.body.style.backgroundColor ="white"; //to change backgroundColor of webApp
      showAlert("Light Mode Enabled","success"); // to call showalert function when swicth is clicked
      setBtnColor('primary');
      
    }
  }
  return (
    // Inserting return section into BroswerRouter
    // <BrowserRouter>  
    <>   {/*This JSX Fragment is used to return more than one tag by using JSX */}
    {/* To use navbar and these title,aboutText, mode,toggleMode all are props which we have assigned value here while defined in Navbar.js
      mode={mode} will make the prop mode equal to mode variable whose initial value is 'light' toggleMode={toggleMode} this props call the toggleMode function 
      redMode={redMode} callling redMode function as soon as red mode btn clicked and all the value assigned to variable iun red mode function will get set and according to that they will work with diffrent components*/}
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} greenMode ={greenMode} redMode={redMode}  NavBgColor={navBgColor}/>  
       {/*to use Alert component with props alert  */}
      <Alert alert ={alert}/> 
      <div className="container my-3">

      {/* TO use Routing we have to use <Routes></Routes> */}
      {/* <Routes> */}
        {/* Route use to enter details about Component to route; exact-> For exact matching; path =""=> Path of component ; elemnet= {} => Component name with all props value  */}
        {/* <Route  
        exact path="/" // Always try to use exact math because react matches partially (so for eaxct match we use exact)
              element={
                <TextForm  alert= {showAlert} heading="Enter the text to analyse" mode ={mode} btnColor ={btnColor}/>
              }
            ></Route> */}
                <TextForm  alert= {showAlert} heading="Enter the text to analyse" mode ={mode} btnColor ={btnColor}/>

        {/* <Route exact path="/about" element={<About />}>
        </Route>
        <Route exact path = "/contact" element={<Contactus phoneNo ="Phone" />}>
        </Route> */}

      {/* </Routes> */}
      </div>
        {/*=>  To use contact us form */}
    </>
    // </BrowserRouter>
  );
}

export default App;
