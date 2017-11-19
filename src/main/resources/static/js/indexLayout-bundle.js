webpackJsonp([2],{

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(53);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(50);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(51);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Index: {
    displayName: 'Index'
  }
};

var _DReactNewProjectVersion10Node_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'D:/react/newProjectVersion1.0/components/util/Index.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _DReactNewProjectVersion10Node_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'D:/react/newProjectVersion1.0/components/util/Index.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _DReactNewProjectVersion10Node_modulesReactTransformHmrLibIndexJs2(_DReactNewProjectVersion10Node_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var Index = _wrapComponent('Index')(function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
  }

  _createClass(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var clientHeight = document.documentElement.clientHeight;
      var indexbg = document.getElementById('indexbg');
      if (document.getElementById('indexbg')) {
        indexbg.style.height = clientHeight - 180 + "px";
      }
    }
  }, {
    key: 'genColorLump',
    value: function genColorLump() {
      console.log(this.props.indexNav);
      return this.props.indexNav.map(function (row) {
        return _react3.default.createElement(
          'div',
          { className: 'colorLump' },
          _react3.default.createElement(
            'a',
            { href: row.link },
            row.name
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        { id: 'indexbg' },
        _react3.default.createElement(
          'div',
          { style: { padding: '10% 5%' } },
          this.genColorLump()
        )
      );
    }
  }]);

  return Index;
}(_react3.default.Component));
// if(document.getElementById("content"))
//   ReactDOM.render(<AppTable {...pageParas} />, document.getElementById("content"));


exports.default = Index;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)(module)))

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Index = __webpack_require__(441);

var _Index2 = _interopRequireDefault(_Index);

var _MyLayout = __webpack_require__(83);

var _MyLayout2 = _interopRequireDefault(_MyLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (document.getElementById("layout")) ReactDOM.render(React.createElement(
  _MyLayout2.default,
  null,
  React.createElement(_Index2.default, pageParas)
), document.getElementById("layout"));

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _css = __webpack_require__(87);

var _icon = __webpack_require__(20);

var _icon2 = _interopRequireDefault(_icon);

var _css2 = __webpack_require__(126);

var _menu = __webpack_require__(90);

var _menu2 = _interopRequireDefault(_menu);

var _css3 = __webpack_require__(89);

var _layout = __webpack_require__(88);

var _layout2 = _interopRequireDefault(_layout);

var _index = __webpack_require__(53);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(50);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(51);

var _index6 = _interopRequireDefault(_index5);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  MyLayout: {
    displayName: 'MyLayout'
  }
};

var _DReactNewProjectVersion10Node_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'D:/react/newProjectVersion1.0/components/util/MyLayout.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _DReactNewProjectVersion10Node_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'D:/react/newProjectVersion1.0/components/util/MyLayout.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _DReactNewProjectVersion10Node_modulesReactTransformHmrLibIndexJs2(_DReactNewProjectVersion10Node_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var Header = _layout2.default.Header,
    Sider = _layout2.default.Sider,
    Content = _layout2.default.Content,
    Footer = _layout2.default.Footer;
var SubMenu = _menu2.default.SubMenu;

var MyLayout = _wrapComponent('MyLayout')(function (_React$Component) {
  _inherits(MyLayout, _React$Component);

  function MyLayout(props) {
    _classCallCheck(this, MyLayout);

    var _this = _possibleConstructorReturn(this, (MyLayout.__proto__ || Object.getPrototypeOf(MyLayout)).call(this, props));

    _this.state = {
      collapsed: false,
      navData: [],
      title: _this.props.title
    };
    return _this;
  }

  _createClass(MyLayout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var clientHeight = document.documentElement.clientHeight;
      var contaniner = document.getElementById('contaniner');

      contaniner.style.height = clientHeight + "px";
      this.setState({
        navData: this.props.navTree
      });
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }
  }, {
    key: 'logout',
    value: function logout() {
      window.open("/logout");
      // window.location.href="logout/";
    }
  }, {
    key: 'genNavOptions',
    value: function genNavOptions() {
      var subMenus = this.state.navData.map(function (subMenu) {
        var items = subMenu.children.map(function (item) {
          return React.createElement(
            _menu2.default.Item,
            { key: item.name },
            React.createElement(
              'a',
              { href: item.link },
              item.name
            )
          );
        });
        return React.createElement(
          SubMenu,
          { key: subMenu.name, title: React.createElement(
              'span',
              null,
              subMenu.name
            ) },
          items
        );
      });
      return subMenus;
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log(this.state.title);
      return React.createElement(
        _layout2.default,
        { id: 'contaniner' },
        React.createElement(
          Sider,
          {
            trigger: null,
            collapsible: true,
            collapsed: this.state.collapsed
          },
          React.createElement(
            'div',
            { className: 'logo' },
            '\u54C8\u5C14\u6EE8\u5E02\u53CC\u57CE\u533A\u6B22\u8FCE\u60A8\uFF01'
          ),
          React.createElement(
            _menu2.default,
            { theme: 'dark', mode: 'inline', defaultSelectedKeys: this.props.defaultSelectedKeys, defaultOpenKeys: this.props.defaultOpenKeys },
            this.genNavOptions()
          )
        ),
        React.createElement(
          _layout2.default,
          null,
          React.createElement(
            Header,
            { style: { background: '#fff', padding: 24 } },
            React.createElement(_icon2.default, {
              style: { fontSize: 18, float: 'left' },
              className: 'trigger',
              type: this.state.collapsed ? 'menu-unfold' : 'menu-fold',
              onClick: this.toggle.bind(this)
            }),
            React.createElement(
              'h2',
              { style: { float: 'left', position: 'relative', top: '-26px', left: '40%' } },
              this.state.title || "信息管理系统"
            ),
            React.createElement(_icon2.default, { onClick: this.logout.bind(this), style: { fontSize: 18, float: 'right' }, type: 'logout', title: '\u9000\u51FA\u7CFB\u7EDF' })
          ),
          React.createElement(
            Content,
            { style: { margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 } },
            this.props.children
          )
        )
      );
    }
  }]);

  return MyLayout;
}(React.Component));

if (document.getElementById("layout")) ReactDOM.render(React.createElement(MyLayout, _extends({}, pageParas, { navTree: navTree })), document.getElementById("layout"));
exports.default = MyLayout;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)(module)))

/***/ })

},[561]);