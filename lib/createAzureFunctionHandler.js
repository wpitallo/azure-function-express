"use strict";

exports.__esModule = true;
exports.default = createAzureFunctionHandler;

var _ExpressAdapter = _interopRequireDefault(require("./ExpressAdapter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Creates a function ready to be exposed to Azure Function for request handling.
 *
 * @param {Object} requestListener Request listener (typically an express/connect instance)
 * @returns {function(context: Object)} Azure Function handle
 */
function createAzureFunctionHandler(_x) {
  return _createAzureFunctionHandler.apply(this, arguments);
}

function _createAzureFunctionHandler() {
  _createAzureFunctionHandler = _asyncToGenerator(function* (requestListener) {
    const adapter = new _ExpressAdapter.default((yield requestListener()));
    return adapter.createAzureFunctionHandler();
  });
  return _createAzureFunctionHandler.apply(this, arguments);
}

module.exports = exports["default"];