// job-board-client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import JobList from './components/JobList';
import JobForm from './components/JobForm';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/post-job">Post a Job</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route exact path="/" component={JobList} />
        <Route path="/post-job" component={JobForm} />
      </div>
    </Router>
  );
};

export default App;
