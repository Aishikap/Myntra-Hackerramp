import React from 'react';
import './ProfileForm.css';

const ProfileForm = () => {
    return (
        <div className="profile-form-wrapper">
            <div className="profile-form-container">
                <h2>Create Your Profile</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="favoriteColors">Favorite Colors:</label>
                        <input type="text" id="favoriteColors" name="favoriteColors" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="favoriteStyles">Favorite Styles:</label>
                        <input type="text" id="favoriteStyles" name="favoriteStyles" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="favoriteBrands">Favorite Brands:</label>
                        <input type="text" id="favoriteBrands" name="favoriteBrands" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="clothingTypes">Favorite Clothing Types:</label>
                        <input type="text" id="clothingTypes" name="clothingTypes" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fashionInfluencers">Favorite Fashion Influencers:</label>
                        <input type="text" id="fashionInfluencers" name="fashionInfluencers" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="styleInspiration">Upload Style Inspirations:</label>
                        <input type="file" id="styleInspiration" name="styleInspiration" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ProfileForm;
