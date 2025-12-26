import React from 'react';
import profileImage from "../../assets/profileImage.png"; 
import './profile.css';

export default function Profile() {
    return (
        <div className="profile-container-bento">
            <div className="image-glow-wrapper">
                <img 
                    src={profileImage} 
                    alt="Youssef Boulayat" 
                    className="profile-photo-bento"
                />
            </div>
        </div>
    );
}