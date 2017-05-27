import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import reduxImmutableStoreInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStoreInvariant())
  )
}
