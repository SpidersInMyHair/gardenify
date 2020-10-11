module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../_api/plant.js":
/*!************************!*\
  !*** ../_api/plant.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.createPlantVariety = exports.getPlantVariety = void 0;\nfunction getPlantVariety(req) {\n    return new Promise((resolve, reject) => {\n        fetch(`/plant/${req.id}`)\n            .then((res) => res.json())\n            .then(res => resolve(res))\n            .catch((rej) => reject(rej));\n    });\n}\nexports.getPlantVariety = getPlantVariety;\nfunction createPlantVariety(req) {\n    return new Promise((resolve, reject) => {\n        fetch('/plant/', {\n            method: 'POST',\n            body: JSON.stringify(req),\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        })\n            .then((res) => resolve(res))\n            .catch((rej) => reject(rej));\n    });\n}\nexports.createPlantVariety = createPlantVariety;\n//# sourceMappingURL=plant.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vX2FwaS9wbGFudC5qcz8yZjQ0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBIiwiZmlsZSI6Ii4uL19hcGkvcGxhbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlUGxhbnRWYXJpZXR5ID0gZXhwb3J0cy5nZXRQbGFudFZhcmlldHkgPSB2b2lkIDA7XG5mdW5jdGlvbiBnZXRQbGFudFZhcmlldHkocmVxKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZmV0Y2goYC9wbGFudC8ke3JlcS5pZH1gKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXNvbHZlKHJlcykpXG4gICAgICAgICAgICAuY2F0Y2goKHJlaikgPT4gcmVqZWN0KHJlaikpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5nZXRQbGFudFZhcmlldHkgPSBnZXRQbGFudFZhcmlldHk7XG5mdW5jdGlvbiBjcmVhdGVQbGFudFZhcmlldHkocmVxKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZmV0Y2goJy9wbGFudC8nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzb2x2ZShyZXMpKVxuICAgICAgICAgICAgLmNhdGNoKChyZWopID0+IHJlamVjdChyZWopKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuY3JlYXRlUGxhbnRWYXJpZXR5ID0gY3JlYXRlUGxhbnRWYXJpZXR5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGxhbnQuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../_api/plant.js\n");

/***/ }),

/***/ "./components/thing.js":
/*!*****************************!*\
  !*** ./components/thing.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function () {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {\n  Object.defineProperty(o, \"default\", {\n    enumerable: true,\n    value: v\n  });\n} : function (o, v) {\n  o[\"default\"] = v;\n});\n\nvar __importStar = this && this.__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n\n  __setModuleDefault(result, mod);\n\n  return result;\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Thing = void 0;\n\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\n\nconst plant_1 = __webpack_require__(/*! ../../_api/plant */ \"../_api/plant.js\");\n\nclass Thing extends react_1.Component {\n  componentDidMount() {\n    const getPlantReq = {\n      id: \"test-plant1\"\n    };\n    plant_1.getPlantVariety(getPlantReq).then(res => console.log(res.description));\n  }\n\n  render() {\n    return react_1.default.createElement(\"div\", {\n      className: 'center'\n    }, react_1.default.createElement(\"p\", null, react_1.default.createElement(\"s\", null, \" Recipething \")), react_1.default.createElement(\"p\", null, \" Gardenify \"));\n  }\n\n}\n\nexports.Thing = Thing;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vLi4vX2Zyb250ZW5kL2NvbXBvbmVudHMvdGhpbmcudHN4PzFjYjMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBTUEsTUFBYSxLQUFiLFNBQTJCLGlCQUEzQixDQUFvQztBQUNsQyxtQkFBaUI7QUFDZixVQUFNLFdBQVcsR0FBZ0M7QUFDL0MsUUFBRSxFQUFFO0FBRDJDLEtBQWpEO0FBR0EsNEJBQWdCLFdBQWhCLEVBQ0MsSUFERCxDQUNPLEdBQUQsSUFBdUMsT0FBTyxDQUFDLEdBQVIsQ0FBWSxHQUFHLENBQUMsV0FBaEIsQ0FEN0M7QUFFRDs7QUFFRCxRQUFNO0FBQ0osV0FDQTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0UseUNBQUcseURBQUgsQ0FERixFQUVFLHVEQUZGLENBREE7QUFNRDs7QUFoQmlDOztBQUFwQyIsImZpbGUiOiIuL2NvbXBvbmVudHMvdGhpbmcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5UaGluZyA9IHZvaWQgMDtcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IHBsYW50XzEgPSByZXF1aXJlKFwiLi4vLi4vX2FwaS9wbGFudFwiKTtcbmNsYXNzIFRoaW5nIGV4dGVuZHMgcmVhY3RfMS5Db21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCBnZXRQbGFudFJlcSA9IHtcbiAgICAgICAgICAgIGlkOiBcInRlc3QtcGxhbnQxXCJcbiAgICAgICAgfTtcbiAgICAgICAgcGxhbnRfMS5nZXRQbGFudFZhcmlldHkoZ2V0UGxhbnRSZXEpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMuZGVzY3JpcHRpb24pKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnY2VudGVyJyB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzXCIsIG51bGwsIFwiIFJlY2lwZXRoaW5nIFwiKSksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCIgR2FyZGVuaWZ5IFwiKSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuVGhpbmcgPSBUaGluZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRoaW5nLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/thing.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function () {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {\n  Object.defineProperty(o, \"default\", {\n    enumerable: true,\n    value: v\n  });\n} : function (o, v) {\n  o[\"default\"] = v;\n});\n\nvar __importStar = this && this.__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n\n  __setModuleDefault(result, mod);\n\n  return result;\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\n\nconst thing_1 = __webpack_require__(/*! ../components/thing */ \"./components/thing.js\");\n\nclass default_1 extends react_1.Component {\n  constructor(props) {\n    super(props);\n  } // Ensure that an API call is successful.\n\n\n  testBackendService() {\n    fetch('/home/test').then(res => console.log(res)).catch(rej => console.log(rej));\n  }\n\n  componentDidMount() {\n    this.testBackendService();\n  }\n\n  render() {\n    return react_1.default.createElement(\"div\", {\n      className: 'center'\n    }, react_1.default.createElement(thing_1.Thing, null));\n  }\n\n}\n\nexports.default = default_1;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vLi4vX2Zyb250ZW5kL3BhZ2VzL2luZGV4LnRzeD82NDNkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsd0JBQTZCLGlCQUE3QixDQUFzQztBQUNwQyxjQUFZLEtBQVosRUFBNEM7QUFDMUMsVUFBTSxLQUFOO0FBQ0QsR0FIbUMsQ0FLcEM7OztBQUNBLG9CQUFrQjtBQUNoQixTQUFLLENBQUMsWUFBRCxDQUFMLENBQ0MsSUFERCxDQUNNLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBUixDQUFZLEdBQVosQ0FEYixFQUVDLEtBRkQsQ0FFTyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQVIsQ0FBWSxHQUFaLENBRmQ7QUFHRDs7QUFFRCxtQkFBaUI7QUFDZixTQUFLLGtCQUFMO0FBQ0Q7O0FBRUQsUUFBTTtBQUNKLFdBQ0E7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNFLDhCQUFDLGFBQUQsRUFBTSxJQUFOLENBREYsQ0FEQTtBQUtEOztBQXRCbUM7O0FBQXRDIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3QgdGhpbmdfMSA9IHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL3RoaW5nXCIpO1xuY2xhc3MgZGVmYXVsdF8xIGV4dGVuZHMgcmVhY3RfMS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgLy8gRW5zdXJlIHRoYXQgYW4gQVBJIGNhbGwgaXMgc3VjY2Vzc2Z1bC5cbiAgICB0ZXN0QmFja2VuZFNlcnZpY2UoKSB7XG4gICAgICAgIGZldGNoKCcvaG9tZS90ZXN0JylcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICAgICAgICAgICAgLmNhdGNoKHJlaiA9PiBjb25zb2xlLmxvZyhyZWopKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMudGVzdEJhY2tlbmRTZXJ2aWNlKCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ2NlbnRlcicgfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHRoaW5nXzEuVGhpbmcsIG51bGwpKSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gZGVmYXVsdF8xO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });