import React from 'react';

const DemoComponent = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Smart Skill Gap Analyzer</h1>
            <p>This is a demo for the frontend presentation.</p>
            <button 
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
                onClick={() => alert('Demo Button Clicked!')}
            >
                Click Me!
            </button>
        </div>
    );
}

export default DemoComponent;
