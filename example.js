'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Example = function (_SimpleEventer) {
  _inherits(Example, _SimpleEventer);

  function Example() {
    _classCallCheck(this, Example);

    // Call SimpleEventer constructor

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Example).call(this));

    _this.seconds = 0;

    setInterval(function () {
      _this.seconds += 1;
      _this.fire('onesecond', _this.seconds);
    }, 1000);
    return _this;
  }

  return Example;
}(_index2.default);

new Example().on('onesecond', function (event) {
  console.log('Type: ' + event.type + ', Target/Data: ' + event.target);
});

// Example with global eventer
var seconds = 0;

setInterval(function () {
  seconds += 1;
  _index2.default.fire('onesecondGlobal', seconds);
}, 1000);

_index2.default.on('onesecondGlobal', function (event) {
  console.log('Type: ' + event.type + ', Target/Data: ' + event.target);
});
