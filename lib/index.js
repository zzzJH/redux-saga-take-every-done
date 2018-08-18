'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _effects = require('redux-saga/effects');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var takeEveryDone = function takeEveryDone(actions, saga) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return (0, _effects.fork)( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var actionsType, actionReady, action;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            actionsType = Object.prototype.toString.call(actions);

            if (!(actionsType !== '[object String]' && actionsType !== '[object Array]')) {
              _context.next = 3;
              break;
            }

            throw new Error('actions should be string or array');

          case 3:
            if (actionsType === '[object String]') {
              actions = [].concat(actions);
            }
            actionReady = {};

          case 5:
            if (!true) {
              _context.next = 16;
              break;
            }

            _context.next = 8;
            return (0, _effects.take)(actions);

          case 8:
            action = _context.sent;

            actionReady[action.type] = action;

            if (!(Object.keys(actionReady).length === actions.length)) {
              _context.next = 14;
              break;
            }

            _context.next = 13;
            return _effects.fork.apply(undefined, [saga].concat(_toConsumableArray(args.concat(actions.map(function (i) {
              return actionReady[i];
            })))));

          case 13:
            actionReady = {};

          case 14:
            _context.next = 5;
            break;

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
};

exports.default = takeEveryDone;