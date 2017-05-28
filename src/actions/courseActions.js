import * as actionTypes from './actionTypes'
import courseApi from  '../api/mockCourseApi'
import {beginAjaxCall} from './ajaxStatusActions'

export function createCourse(course) {
  return {
    type: actionTypes.CREATE_COURSE,
    course
  }
}

export function loadCoursesSuccess(courses) {
  return {
    type: actionTypes.LOAD_COURSES_SUCCESS,
    courses
  }
}

export function updateCourseSuccess(savedCourse) {
  return {
    type: actionTypes.UPDATE_COURSE_SUCCESS,
    course: savedCourse
  }
}

export function createCourseSuccess(savedCourse) {
  return {
    type: actionTypes.CREATE_COURSE_SUCCESS,
    course: savedCourse
  }
}

export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAjaxCall())
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses))
    }).catch(err => {
      throw err
    })
  }
}

export function saveCourse(course) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall())
    return courseApi.saveCourse(course).then(savedCourse => {
      if (course.id) {
        dispatch(updateCourseSuccess(savedCourse))
      } else {
        dispatch(createCourseSuccess(savedCourse))
      }
    }).catch(err => {
      throw err
    })
  }
}

