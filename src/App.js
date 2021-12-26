// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./index.css";
export default function app(){
  return (
    <div id="firstapp">
      <h1 style={{color:"blue" , backgroundColor:"yellow" , textAlign:"center"}}>MY FIRST REACT APP</h1>
       <div style={{height:"300px" , width:"400px", backgroundColor:"green" , display:"inline-block",position:"absolute"}}>
             <h2 style={{color:"white", textAlign:"center",padding:"100px"}}>Hello</h2>
       </div>
       <div style={{height:"300px" , width:"400px", backgroundColor:"green" , marginLeft:"20px", display:"inline-block",marginLeft:"500px"}}>
         <h1 style={{color:"white", textAlign:"center",padding:"100px"}}>CGCS</h1>
       </div>
    </div>
  )
  
}
