// job-board-client/src/components/JobList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get('/api/jobs');
      setJobs(response.data);
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Job List</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job._id}>
            <strong>{job.title}</strong> - {job.company}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
