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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/test.js");
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
eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Thing = void 0;\n\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\n\nconst plant_api_1 = __webpack_require__(/*! ../../_api/plant_api */ \"../_api/plant_api.js\");\n\nclass Thing extends react_1.default.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      plantVariety: null,\n      plantItems: []\n    };\n  }\n\n  componentDidMount() {\n    plant_api_1.getPlantVariety({\n      id: \"test-plant1\"\n    }).then(res => this.setState({\n      plantVariety: res\n    }));\n    plant_api_1.getPlantItems({\n      id: \"test-plant1\"\n    }).then(res => this.setState({\n      plantItems: res\n    }));\n  }\n\n  render() {\n    return react_1.default.createElement(\"div\", {\n      className: 'center'\n    }, this.state.plantVariety !== null ? react_1.default.createElement(\"div\", null, react_1.default.createElement(\"p\", null, this.state.plantVariety.genus), react_1.default.createElement(\"p\", null, this.state.plantVariety.species), react_1.default.createElement(\"p\", null, this.state.plantVariety.description)) : null, this.state.plantItems.map((plantItem, i) => react_1.default.createElement(\"div\", {\n      key: i\n    }, react_1.default.createElement(\"p\", null, plantItem.itemName), react_1.default.createElement(\"p\", null, plantItem.quantity))));\n  }\n\n}\n\nexports.Thing = Thing;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vLi4vX2Zyb250ZW5kL2NvbXBvbmVudHMvdGhpbmcudHN4PzFjYjMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQWFBLE1BQWEsS0FBYixTQUEyQixnQkFBTSxTQUFqQyxDQUF3RDtBQUN0RCxjQUFZLEtBQVosRUFBd0I7QUFDdEIsVUFBTSxLQUFOO0FBQ0EsU0FBSyxLQUFMLEdBQWE7QUFDWCxrQkFBWSxFQUFFLElBREg7QUFFWCxnQkFBVSxFQUFFO0FBRkQsS0FBYjtBQUlEOztBQUVELG1CQUFpQjtBQUNmLGdDQUFnQjtBQUFDLFFBQUUsRUFBRTtBQUFMLEtBQWhCLEVBQ0MsSUFERCxDQUNPLEdBQUQsSUFBOEIsS0FBSyxRQUFMLENBQWM7QUFBQyxrQkFBWSxFQUFFO0FBQWYsS0FBZCxDQURwQztBQUVBLDhCQUFjO0FBQUMsUUFBRSxFQUFFO0FBQUwsS0FBZCxFQUNDLElBREQsQ0FDTyxHQUFELElBQW1DLEtBQUssUUFBTCxDQUFjO0FBQUMsZ0JBQVUsRUFBRTtBQUFiLEtBQWQsQ0FEekM7QUFFRDs7QUFFRCxRQUFNO0FBQ0osV0FDQTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BRUcsS0FBSyxLQUFMLENBQVcsWUFBWCxLQUE0QixJQUE1QixHQUNELDJDQUNFLHlDQUFJLEtBQUssS0FBTCxDQUFXLFlBQVgsQ0FBd0IsS0FBNUIsQ0FERixFQUVFLHlDQUFJLEtBQUssS0FBTCxDQUFXLFlBQVgsQ0FBd0IsT0FBNUIsQ0FGRixFQUdFLHlDQUFJLEtBQUssS0FBTCxDQUFXLFlBQVgsQ0FBd0IsV0FBNUIsQ0FIRixDQURDLEdBS1EsSUFQWCxFQVVHLEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsR0FBdEIsQ0FBMEIsQ0FBQyxTQUFELEVBQVksQ0FBWixLQUMzQjtBQUFLLFNBQUcsRUFBRTtBQUFWLE9BQ0UseUNBQUksU0FBUyxDQUFDLFFBQWQsQ0FERixFQUVFLHlDQUFJLFNBQVMsQ0FBQyxRQUFkLENBRkYsQ0FEQyxDQVZILENBREE7QUFvQkQ7O0FBckNxRDs7QUFBeEQiLCJmaWxlIjoiLi9jb21wb25lbnRzL3RoaW5nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRoaW5nID0gdm9pZCAwO1xuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3QgcGxhbnRfYXBpXzEgPSByZXF1aXJlKFwiLi4vLi4vX2FwaS9wbGFudF9hcGlcIik7XG5jbGFzcyBUaGluZyBleHRlbmRzIHJlYWN0XzEuZGVmYXVsdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBsYW50VmFyaWV0eTogbnVsbCxcbiAgICAgICAgICAgIHBsYW50SXRlbXM6IFtdLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgcGxhbnRfYXBpXzEuZ2V0UGxhbnRWYXJpZXR5KHsgaWQ6IFwidGVzdC1wbGFudDFcIiB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gdGhpcy5zZXRTdGF0ZSh7IHBsYW50VmFyaWV0eTogcmVzIH0pKTtcbiAgICAgICAgcGxhbnRfYXBpXzEuZ2V0UGxhbnRJdGVtcyh7IGlkOiBcInRlc3QtcGxhbnQxXCIgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuc2V0U3RhdGUoeyBwbGFudEl0ZW1zOiByZXMgfSkpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdjZW50ZXInIH0sXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnBsYW50VmFyaWV0eSAhPT0gbnVsbCA/XG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIHRoaXMuc3RhdGUucGxhbnRWYXJpZXR5LmdlbnVzKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIHRoaXMuc3RhdGUucGxhbnRWYXJpZXR5LnNwZWNpZXMpLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgdGhpcy5zdGF0ZS5wbGFudFZhcmlldHkuZGVzY3JpcHRpb24pKSA6IG51bGwsXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnBsYW50SXRlbXMubWFwKChwbGFudEl0ZW0sIGkpID0+IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsga2V5OiBpIH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIHBsYW50SXRlbS5pdGVtTmFtZSksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIHBsYW50SXRlbS5xdWFudGl0eSkpKSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuVGhpbmcgPSBUaGluZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRoaW5nLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/thing.js\n");

/***/ }),

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function () {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {\n  Object.defineProperty(o, \"default\", {\n    enumerable: true,\n    value: v\n  });\n} : function (o, v) {\n  o[\"default\"] = v;\n});\n\nvar __importStar = this && this.__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n\n  __setModuleDefault(result, mod);\n\n  return result;\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\n\nconst thing_1 = __webpack_require__(/*! ../components/thing */ \"./components/thing.js\");\n\nclass default_1 extends react_1.Component {\n  constructor(props) {\n    super(props);\n  } // Ensure that an API call is successful.\n\n\n  testBackendService() {\n    fetch('/home/test').then(res => console.log(res)).catch(rej => console.log(rej));\n  }\n\n  componentDidMount() {\n    this.testBackendService();\n  }\n\n  render() {\n    return react_1.default.createElement(\"div\", {\n      className: 'center'\n    }, react_1.default.createElement(thing_1.Thing, null));\n  }\n\n}\n\nexports.default = default_1;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vLi4vX2Zyb250ZW5kL3BhZ2VzL3Rlc3QudHN4PzVlYmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSx3QkFBNkIsaUJBQTdCLENBQXNDO0FBQ3BDLGNBQVksS0FBWixFQUE0QztBQUMxQyxVQUFNLEtBQU47QUFDRCxHQUhtQyxDQUtwQzs7O0FBQ0Esb0JBQWtCO0FBQ2hCLFNBQUssQ0FBQyxZQUFELENBQUwsQ0FDQyxJQURELENBQ00sR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFSLENBQVksR0FBWixDQURiLEVBRUMsS0FGRCxDQUVPLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBUixDQUFZLEdBQVosQ0FGZDtBQUdEOztBQUVELG1CQUFpQjtBQUNmLFNBQUssa0JBQUw7QUFDRDs7QUFFRCxRQUFNO0FBQ0osV0FDQTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0UsOEJBQUMsYUFBRCxFQUFNLElBQU4sQ0FERixDQURBO0FBS0Q7O0FBdEJtQzs7QUFBdEMiLCJmaWxlIjoiLi9wYWdlcy90ZXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IHRoaW5nXzEgPSByZXF1aXJlKFwiLi4vY29tcG9uZW50cy90aGluZ1wiKTtcbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIHJlYWN0XzEuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIC8vIEVuc3VyZSB0aGF0IGFuIEFQSSBjYWxsIGlzIHN1Y2Nlc3NmdWwuXG4gICAgdGVzdEJhY2tlbmRTZXJ2aWNlKCkge1xuICAgICAgICBmZXRjaCgnL2hvbWUvdGVzdCcpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gY29uc29sZS5sb2cocmVzKSlcbiAgICAgICAgICAgIC5jYXRjaChyZWogPT4gY29uc29sZS5sb2cocmVqKSk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnRlc3RCYWNrZW5kU2VydmljZSgpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdjZW50ZXInIH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh0aGluZ18xLlRoaW5nLCBudWxsKSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRfMTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRlc3QuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/test.js\n");

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