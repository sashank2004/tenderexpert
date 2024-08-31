import React from 'react'
import ComponentYouSelected from "../ComponentYouSelected";
import WhatHappens from "../WhatHappens";
import Breakthrough from "../Breakthrough";
import DoNotJoinIf from "../DoNotJoinIf";
import Modules from "../Modules";
import Reviews from "../Reviews";
import Faqs from "../Faqs";

const Landing = () => {
  return (
    <div>
    <ComponentYouSelected />
    <WhatHappens/>
    <Breakthrough/>
    <DoNotJoinIf/>
    <Modules/>
    <Reviews/>
    <Faqs/>
    </div>
  )
}

export default Landing