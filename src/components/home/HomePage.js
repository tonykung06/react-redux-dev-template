import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>React</h1>

        <h2>Get Started</h2>
        <ol>
          <li>Review the <Link to="about">About</Link></li>
        </ol>
      </div>
    );
  }
}

export default HomePage;
