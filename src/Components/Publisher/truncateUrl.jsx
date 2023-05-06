import React, { useState } from 'react';

function TruncatedUrl({ url }) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(()=>{
     setCopied(false);
    },1000)
  };

  const truncatedUrl = url.length > 30 ? url.slice(0, 30) + '...' : url;

  return (
    <div style={{
      width: '300px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: copied ? '#d4edda' : '#fff',
    }}>
      <p style={{
        margin: '0',
        flex: '1',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}>{truncatedUrl}</p>
      <button onClick={handleClick} style={{
        marginLeft: '10px',
        backgroundColor: copied ? '#28a745' : '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '8px 16px',
        cursor: 'pointer',
      }}>{copied ? 'Copied!' : 'Copy'}</button>
    </div>
  );
}

export default TruncatedUrl;
