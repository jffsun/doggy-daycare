import React, { useState } from 'react';

export default function Upload() {
    // state for the fileinput
    const [fileInputState, setFileInputState] = useState('');
    // state for file converted to base64
    const [previewSource, setPreviewSource] = useState();
    // state for the file to be uploaded to the database
    const [selectedFile, setSelectedFile] = useState('');

    const fileInputChange = (e) => {
        // targets the chosen file
        const file = e.target.files[0];
        convertFile(file);
    };

    const convertFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        }
    };

    const fileSubmit = (e) => {
        e.preventDefault();

        // if there is no base64 file, end this function
        if (!previewSource) return;
    };

    return (
        <div>
            <h1>Upload</h1>
            <form onSubmit={fileSubmit} className="form">
                <input type="file" name="image" onChange={fileInputChange}
                value={fileInputState} className="form-input"/>
                <button className="btn" type="submit">Submit</button>
            </form>
            {previewSource && (
                <img src={previewSource} alt="chosen"
                style={{height: '250px'}}/>
            )}
        </div>
    );
}