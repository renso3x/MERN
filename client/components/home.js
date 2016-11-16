import React from 'react';

import { Link } from 'react-router';

class Greeting extends React.Component {
    render() {
        return (
            <div class="jumbotron">
              <h1>Activity Overlord Project</h1>
              <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <p>
                <Link class="btn btn-primary btn-lg" to="/signup">Learn more</Link>
                </p>
            </div>
        )
    }
}

export default Greeting;