// FadingText.js
import React from 'react';

const FadingText = ({ children }) => {
  const fadingTextStyles = `
    .text {
      position: relative;
      line-height: 2em;
      overflow: hidden;
      /* for demo purpose */
     
      margin: 0 auto;
    }

    .fadingEffect {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      background: #fafafa;
      animation: showHide 1.5s ease-in forwards; /* Use 'forwards' to keep the final state after animation */
    }
    
    @keyframes showHide {
      0% {width:100%}
      100% {width:0%} 
     
    }
  `;

  return (
    <div className=''>
      <style>{fadingTextStyles}</style>
      <div className="text w-fit text-2xl font-semibold">
        {children}
        <div className="fadingEffect"></div>
      </div>
    </div>
  );
};

export default FadingText;
