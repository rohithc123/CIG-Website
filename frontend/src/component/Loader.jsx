import React from 'react';
import { useState, useEffect } from 'react'

const Loader = () => {
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  
    return (
      <>
        {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-white bg-[url('./assets/loader.gif')] bg-no-repeat bg-center z-[100]">
          </div>
        )} 
      </>
    );

}

export default Loader
