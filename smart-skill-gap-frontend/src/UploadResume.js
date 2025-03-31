import React, { useState } from 'react';
import axios from 'axios';

const UploadResume = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            alert("Please select a file first.");
            return;
        }

        const formData = new FormData();
        formData.append('resume', file);

        try {
            const response = await axios.post('http://localhost:8000/api/upload/', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            alert("File uploaded successfully!");
            console.log(response.data);
        } catch (error) {
            alert("Failed to upload file.");
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
        </div>
    );
};

export default UploadResume;
