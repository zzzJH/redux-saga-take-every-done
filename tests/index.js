import 'babel-polyfill'
import test from 'tape'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { put } from 'redux-saga/effects'
import takeEveryDone from '../src/index'

function counter(state = '', action) {
  switch (action.type) {
  case 'ACTION_1':
    return state
  case 'ACTION_2':
    return state
  case 'ACTION_DONE':
    return 'actions done'
  default:
    return state
  }
}

function * rootSaga () {
  yield takeEveryDone(['ACTION_1', 'ACTION_2'], actionsDone)
}

function * actionsDone () {
  yield put({type: 'ACTION_DONE'})
}

test('Spawns a saga on all action dispatched to the Store', t => {
  t.plan(1)  
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    counter,
    applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(rootSaga)

  store.dispatch({ type: 'ACTION_1' })
  store.dispatch({ type: 'ACTION_2' })
  t.equal(store.getState(), 'actions done', 'takeEveryDone is ok!')
})