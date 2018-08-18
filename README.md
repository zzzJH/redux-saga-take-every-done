# redux-saga-take-every-done
Spawns a saga on all action dispatched to the Store that matches pattern

## How to use

```
import takeEveryDone from 'redux-saga-take-every-done'

function * rootSaga () {
  yield takeEveryDone(['ACTION_1', 'ACTION_2'], actionsDone)
}

function * actionsDone () {
  yield put({type: 'ACTION_DONE'})
}
```

## License
MIT