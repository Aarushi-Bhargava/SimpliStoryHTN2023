import React from 'react';

const bubbleStyle = {
  backgroundColor: '#f0f0f0', // Background color
  color: '#000',              // Text color
  padding: '10px',            // Padding inside the bubble
  borderRadius: '15px',       // Rounded corners
  maxWidth: '80%',            // Maximum width of the bubble
  margin: '0 auto',           // Center horizontally
  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', // Box shadow for depth
  textAlign: 'center', // Center the text horizontally
  marginTop: '20vh',
};

const ParagraphText = ({ text, speechButton }) => {
  return (
    <div style={bubbleStyle}>
      <p style={{fontSize:'20px'}}>{text}</p>
      <speechButton />
    </div>
  );
};

export default ParagraphText;
