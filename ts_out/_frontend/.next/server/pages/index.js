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

/***/ "../_api/plant_api.js":
/*!****************************!*\
  !*** ../_api/plant_api.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.getPlantScientificDetails = exports.getPlantInstructions = exports.getPlantItems = exports.createPlantVariety = exports.getPlantVariety = void 0;\nfunction getPlantVariety(req) {\n    return new Promise((resolve, reject) => {\n        fetch(`/plant/${req.id}`)\n            .then((res) => res.json())\n            .then(res => resolve(res))\n            .catch((rej) => reject(rej));\n    });\n}\nexports.getPlantVariety = getPlantVariety;\nfunction createPlantVariety(req) {\n    return new Promise((resolve, reject) => {\n        fetch('/plant/', {\n            method: 'POST',\n            body: JSON.stringify(req),\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        })\n            .then((res) => resolve(res))\n            .catch((rej) => reject(rej));\n    });\n}\nexports.createPlantVariety = createPlantVariety;\nfunction getPlantItems(req) {\n    return new Promise((resolve, reject) => {\n        fetch(`/plant/items/${req.id}`)\n            .then((res) => res.json())\n            .then(res => resolve(res))\n            .catch((rej) => reject(rej));\n    });\n}\nexports.getPlantItems = getPlantItems;\nfunction getPlantInstructions(req) {\n    return new Promise((resolve, reject) => {\n        fetch(`/plant/instructions/${req.id}`)\n            .then((res) => res.json())\n            .then(res => resolve(res))\n            .catch((rej) => reject(rej));\n    });\n}\nexports.getPlantInstructions = getPlantInstructions;\nfunction getPlantScientificDetails(req) {\n    return new Promise((resolve, reject) => {\n        fetch(`/plant/scientific/${req.id}`)\n            .then((res) => res.json())\n            .then(res => resolve(res))\n            .catch((rej) => reject(rej));\n    });\n}\nexports.getPlantScientificDetails = getPlantScientificDetails;\n//# sourceMappingURL=plant_api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vX2FwaS9wbGFudF9hcGkuanM/MTkzYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLE9BQU87QUFDckM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSIsImZpbGUiOiIuLi9fYXBpL3BsYW50X2FwaS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRQbGFudFNjaWVudGlmaWNEZXRhaWxzID0gZXhwb3J0cy5nZXRQbGFudEluc3RydWN0aW9ucyA9IGV4cG9ydHMuZ2V0UGxhbnRJdGVtcyA9IGV4cG9ydHMuY3JlYXRlUGxhbnRWYXJpZXR5ID0gZXhwb3J0cy5nZXRQbGFudFZhcmlldHkgPSB2b2lkIDA7XG5mdW5jdGlvbiBnZXRQbGFudFZhcmlldHkocmVxKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZmV0Y2goYC9wbGFudC8ke3JlcS5pZH1gKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXNvbHZlKHJlcykpXG4gICAgICAgICAgICAuY2F0Y2goKHJlaikgPT4gcmVqZWN0KHJlaikpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5nZXRQbGFudFZhcmlldHkgPSBnZXRQbGFudFZhcmlldHk7XG5mdW5jdGlvbiBjcmVhdGVQbGFudFZhcmlldHkocmVxKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZmV0Y2goJy9wbGFudC8nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzb2x2ZShyZXMpKVxuICAgICAgICAgICAgLmNhdGNoKChyZWopID0+IHJlamVjdChyZWopKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuY3JlYXRlUGxhbnRWYXJpZXR5ID0gY3JlYXRlUGxhbnRWYXJpZXR5O1xuZnVuY3Rpb24gZ2V0UGxhbnRJdGVtcyhyZXEpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBmZXRjaChgL3BsYW50L2l0ZW1zLyR7cmVxLmlkfWApXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlc29sdmUocmVzKSlcbiAgICAgICAgICAgIC5jYXRjaCgocmVqKSA9PiByZWplY3QocmVqKSk7XG4gICAgfSk7XG59XG5leHBvcnRzLmdldFBsYW50SXRlbXMgPSBnZXRQbGFudEl0ZW1zO1xuZnVuY3Rpb24gZ2V0UGxhbnRJbnN0cnVjdGlvbnMocmVxKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZmV0Y2goYC9wbGFudC9pbnN0cnVjdGlvbnMvJHtyZXEuaWR9YClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzb2x2ZShyZXMpKVxuICAgICAgICAgICAgLmNhdGNoKChyZWopID0+IHJlamVjdChyZWopKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZ2V0UGxhbnRJbnN0cnVjdGlvbnMgPSBnZXRQbGFudEluc3RydWN0aW9ucztcbmZ1bmN0aW9uIGdldFBsYW50U2NpZW50aWZpY0RldGFpbHMocmVxKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZmV0Y2goYC9wbGFudC9zY2llbnRpZmljLyR7cmVxLmlkfWApXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlc29sdmUocmVzKSlcbiAgICAgICAgICAgIC5jYXRjaCgocmVqKSA9PiByZWplY3QocmVqKSk7XG4gICAgfSk7XG59XG5leHBvcnRzLmdldFBsYW50U2NpZW50aWZpY0RldGFpbHMgPSBnZXRQbGFudFNjaWVudGlmaWNEZXRhaWxzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGxhbnRfYXBpLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../_api/plant_api.js\n");

/***/ }),

/***/ "./components/thing.js":
/*!*****************************!*\
  !*** ./components/thing.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function () {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {\n  Object.defineProperty(o, \"default\", {\n    enumerable: true,\n    value: v\n  });\n} : function (o, v) {\n  o[\"default\"] = v;\n});\n\nvar __importStar = this && this.__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n\n  __setModuleDefault(result, mod);\n\n  return result;\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Thing = void 0;\n\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\n\nconst plant_api_1 = __webpack_require__(/*! ../../_api/plant_api */ \"../_api/plant_api.js\");\n\nclass Thing extends react_1.Component {\n  componentDidMount() {\n    const getPlantReq = {\n      id: \"test-plant1\"\n    };\n    plant_api_1.getPlantVariety(getPlantReq).then(res => console.log(res.description));\n    const getPlantItemsReq = {\n      id: \"test-plant1\"\n    };\n    plant_api_1.getPlantItems(getPlantItemsReq).then(res => console.log(res));\n  }\n\n  render() {\n    return react_1.default.createElement(\"div\", {\n      className: 'center'\n    }, react_1.default.createElement(\"p\", null, react_1.default.createElement(\"s\", null, \" Recipething \")), react_1.default.createElement(\"p\", null, \" Gardenify \"));\n  }\n\n}\n\nexports.Thing = Thing;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vLi4vX2Zyb250ZW5kL2NvbXBvbmVudHMvdGhpbmcudHN4PzFjYjMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBT0EsTUFBYSxLQUFiLFNBQTJCLGlCQUEzQixDQUFvQztBQUNsQyxtQkFBaUI7QUFDZixVQUFNLFdBQVcsR0FBdUI7QUFDdEMsUUFBRSxFQUFFO0FBRGtDLEtBQXhDO0FBR0EsZ0NBQWdCLFdBQWhCLEVBQ0MsSUFERCxDQUNPLEdBQUQsSUFBOEIsT0FBTyxDQUFDLEdBQVIsQ0FBWSxHQUFHLENBQUMsV0FBaEIsQ0FEcEM7QUFHQSxVQUFNLGdCQUFnQixHQUE0QjtBQUNoRCxRQUFFLEVBQUU7QUFENEMsS0FBbEQ7QUFHQSw4QkFBYyxnQkFBZCxFQUNDLElBREQsQ0FDTyxHQUFELElBQW1DLE9BQU8sQ0FBQyxHQUFSLENBQVksR0FBWixDQUR6QztBQUVEOztBQUVELFFBQU07QUFDSixXQUNBO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRSx5Q0FBRyx5REFBSCxDQURGLEVBRUUsdURBRkYsQ0FEQTtBQU1EOztBQXRCaUM7O0FBQXBDIiwiZmlsZSI6Ii4vY29tcG9uZW50cy90aGluZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRoaW5nID0gdm9pZCAwO1xuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3QgcGxhbnRfYXBpXzEgPSByZXF1aXJlKFwiLi4vLi4vX2FwaS9wbGFudF9hcGlcIik7XG5jbGFzcyBUaGluZyBleHRlbmRzIHJlYWN0XzEuQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3QgZ2V0UGxhbnRSZXEgPSB7XG4gICAgICAgICAgICBpZDogXCJ0ZXN0LXBsYW50MVwiXG4gICAgICAgIH07XG4gICAgICAgIHBsYW50X2FwaV8xLmdldFBsYW50VmFyaWV0eShnZXRQbGFudFJlcSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IGNvbnNvbGUubG9nKHJlcy5kZXNjcmlwdGlvbikpO1xuICAgICAgICBjb25zdCBnZXRQbGFudEl0ZW1zUmVxID0ge1xuICAgICAgICAgICAgaWQ6IFwidGVzdC1wbGFudDFcIlxuICAgICAgICB9O1xuICAgICAgICBwbGFudF9hcGlfMS5nZXRQbGFudEl0ZW1zKGdldFBsYW50SXRlbXNSZXEpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnY2VudGVyJyB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzXCIsIG51bGwsIFwiIFJlY2lwZXRoaW5nIFwiKSksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCIgR2FyZGVuaWZ5IFwiKSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuVGhpbmcgPSBUaGluZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRoaW5nLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/thing.js\n");

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