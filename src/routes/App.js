// React imports
import React, { Component } from 'react';

// Redux Imports
import { connect } from 'react-redux';

// Routes import
import Navigation from './Navigation';

class App extends Component {
    render() {
        return (
            <Navigation />
        );
    }
}

const mapStateToProps = state => ({
    navigation: state.navigation,
});

export default connect(mapStateToProps)(App)