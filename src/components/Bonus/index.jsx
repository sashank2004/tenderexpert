import React from 'react'
import './style.css';
import book from '/assets/book.jpeg'

const Bonus = () => {
  return (
    <div className='bonus'>
      <div className="module-hero-title">Bonus Materials</div>
      <div className="module-border-highlight-stripe" />
      <div className='image'>
        <img alt="book" src={book}/>
      </div>
    </div>
  )
}

export default Bonus;