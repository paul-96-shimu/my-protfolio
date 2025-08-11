import React, { useEffect, useState } from 'react';

const MotionTitle = () => {
  const roles = [
    "Full Stack Web Developer",
    "Frontend Developer",
    "Web Developer"
  ];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;

    if (typing) {
      // Typing effect: add one char at a time
      if (displayText.length < roles[index].length) {
        timeout = setTimeout(() => {
          setDisplayText(roles[index].slice(0, displayText.length + 1));
        }, 150);
      } else {
        // Typing finished, wait before deleting
        timeout = setTimeout(() => setTyping(false), 1000);
      }
    } else {
      // Deleting effect: remove one char at a time
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(roles[index].slice(0, displayText.length - 1));
        }, 100);
      } else {
        // Deleting finished, move to next role and start typing again
        setTyping(true);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, typing, index, roles]);

  return (
    <p className="text-3xl md:text-5xl font-bold mt-2 text-black">
      {displayText}
      <span className="blinking-cursor">|</span>
      <style jsx>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 24px;
          color: black;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </p>
  );
};

export default MotionTitle;
