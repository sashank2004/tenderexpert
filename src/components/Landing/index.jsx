import React from 'react'
import ComponentYouSelected from "../ComponentYouSelected";
import WhatHappens from "../WhatHappens";
import Breakthrough from "../Breakthrough";
import DoNotJoinIf from "../DoNotJoinIf";
import Modules from "../Modules";
import Reviews from "../Reviews";
import Faqs from "../Faqs";
import Bonus from "../Bonus";
import PlayVideo from '../PlayVideo';
import RegistrationPromoBlock from '../RegistrationPromoBlock';

const Landing = () => {
  return (
    <div>
    <ComponentYouSelected />
    <PlayVideo/>
    <WhatHappens/>
    <Breakthrough/>
    <DoNotJoinIf/>
    <Modules/>
    <Bonus/>
    <Reviews/>
    <Faqs/>
    </div>
  )
}

export default Landing