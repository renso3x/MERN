import React from 'react';

import Navigation from './nav/Navigation';

class Main extends React.Component {
    render() {
        return (
            <div class="container">
                <Navigation />
                <div class="bs-docs-section clearfix">
                    {
                        this.props.children
                    }
                </div>
            </div>
        )
    }
}

export default Main;