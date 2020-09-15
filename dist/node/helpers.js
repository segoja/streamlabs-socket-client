'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var removeCommas = exports.removeCommas = function removeCommas(str) {
  return typeof str === 'string' ? Number(str.replace(/,/g, '')) : str;
};

var removeNonNumeric = exports.removeNonNumeric = function removeNonNumeric(str) {
  return typeof str === 'string' ? Number(str.replace(/[^0-9.]/g, '')) : str;
};
//# sourceMappingURL=helpers.js.map