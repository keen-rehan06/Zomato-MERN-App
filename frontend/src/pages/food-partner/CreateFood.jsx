import React from 'react';
import '../../styles/create-food.css';

const CreateFood = () => {
  return (
    <div className="create-food-page">
      <div className="create-food-card">
        <header className="create-food-header">
          <h1 className="create-food-title">Create Food</h1>
          <p className="create-food-subtitle">
            Upload a short video, give it a name, and add a description.
          </p>
        </header>

        <form className="create-food-form">
          <div className="field-group">
            <label htmlFor="foodVideo">Food Video</label>

            <input
              id="foodVideo"
              className="file-input-hidden"
              type="file"
              accept="video/*"
            />

            <div className="file-dropzone">
              <div className="file-dropzone-inner">
                <div className="file-dropzone-text">
                  <strong>Tap to upload</strong> or drag and drop
                </div>
                <div className="file-hint">
                  MP4, WebM, MOV • Up to ~100MB
                </div>
              </div>
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="foodName">Name</label>
            <input
              id="foodName"
              type="text"
              placeholder="e.g., Spicy Paneer Wrap"
            />
          </div>

          <div className="field-group">
            <label htmlFor="foodDesc">Description</label>
            <textarea
              id="foodDesc"
              rows={4}
              placeholder="Write a short description: ingredients, taste, spice level, etc."
            />
          </div>

          <div className="form-actions">
            <button className="btn-primary" type="submit">
              Save Food
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateFood;
