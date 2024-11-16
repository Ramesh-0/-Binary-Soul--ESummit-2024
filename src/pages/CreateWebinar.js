// src/pages/CreateWebinar.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateWebinarPage = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [educationDetails, setEducationDetails] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const API_URL = 'https://api.web3forms.com/submit'; // Web3Form API URL
  const ACCESS_KEY = 'a4e389b1-acde-4dd7-8a52-c2a1c49f66c5'; // Replace with your actual access key

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('access_key', ACCESS_KEY); // Add access key to form data
    formData.append('title', title);
    formData.append('date', date);
    formData.append('description', description);
    formData.append('educationDetails', educationDetails);

    // Log FormData contents
    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const response = await axios.post(API_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set content type to multipart/form-data for file uploads
        }
      });

      if (response.data.success) {
        setFormSubmitted(true);
        resetForm();
      } else {
        setErrorMessage('Failed to submit form. Reason: ' + (response.data.message || 'Unknown error.'));
      }
    } catch (error) {
      console.error('Error submitting form', error.response ? error.response.data : error.message);
      setErrorMessage('There was an error submitting your form. Please check your inputs.');
    }
  };

  const resetForm = () => {
    setTitle('');
    setDate('');
    setDescription('');
    setEducationDetails('');
  };

  return (
    <div className="min-h-screen p-4 pt-24 bg-gray-100">
      <h1 className="text-4xl font-bold text-red-900 mb-6">Create Your Own Webinar</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block mb-1">Webinar Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="3"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Educational Details:</label>
          <textarea
            value={educationDetails}
            onChange={(e) => setEducationDetails(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="3"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-md">
          Create Webinar
        </button>
      </form>
      {formSubmitted && (
        <div className="mt-4 text-green-600">
          Your webinar has been submitted for review.
        </div>
      )}
      {errorMessage && (
        <div className="mt-4 text-red-600">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default CreateWebinarPage;
