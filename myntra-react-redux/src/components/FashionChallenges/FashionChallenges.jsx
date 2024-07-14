// src/components/FashionChallenges/FashionChallenges.jsx
import React from 'react';
import './FashionChallenges.css';
import summerchallenge from '../summerchallenge.jpg';
import genzChallenge from '../genzchallenge.jpeg';

const FashionChallenges = () => {
    const challenges = [
        {
            title: 'Trending Summer Style Challenge',
            description: 'Create and submit your best summer outfits based on the latest fashion trends for a chance to win exclusive discounts or be featured in our fashion blog.',
            deadline: 'July 31, 2024',
            image: summerchallenge,
        },
        {
            title: 'GenZ Fashion Innovator Challenge',
            description: 'Showcase your innovative fashion ideas and trends that resonate with the GenZ community. The best entries will be featured on our social media platforms.',
            deadline: 'August 15, 2024',
            image: genzChallenge,
        },
        // Add more challenges as needed
    ];

    return (
        <div className="fashion-challenges-container">
            <h1>Daily Fashion Challenges</h1>
            {challenges.map((challenge, index) => (
                <div key={index} className="challenge-card">
                    <img src={challenge.image} alt={challenge.title} className="challenge-image" />
                    <div className="challenge-content">
                        <h2>{challenge.title}</h2>
                        <p>{challenge.description}</p>
                        <p><strong>Deadline:</strong> {challenge.deadline}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FashionChallenges;

