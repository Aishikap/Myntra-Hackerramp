// src/components/Trending/Trending.jsx
import React from 'react';
import './Trending.css';

// Example trending items
const trendingItems = [
    {
        imageUrl: require('./image1.jpg') // Correctly referencing image1
    },
    {
        imageUrl: require('./image2.jpg') // Correctly referencing image2
    },
    {
        imageUrl: require('./image3.jpg') // Correctly referencing image3
    }
];

const Trending = () => {
    return (
        <div className="trending-container">
            {/* Banner Section */}
            <div className="banner">
                <img src={require('./banner4.png')} alt="Trending Banner" />
            </div>

            {/* Trending Items */}
            <h1>What's Trending</h1>
            <div className="trending-items">
                {trendingItems.map((item, index) => (
                    <div key={index} className="trending-item-card">
                        <img src={item.imageUrl} alt={item.title} className="trending-item-image" />
                        <div className="trending-item-content">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* New Influencer Trends Banner */}
            <div className="influencer-banner">
                <img src={require('./banner3.png')} alt="Influencer Trends Banner" />
            </div>
        </div>
    );
};

export default Trending;
