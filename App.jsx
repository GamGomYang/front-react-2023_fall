import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';

function ButtonPage() {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push('/button');
  };

  return (
    <div>
      <h1>Button Page</h1>
      <button onClick={handleButtonClick}>Go to /button</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/button">Button Page</Link>
            </li>
          </ul>
        </nav>

        <Route path="/button" component={ButtonPage} />
      </div>
    </Router>
  );
}


