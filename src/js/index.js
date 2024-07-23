//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

import "../styles/index.css";

//import your own components
import Home from "./views/home.jsx";


//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);

