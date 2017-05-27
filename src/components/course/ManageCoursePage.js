import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as courseActions from '../../actions/courseActions'
import CourseList from './CourseList'

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <div>
        Manage Course
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

ManageCoursePage.propTypes = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
