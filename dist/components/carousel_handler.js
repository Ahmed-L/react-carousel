"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarouselHandler = void 0;
require("core-js/modules/es.array.reduce.js");
var _react = _interopRequireWildcard(require("react"));
var _carousel = require("./carousel");
require("./carousel.css");
const _excluded = ["rows"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
const CarouselHandler = props => {
  const {
      rows = 1
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  const {
    elements
  } = props;
  const str = (elements === null || elements === void 0 ? void 0 : elements.length) > 0 ? elements : ["https://via.placeholder.com/600x400?text=A", "https://via.placeholder.com/600x400?text=B", "https://via.placeholder.com/600x400?text=C", "https://via.placeholder.com/600x400?text=D", "https://via.placeholder.com/600x400?text=E", "https://via.placeholder.com/600x400?text=F", "https://via.placeholder.com/600x400?text=G", "https://via.placeholder.com/600x400?text=H", "https://via.placeholder.com/600x400?text=I"];
  const num_col = rows;
  // group the elements into cols of 2
  const cols = str.reduce((acc, val, i) => {
    if (i % num_col === 0) {
      acc.push([val]);
    } else {
      acc[acc.length - 1].push(val);
    }
    return acc;
  }, []);
  const calc_height = 100 / num_col;
  // map over the cols and render each col as a div containing X images    //h-[calc(100%/${num_col})]
  const x = cols.map((col, colIndex) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "h-full w-full",
      key: colIndex
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: " flex flex-col w-full rowH-".concat(num_col) //[calc(100%/${num_col})]   h-[calc(${calc_height}%)]
      ,
      key: colIndex
    }, col.map((element, index) => {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "w-full h-full",
        key: index
      }, /*#__PURE__*/_react.default.createElement("img", {
        className: "w-full h-full object-cover py-2 px-2" //h-${100}% src={`https://via.placeholder.com/600x400?text=${element}`}
        ,
        src: "".concat(element),
        alt: "placeholder image"
      }));
    })));
  });
  return /*#__PURE__*/_react.default.createElement(_carousel.Carousel, _extends({}, props, {
    children: x
  }));
};
exports.CarouselHandler = CarouselHandler;