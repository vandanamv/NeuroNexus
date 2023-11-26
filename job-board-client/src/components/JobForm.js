// job-board-client/src/components/JobForm.js
import React, { useState } from 'react';
import axios from 'axios';

const JobForm = () => {
  const [job, setJob] = useState({ title: '', description: '', company: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/jobs', job);
      console.log('Job posted:', response.data);
      // You can add logic to refresh the job list or navigate to the job list page.
    } catch (error) {
      console.error('Error posting job:', error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={job.title} onChange={(e) => setJob({ ...job, title: e.target.value })} required />

        <label>Description:</label>
        <textarea value={job.description} onChange={(e) => setJob({ ...job, description: e.target.value })} required />

        <label>Company:</label>
        <input type="text" value={job.company} onChange={(e) => setJob({ ...job, company: e.target.value })} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JobForm;
