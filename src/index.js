import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";//component

//"root" is a <div> from the public/index.html <body>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);