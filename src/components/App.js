import React from 'react'
import PropTypes from 'prop-types'
import { Link, IndexLink } from 'react-router'
import Header from './common/Header'
import {connect} from 'react-redux'

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    const {loading} = this.props
    return (
      <div className="container-fluid">
        <Header
          loading={loading}
        />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  loading: PropTypes.bool.isRequired
}

function mapSateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  }
}

export default connect(mapSateToProps)(App)
