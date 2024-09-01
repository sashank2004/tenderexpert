import React, { createRoot } from "react-dom/client";
const rootElement = document.getElementById("root");
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Landing from "./components/Landing";
import ContactUs from "./components/ContactUs";

if (!rootElement) throw new Error("root element not found");

const root = createRoot(rootElement);
root.render(
  <div style={{ display: "inline-block", width: "100%", background: "white" }} data-ignore="used only for top most containter width">
    <Router>
      <Routes>
        <Route path={"/"} element={<Landing/>}/>
        <Route path={"/contactus"} element={<ContactUs/>}/>
      </Routes>
    </Router>
  </div>
);
