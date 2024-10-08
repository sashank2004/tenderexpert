import React, { useState } from 'react';
import './style.css';
import lower from '/assets/plus.png'
import minus from '/assets/minus.png'
import RegistrationPromoBlock from '../RegistrationPromoBlock';

const Faqs = () => {
  const [show1,setshow1]=useState(false);
  const [show2,setshow2]=useState(false);
  const [show3,setshow3]=useState(false);
  const [show4,setshow4]=useState(false);
  const [show6,setshow6]=useState(false);
  const [show7,setshow7]=useState(false);
  return (
    <div className='bottomenq'>
      <div className='
    faqss'>
      <div className='faqs'>
        <div  className='heading'>
        <p className="module-hero-title">Frequently Asked Questions (FAQS)?</p>
        <div className="module-border-highlight-stripe" />
        </div>
      </div>
      <div className='all'>

      <div onClick={()=>{
        setshow6(!show6);
       }} className='cont'>
       <span>What is B2G contracting?</span>
       <img style={{display:show6? 'none':"flex"}} className='lower' src={lower}/>
       <img style={{display:show6? 'flex':"none"}} className='minus' src={minus}/>
      </div>
      <span className='random' style={{display:show6? 'flex':"none"}}>B2G contracting refers to businesses providing goods or services to government agencies. It offers significant opportunities for growth and stability.</span>

      <div onClick={()=>{
        setshow7(!show7);
       }} className='cont'>
       <span>What will I learn in this course?</span>
       <img style={{display:show7? 'none':"flex"}} className='lower' src={lower}/>
       <img style={{display:show7? 'flex':"none"}} className='minus' src={minus}/>
      </div>
      <span className='random' style={{display:show7? 'flex':"none"}}>You'll learn about tendering processes, proposal writing, building government relationships, and overcoming common challenges in B2G contracting.</span>

      <div onClick={()=>{
        setshow1(!show1);
       }} className='cont'>
       <span>How will I receive any bonus materials included with the course?</span>
       <img style={{display:show1? 'none':"flex"}} className='lower' src={lower}/>
       <img style={{display:show1? 'flex':"none"}} className='minus' src={minus}/>
      </div>
      <span className='random' style={{display:show1? 'flex':"none"}}>Once you enroll in the course, you will be given access to these materials</span>

      <div onClick={()=>{
        setshow2(!show2);
       }} className='cont'>
       <span>Will the sessions be conducted live?</span>
       <img style={{display:show2? 'none':"flex"}} className='lower' src={lower}/>
       <img style={{display:show2? 'flex':"none"}} className='minus' src={minus}/>
      </div>
      <span className='random' style={{display:show2? 'flex':"none"}}>Yes, the sessions will be held live to provide real-time interaction and engagement. </span>
      
      <div onClick={()=>{
        setshow3(!show3);
       }} className='cont'>
       <span>Who is this B2G course ideal for?
      </span>
      <img style={{display:show3? 'none':"flex"}} className='lower' src={lower}/>
      <img style={{display:show3? 'flex':"none"}} className='minus' src={minus}/>
      </div>
      <span className='random' style={{display:show3? 'flex':"none"}}>The B2G course is ideal for entrepreneurs, business owners, and professionals who are looking to expand their knowledge in business-to-government (B2G) strategies. It's also suitable for those who want to navigate government contracts, tenders, and understand public sector procurement.</span>

      <div onClick={()=>{
        setshow4(!show4);
       }} className='cont'>
       <span> Can I attend this course if I want to start a business but don't have one yet?</span>
       <img style={{display:show4? 'none':"flex"}} className='lower' src={lower}/>
       <img style={{display:show4? 'flex':"none"}} className='minus' src={minus}/>
      </div>
      <span className='random' style={{display:show4? 'flex':"none"}}>Absolutely! The course is designed to help aspiring entrepreneurs who are in the planning stages of starting a business. It provides valuable insights and strategies that will prepare you for launching your business and securing government contracts.</span>

      </div>     
    </div>
    <RegistrationPromoBlock/>
    </div>
    
    
  )
}

export default Faqs;