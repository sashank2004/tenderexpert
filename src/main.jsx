import React, { createRoot } from "react-dom/client";
import ComponentYouSelected from "./components/ComponentYouSelected";
import WhatHappens from "./components/WhatHappens";
import Breakthrough from "./components/Breakthrough";
import DoNotJoinIf from "./components/DoNotJoinIf";
const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("root element not found");

const root = createRoot(rootElement);
root.render(
  <div style={{ display: "inline-block", width: "100%", background: "white" }} data-ignore="used only for top most containter width">
    <ComponentYouSelected />
    <WhatHappens/>
    <Breakthrough/>
    <DoNotJoinIf/>
  </div>
);
