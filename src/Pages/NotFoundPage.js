import React from 'react';

const NotFoundPage = () => {
  const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };

  const imageStyle = {
    // Add your image styles here
  };

  return (
    <div style={boxStyle}>
      <img src="/img/404.png" alt="404 Not Found" style={imageStyle} />
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button
        style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none' }}
        onClick={() => window.location.replace('/')}
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFoundPage;

