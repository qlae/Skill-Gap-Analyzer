import React, { useState } from 'react';
import axios from 'axios';

const UploadResume = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [errorDetails, setErrorDetails] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            setMessage("Please select a file first.");
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/upload/', formData, {  // Correct URL
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            
            setMessage("File uploaded successfully!");
            setErrorDetails('');
            console.log(response.data);
        } catch (error) {
            setMessage("Failed to upload file.");
            setErrorDetails(error.response ? error.response.data : "No response from server.");
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Upload Your Resume</h2>
            <form onSubmit={handleSubmit} style={{ margin: '20px' }}>
                <input type="file" onChange={handleFileChange} />
                <br />
                <button 
                    type="submit"
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginTop: '10px'
                    }}
                >
                    Upload Resume
                </button>
            </form>
            {message && <p>{message}</p>}
            {errorDetails && <pre style={{ color: 'red' }}>{JSON.stringify(errorDetails, null, 2)}</pre>}
        </div>
    );
};

export default UploadResume;
