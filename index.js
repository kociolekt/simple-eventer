'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var staticEventer = null;

var SimpleEventer = function () {
  function SimpleEventer() {
    _classCallCheck(this, SimpleEventer);

    this.simpleEventerListeners = {};
  }

  _createClass(SimpleEventer, [{
    key: 'on',
    value: function on(type, listener) {
      if (typeof this.simpleEventerListeners[type] === 'undefined') {
        this.simpleEventerListeners[type] = [];
      }

      this.simpleEventerListeners[type].push(listener);
    }
  }, {
    key: 'fire',
    value: function fire(type) {
      var target = arguments.length <= 1 || arguments[1] === undefined ? this : arguments[1];

      var event = {},
          listeners = void 0;

      if (typeof type === 'string') {
        event = { type: type };
      } else {
        throw new Error('Wrong event name type.');
      }
      if (!event.target) {
        event.target = target;
      }

      listeners = this.simpleEventerListeners[event.type];

      if (listeners instanceof Array) {
        for (var i = 0, len = listeners.length; i < len; i++) {
          listeners[i].call(this, event);
        }
      }
    }
  }, {
    key: 'off',
    value: function off(type, listener) {
      var simpleEventerListeners = this.simpleEventerListeners[type];
      if (simpleEventerListeners instanceof Array) {
        for (var i = 0, len = simpleEventerListeners.length; i < len; i++) {
          if (simpleEventerListeners[i] === listener) {
            simpleEventerListeners.splice(i, 1);
            break;
          }
        }
      }
    }
  }], [{
    key: 'on',
    value: function on(type, listener) {
      return staticEventer.on(type, listener);
    }
  }, {
    key: 'fire',
    value: function fire(type) {
      var target = arguments.length <= 1 || arguments[1] === undefined ? this : arguments[1];

      return staticEventer.fire(type, target);
    }
  }, {
    key: 'off',
    value: function off(type, listener) {
      return staticEventer.off(type, listener);
    }
  }]);

  return SimpleEventer;
}();

exports.default = SimpleEventer;


staticEventer = new SimpleEventer();

//# sourceMappingURL=index.js.map