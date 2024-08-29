import React, { createRoot } from "react-dom/client";
import ComponentYouSelected from "./components/ComponentYouSelected";
import WhatHappens from "./components/WhatHappens";
import Breakthrough from "./components/Breakthrough";
import DoNotJoinIf from "./components/DoNotJoinIf";
import Modules from "./components/Modules";
import Reviews from "./components/Reviews";
import Faqs from "./components/Faqs";
const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("root element not found");

const root = createRoot(rootElement);
root.render(
  <div style={{ display: "inline-block", width: "100%", background: "white" }} data-ignore="used only for top most containter width">
    <ComponentYouSelected />
    <WhatHappens/>
    <Breakthrough/>
    <DoNotJoinIf/>
    <Modules/>
    <Reviews/>
    <Faqs/>
  </div>
);
