import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [text, setText] = useState('');
  const message = "   hello people i am jash";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex === message.length) {
        clearInterval(interval);
        return;
      }
      setText(prevText => prevText + message.charAt(currentIndex));
      currentIndex++;
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      <h1>{text}</h1>
      {/* <p>This is the content of my home page.</p> */}
    </div>
  );
};

export default HomePage;
