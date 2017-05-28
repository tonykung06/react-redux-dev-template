import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as courseActions from '../../actions/courseActions'
import CourseList from './CourseList'
import CourseForm from './CourseForm'

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      course: Object.assign({}, this.props.initialCourse),
      errors: {}
    }
    this.updateCourseState = this.updateCourseState.bind(this)
    this.saveCourse = this.saveCourse.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.initialCourse.id !== nextProps.initialCourse.id) {
      this.setState({
        course: Object.assign({}, nextProps.initialCourse)
      })
    }
  }
  updateCourseState(event) {
    return this.setState({
      course: Object.assign({}, this.state.course, {
        [event.target.name]: event.target.value
      })
    })
  }
  saveCourse(event) {
    event.preventDefault()
    this.props.actions.saveCourse(this.state.course)
    this.context.router.push('/courses')
  }
  render() {
    const {course, errors} = this.state
    const {authors} = this.props

    return (
      <CourseForm
        course={course}
        errors={errors}
        allAuthors={authors}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        // loading={}
      />
    )
  }
}

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id // from the path `/course/:id`
  let emptyCourse = {
    id: "",
    title: "",
    watchHref: "",
    authorId: "",
    length: "",
    category: ""
  }

  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: `${author.firstName} ${author.lastName}`
    }
  })
  return {
    authors: authorsFormattedForDropdown,
    initialCourse: courseId && state.courses.find(course => course.id === courseId) || emptyCourse
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

ManageCoursePage.propTypes = {
  initialCourse: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

// pull in the React Router context so router is available on this.context.router
ManageCoursePage.contextTypes = {
  router: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
