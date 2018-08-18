import { fork, take } from 'redux-saga/effects'

const takeEveryDone = (actions, saga, ...args) => fork(function * () {
  const actionsType = Object.prototype.toString.call(actions)
  if (actionsType !== '[object String]' && actionsType !== '[object Array]') {
    throw new Error('actions should be string or array')
  }
  if (actionsType === '[object String]') {
    actions = [].concat(actions)
  }
  let actionReady = {}
  while (true) {
    const action = yield take(actions)
    actionReady[action.type] = action
    if (Object.keys(actionReady).length === actions.length) {
      yield fork(saga, ...args.concat(actions.map(i => actionReady[i])))
      actionReady = {}
    }
  }
})

export default takeEveryDone
