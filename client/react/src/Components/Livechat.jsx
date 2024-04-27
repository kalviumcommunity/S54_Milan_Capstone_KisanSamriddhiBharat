import React, { useEffect } from 'react';

function LiveChat() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/6618c8ff1ec1082f04e179cb/1hr8d29r5';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; 
}

export default LiveChat;
