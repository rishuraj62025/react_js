-------------------------------------------------------------
How to setup in vs code for new React PromiseRejectionEvent

first command
npx create-react-app project-name 

ex : npx create-react-app project1


second command 

  cd project1
  npm start

then above 2 commands for starting the project


-//----------------------------------------------------
// index.js 

import React from "react";
// iss line ka mtlb hai ki hm react library import kr rhe
// jisse hm react ke components aur features ko use kr paye

 import ReactDOM from "react-dom/client";
 // iska mtlb hai ki hm ReactDOM ko import kr rhe jisse 
 // react ke component ko render kr paye browser mein

 import App from "./App";

 const root = ReactDOM.createRoot(document.getElementById("root"));
 // createRoot ek ReactDOM ka method hai jisse hm root ko define kr rhe
 // wo root jo getElementById se le rhe wo index.html mein define hai
 // wo public folder mein hai,wo root hi hmara page hai ki kya dikhana hai
 // ye hm page pe render krne krne ke liye define kr rhe kyonki finally 
 // html page hi render hona hai frontend pe

 root.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>
 )
 // isme ab hm jo bhi likhenge wo render ho jaega page pe
 //  <React.StrictMode> ye developer mode feature hai,
 // iska kaam hai ki jo bhi potential issue aur warnings aayegi
 // developer ko usko fix krne mein help krta hai

// ab hum app.js file banaenge uss file ko index.js mein 
// fir import krenge
// ye app ek component hai usko render krenge .
// component ka name start hoga capital letter se jaise App.

//------------------------------------------------------------
// ----------------------------
App.js -------

import './App.css'

function App(){
    let a = 2;
    return(
        <div className="hero"> <---------------|
        <h1>Hello</h1>                         |
        <p> {a+2} </p>                         |--fragment
        </div>                  <--------------|
    )
}

export default App

// those are under fragment act as a jsx part
// jsx means we can return html css js in function
// But we have to return all this in one fragment or one div block
// we can't declare variable inside fragment, it can't be return variable value
// instead it is directly printed like html 

// -------------------------------------------------------
//  Now we make App.css file for styling of App.css file
 App.css

 .hero{
   background-color:blue;
   border: 2px solid black;
   height: 100px;
  }

  // Now we have to import App.css file into App.js bcoz styling
  // is for App.js

  // When we import component we write 
  import App from './App'

  // when we import any other file like css
  import './App.css'


  // We also do inline styling in App.js
  function App(){
    let a = 2;
    return(
        <div className="hero"> <---------------|
        <h1 style={{color:'red'}}>Hello</h1>                         |
        <p> {a+2} </p>                         |--fragment
        </div>                  <--------------|
    )
}

// direct yaad rkhne ke liye jsx mein double curly braces 
// lgake inline css likhte hain
// pr ye koi syntax nhi hai ek curly braces se js bana phir dusra
// curly braces se js ka object bana usme key value pair mein property de rhe
// jaise color:'red', backgroundColor:'blue' 
// <h1 style={{color:'red', backgroundColor:'blue' }}>Hello</h1>    

// <p> {a+2} </p> 
// jsx mein js mein likhne ke liye single curly braces lgate hain 
// agar nhi lagaenge to simple html jaisa behave krega direct print hoga 
// koi calculation nhi hoga