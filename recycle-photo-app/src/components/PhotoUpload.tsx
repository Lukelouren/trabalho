import React, { useState } from 'react';
import { calculatePoints } from '../services/pointsService';

const PhotoUpload: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [points, setPoints] = useState<number>(0);
    const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpload = async () => {
        if (selectedFile) {
            const pointsEarned = calculatePoints(selectedFile);
            setPoints(pointsEarned);
            // Here you can also handle the upload to a server if needed
        }
    };

    return (
        <div>
            <h2>Upload Recyclable Photo</h2>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {imagePreviewUrl && <img src={imagePreviewUrl} alt="Preview" style={{ width: '200px', height: 'auto' }} />}
            <button onClick={handleUpload}>Upload</button>
            {points > 0 && <p>You earned {points} points!</p>}
        </div>
    );
};

export default PhotoUpload;