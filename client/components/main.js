import React from 'react';

import Navigation from './nav/Navigation';
import FlashMessageList from './flash/FlashMessageList';

class Main extends React.Component {
    render() {
        return (
            <div class="container">
                <Navigation />
                <FlashMessageList />
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