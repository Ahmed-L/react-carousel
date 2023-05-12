"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Carousel = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
require("./carousel.css");
const _excluded = ["classNames", "dot_classNames", "dot_active_classNames", "autoplay", "autoplayInterval", "dots_pos", "showdots", "rows", "right_btn_styles", "left_btn_styles", "carousel_container_classNames"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
const Carousel = props => {
  const {
      classNames = "",
      dot_classNames = "dot",
      dot_active_classNames = "active",
      autoplay = true,
      autoplayInterval = 1000,
      dots_pos = "bottom",
      showdots = true,
      rows = 1,
      right_btn_styles = "right-arrow",
      left_btn_styles = "left-arrow",
      carousel_container_classNames = " h-1/2 w-1/2 m-auto relative"
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  let {
    children,
    show = 1,
    slideby = 1
  } = props;
  if (show > children.length && children.length > 1) {
    show = children.length;
    console.log("show > items, add more items");
  } else if (show === children.length) {
    show = children.length === 1 ? 1 : children.length;
  }
  const carousel_content = (0, _react.useRef)(null);
  const element = carousel_content.current;
  const disableTransition = () => {
    if (element !== null) {
      element.style.transition = "none";
      if (transitionChanged === 1) {
        element.style.transform = "translateX(-".concat(show * (100 / show), "%)");
      } else if (transitionChanged === -1) {
        element.style.transform = "translateX(-".concat((length - show) * (100 / show), "%)");
      }
    }
  };
  const enableTransition = () => {
    if (element) {
      element.style.transition = "all 250ms linear";
      element.style.transform = "translateX(-".concat(currentIndex * (100 / show), "%)");
    }
  };
  const [currentIndex, setCurrentIndex] = (0, _react.useState)(show + 1);
  const [length, setLength] = (0, _react.useState)(children.length + show + show);
  const [transitionChanged, setTransitionChanged] = (0, _react.useState)(0);
  const [activeDot, setActiveDot] = (0, _react.useState)(0);
  let infinite_scrollable_children = [];
  if (children.length > 1) {
    if (children.length - 1 - show >= 0) {
      infinite_scrollable_children.push(children.slice(children.length - 1 - show, children.length));
    } else {
      const extras = children.length - 1 - show;
      infinite_scrollable_children.push(children.slice(extras, 0));
      infinite_scrollable_children.push(children.slice(0, children.length));
    }
    infinite_scrollable_children.push(...children);
    if (children.length - 1 - show >= 0) {
      infinite_scrollable_children.push(children.slice(0, show + 1));
    } else {
      const extras = children.length - 1 - show;
      infinite_scrollable_children.push(children.slice(0, show + 1));
      infinite_scrollable_children.push(children.slice(0, Math.abs(extras)));
    }
  } else {
    infinite_scrollable_children.push(children);
    infinite_scrollable_children.push(children);
    infinite_scrollable_children.push(children);
  }
  (0, _react.useEffect)(() => {
    setLength(children.length + show + show);
  }, [children]);
  (0, _react.useEffect)(() => {
    setActiveDot(currentIndex - 1 - show);
  }, [currentIndex]);
  (0, _react.useEffect)(() => {
    if (transitionChanged === 1 && element) {
      element.style.transform = "translateX(-".concat((currentIndex + slideby) * (100 / show), "%)");
      setTimeout(() => {
        console.log("TIMEOUT CALLED");
        disableTransition();
        setTransitionChanged(0);
        setCurrentIndex(show + 1);
      }, 250);
    } else if (transitionChanged === -1 && element) {
      element.style.transform = "translateX(-".concat((currentIndex - slideby) % length * (100 / show), "%)");
      setTimeout(() => {
        disableTransition();
        setTransitionChanged(0);
        setCurrentIndex(length + 1 - show - slideby);
      }, 350);
    }
  }, [transitionChanged]);
  const next = () => {
    if (transitionChanged === 0) {
      enableTransition();
    }
    if (currentIndex <= length - show - slideby) {
      setCurrentIndex(prevState => prevState + slideby);
    } else {
      console.log("triggered next reset pos");
      setTransitionChanged(prev => prev + 1);
    }
    console.log(currentIndex + slideby);
  };
  const prev = () => {
    if (transitionChanged === 0) {
      enableTransition();
    }
    if (currentIndex - slideby >= show + 1) {
      setCurrentIndex(prevState => (prevState - slideby) % length);
    } else {
      console.log("triggered prev reset pos");
      // do something
      setTransitionChanged(prev => prev - 1);
    }
    console.log(Math.abs(currentIndex - slideby));
  };
  (0, _react.useEffect)(() => {
    let intervalId;
    if (autoplay) {
      intervalId = setInterval(() => {
        next();
      }, autoplayInterval);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [next, autoplay, autoplayInterval]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(carousel_container_classNames)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-wrapper"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: prev,
    className: (0, _clsx.default)(left_btn_styles)
  }, "<"), /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-content-wrapper bg-white"
    // onTouchStart={handleTouchStart}
    // onTouchMove={handleTouchMove}
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: carousel_content,
    id: "transition_div",
    className: "h-full carousel-content show-".concat(show, " bg-red-700 flex flex-wrap flex-col justify-center items-center ") //h-{calc(100/${rows})%}
    ,
    style: {
      transform: "translateX(-".concat(currentIndex * (100 / show), "%)")
    }
  }, infinite_scrollable_children)), /*#__PURE__*/_react.default.createElement("button", {
    onClick: next,
    className: (0, _clsx.default)(right_btn_styles)
  }, ">")), showdots && /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-dots-".concat(dots_pos)
  }, children.length && children.map((_, index) => /*#__PURE__*/_react.default.createElement("button", {
    key: index,
    className: index === activeDot ? (0, _clsx.default)(dot_classNames, dot_active_classNames) : "".concat(dot_classNames),
    onClick: () => {
      enableTransition();
      console.log("clicked: ", index);
      console.log("currentIndex: ", currentIndex - show - 1);
      setCurrentIndex(index + 1 + show);
      // setActiveDot(index)
    }
  }))));
};
exports.Carousel = Carousel;