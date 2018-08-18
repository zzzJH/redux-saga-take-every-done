# redux-saga-take-every-done [![Build Status](https://travis-ci.org/zzzJH/redux-saga-take-every-done.svg?branch=master)](https://travis-ci.org/zzzJH/redux-saga-take-every-done) 

Spawns a saga on all action dispatched to the Store that matches pattern

## How to use

```
npm install redux-saga-take-every-done --save

import takeEveryDone from 'redux-saga-take-every-done'

function * rootSaga () {
  yield takeEveryDone(['ACTION_1', 'ACTION_2'], actionsDone)
}

function * actionsDone () {
  yield put({type: 'ACTION_DONE'})
}
```

## License
[MIT](https://github.com/zzzJH/redux-saga-take-every-done/blob/master/LICENSE)
