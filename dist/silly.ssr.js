'use strict';var vue=require('vue');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script = vue.defineComponent({
  name: 'SButton',
  // vue component name
  components: {
    Icon: function Icon() {
      return Promise.resolve().then(function(){return sIcon});
    }
  },
  props: {
    href: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: ""
    },
    large: {
      type: Boolean,
      default: false
    },
    medium: {
      type: Boolean,
      default: true
    },
    small: {
      type: Boolean,
      default: false
    },
    ghost: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: false
    },
    icon: {
      type: String,
      default: false
    }
  },
  setup: function setup(props) {
    var style = [];
    if (props.ghost) style.push('s-button--ghost');
    if (props.color) style.push("s-button--".concat(props.color));
    if (props.large) style.push('s-button--large');
    if (props.small) style.push('s-button--small');
    return {
      elementType: props.href ? 'a' : 'button',
      href: props.href ? props.href : null,
      style: style
    };
  }
});const _hoisted_1 = {
  key: 0,
  class: "s-button__icon"
};
const _hoisted_2 = { class: "s-button__text" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = vue.resolveComponent("Icon");

  return (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.elementType), {
    class: ["s-button", _ctx.style],
    href: _ctx.href
  }, {
    default: vue.withCtx(() => [
      (_ctx.icon)
        ? (vue.openBlock(), vue.createBlock("span", _hoisted_1, [
            vue.createVNode(_component_Icon, { name: "icon" })
          ]))
        : vue.createCommentVNode("", true),
      vue.createVNode("span", _hoisted_2, [
        vue.renderSlot(_ctx.$slots, "default")
      ])
    ]),
    _: 3
  }, 8, ["class", "href"]))
}script.render = render;var script$1 = vue.defineComponent({
  name: 'SButtonGroup',
  // vue component name
  props: {
    direction: {
      type: String,
      default: 'horizontal'
    },
    align: {
      type: String,
      default: 'center'
    }
  },
  setup: function setup(props) {
    return {
      props: props
    };
  }
});function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("div", {
    class: ["s-button-group", [
			`s-button-group--${_ctx.props.align}`,
			`s-button-group--${_ctx.props.direction}`
		]]
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 2))
}script$1.render = render$1;var script$2 = vue.defineComponent({
  name: 'SInputField',
  // vue component name
  props: {
    type: {
      type: String,
      default: 'text'
    },
    options: {
      type: Array,
      default: []
    },
    label: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'default'
    },
    stack: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props) {
    var elementType = (props === null || props === void 0 ? void 0 : props.options.length) > 0 ? 'select' : 'input';
    var dirty = vue.ref(false);
    var focus = vue.ref(false);
    var empty = vue.ref(true);

    var onFocus = function onFocus() {
      return focus.value = true;
    };

    var onBlur = function onBlur() {
      return focus.value = false;
    };

    var onInput = function onInput(event) {
      return empty.value = !!event.target.value;
    };

    var uid = "input-".concat(Math.round(new Date().valueOf() * Math.random()).toString());
    return {
      elementType: elementType,
      props: props,
      uid: uid,
      dirty: dirty,
      focus: focus,
      empty: empty,
      onFocus: onFocus,
      onBlur: onBlur,
      onInput: onInput
    };
  }
});function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("div", {
    class: ["s-input-text s-input-text", [
			`s-input-text--${_ctx.props.mode}`,
			_ctx.props.stack ? `s-input-text--stack` : null,
			_ctx.dirty ? `s-input-text--is-dirty` : null,
			_ctx.focus ? `s-input-text--has-focus` : null,
			_ctx.empty ? `s-input-text--is-empty` : null
		]]
  }, [
    (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.elementType), {
      type: _ctx.type,
      class: "s-input-text__control",
      modelValue: _ctx.value,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (_ctx.value = $event)),
      onFocus: _ctx.onFocus,
      onBlur: _ctx.onBlur,
      onInput: _ctx.onInput,
      id: _ctx.uid
    }, null, 8, ["type", "modelValue", "onFocus", "onBlur", "onInput", "id"])),
    (_ctx.props.label)
      ? (vue.openBlock(), vue.createBlock("label", {
          key: 0,
          for: _ctx.uid,
          class: "s-input-text__label"
        }, vue.toDisplayString(_ctx.label), 9, ["for"]))
      : vue.createCommentVNode("", true)
  ], 2))
}script$2.render = render$2;var script$3 = vue.defineComponent({
  name: 'SInputField',
  // vue component name
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    options: {
      type: Array,
      default: []
    },
    label: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'default'
    },
    stack: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props) {
    var elementType = 'textarea';
    var dirty = vue.ref(false);
    var focus = vue.ref(false);
    var empty = vue.ref(true);

    var onFocus = function onFocus() {
      return focus.value = true;
    };

    var onBlur = function onBlur() {
      return focus.value = false;
    };

    var onInput = function onInput(event) {
      return empty.value = !!event.target.value;
    };

    var uid = "input-".concat(Math.round(new Date().valueOf() * Math.random()).toString());
    return {
      elementType: elementType,
      props: props,
      uid: uid,
      dirty: dirty,
      focus: focus,
      empty: empty,
      onFocus: onFocus,
      onBlur: onBlur,
      onInput: onInput
    };
  }
});function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("div", {
    class: ["s-input-text-area", [
			`s-input-text-area--${_ctx.props.mode}`,
			_ctx.props.stack ? `s-input-text-area--stack` : null,
			_ctx.dirty ? `s-input-text-area--is-dirty` : null,
			_ctx.focus ? `s-input-text-area--has-focus` : null,
			_ctx.empty ? `s-input-text-area--is-empty` : null
		]]
  }, [
    (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.elementType), {
      type: _ctx.type,
      class: "s-input-text__control",
      modelValue: _ctx.value,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (_ctx.value = $event)),
      onFocus: _ctx.onFocus,
      onBlur: _ctx.onBlur,
      onInput: _ctx.onInput,
      id: _ctx.uid
    }, null, 8, ["type", "modelValue", "onFocus", "onBlur", "onInput", "id"])),
    (_ctx.props.label)
      ? (vue.openBlock(), vue.createBlock("label", {
          key: 0,
          for: _ctx.uid,
          class: "s-input-text__label"
        }, vue.toDisplayString(_ctx.label), 9, ["for"]))
      : vue.createCommentVNode("", true)
  ], 2))
}script$3.render = render$3;var script$4 = vue.defineComponent({
  name: 'SInputFieldGroup',
  // vue component name
  props: {
    direction: {
      type: String,
      default: 'vertical'
    },
    align: {
      type: String,
      default: 'start'
    },
    stack: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props) {
    return {
      props: props
    };
  }
});function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("form", {
    class: ["s-form", [
			`s-form--${_ctx.props.align}`,
			`s-form--${_ctx.props.direction}`,
			_ctx.props.stack ? `s-form--stack` : ``
		]]
  }, [
    vue.renderSlot(_ctx.$slots, "default", { props: _ctx.props })
  ], 2))
}script$4.render = render$4;var script$5 = vue.defineComponent({
  name: 'SToggle',
  // vue component name
  props: {
    type: {
      type: String,
      default: 'checkbox'
    },
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var dirty = vue.ref(false);
    var focus = vue.ref(false);

    var onFocus = function onFocus() {
      return focus.value = true;
    };

    var onBlur = function onBlur() {
      return focus.value = false;
    }; // Get first value (most of the times this is modelValue)
    // Exception if it's being used like this v-model:YourKey=""
    // Then it will be props.YourKey


    var value = props.modelValue;
    var isChecked = vue.computed({
      get: function get() {
        return value;
      },
      set: function set(newValue) {
        dirty.value = true;
        emit('update:modelValue', newValue);
      }
    }); // Above function is same as below but I added the dirty ref
    // const isChecked = useModelWrapper(props, emit)

    var uid = "input-".concat(Math.round(new Date().valueOf() * Math.random()).toString());
    return {
      isChecked: isChecked,
      onFocus: onFocus,
      onBlur: onBlur,
      dirty: dirty,
      focus: focus,
      uid: uid
    };
  }
});const _hoisted_1$1 = { class: "s-toggle__text" };

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("div", {
    class: ["s-toggle", `s-toggle--${_ctx.type}`]
  }, [
    vue.withDirectives(vue.createVNode("input", vue.mergeProps({
      id: _ctx.uid,
      class: "s-toggle__control",
      type: "checkbox",
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (_ctx.isChecked = $event))
    }, _ctx.$attrs), null, 16, ["id"]), [
      [vue.vModelCheckbox, _ctx.isChecked]
    ]),
    vue.createVNode("label", {
      for: _ctx.uid,
      class: "s-toggle__label"
    }, [
      vue.createVNode("span", _hoisted_1$1, vue.toDisplayString(_ctx.label), 1)
    ], 8, ["for"])
  ], 2))
}script$5.render = render$5;var script$6 = vue.defineComponent({
  name: 'SNavigation',
  // vue component name
  props: {
    menu: {
      type: Array,
      default: []
    }
  },
  setup: function setup(props) {
    var getElementType = function getElementType(item) {
      var elementType = 'a'; // if (item.to) elementType = 'route-link';

      if (item.click) elementType = 'button';
      if (item.element) elementType = item.element;
      return elementType;
    };

    return {
      menu: props.menu,
      getElementType: getElementType
    };
  }
});const _hoisted_1$2 = { class: "s-navigation" };
const _hoisted_2$1 = { class: "s-navigation__list" };
const _hoisted_3 = {
  key: 0,
  class: "s-navigation__text"
};
const _hoisted_4 = {
  key: 0,
  class: "s-navigation__text"
};

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("nav", _hoisted_1$2, [
    vue.createVNode("ul", _hoisted_2$1, [
      (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.menu, (item, idx) => {
        return (vue.openBlock(), vue.createBlock("li", {
          class: "s-navigation__item",
          key: idx
        }, [
          (item.route)
            ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.getElementType(item)), {
                key: 0,
                href: item.route,
                class: "s-navigation__link"
              }, {
                default: vue.withCtx(() => [
                  (!item.element)
                    ? (vue.openBlock(), vue.createBlock("span", _hoisted_3, vue.toDisplayString(item.name), 1))
                    : (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 1 }, [
                        vue.createTextVNode(vue.toDisplayString(item.name), 1 /* TEXT */)
                      ], 64 /* STABLE_FRAGMENT */))
                ]),
                _: 2
              }, 1032, ["href"]))
            : vue.createCommentVNode("", true),
          (item.click)
            ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.getElementType(item)), {
                key: 1,
                onClick: item.click,
                class: "s-navigation__link"
              }, {
                default: vue.withCtx(() => [
                  (!item.element)
                    ? (vue.openBlock(), vue.createBlock("span", _hoisted_4, vue.toDisplayString(item.name), 1))
                    : (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 1 }, [
                        vue.createTextVNode(vue.toDisplayString(item.name), 1 /* TEXT */)
                      ], 64 /* STABLE_FRAGMENT */))
                ]),
                _: 2
              }, 1032, ["onClick"]))
            : vue.createCommentVNode("", true),
          vue.renderSlot(_ctx.$slots, "default")
        ]))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ]))
}script$6.render = render$6;var script$7 = vue.defineComponent({
  name: 'SHeader',
  // vue component name
  props: {
    autoHide: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props, context) {
    // console.log(context.slots.left, context.slots['left']);
    if (props.autoHide) {
      console.log('yes, this should autohide');
    }

    var _context$slots = context.slots,
        left = _context$slots.left,
        middle = _context$slots.middle,
        right = _context$slots.right;
    var hasSlot = vue.reactive({
      left: left ? !!left() : false,
      middle: middle ? !!middle() : false,
      right: right ? !!right() : false
    });
    return {
      hasSlot: hasSlot
    };
  }
});const _hoisted_1$3 = { class: "s-header" };
const _hoisted_2$2 = {
  key: 0,
  class: "s-header__left"
};
const _hoisted_3$1 = {
  key: 1,
  class: "s-header__middle"
};
const _hoisted_4$1 = {
  key: 2,
  class: "s-header__right"
};

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("header", _hoisted_1$3, [
    (_ctx.hasSlot.left)
      ? (vue.openBlock(), vue.createBlock("div", _hoisted_2$2, [
          vue.renderSlot(_ctx.$slots, "left")
        ]))
      : vue.createCommentVNode("", true),
    (_ctx.hasSlot.middle)
      ? (vue.openBlock(), vue.createBlock("div", _hoisted_3$1, [
          vue.renderSlot(_ctx.$slots, "middle")
        ]))
      : vue.createCommentVNode("", true),
    (_ctx.hasSlot.right)
      ? (vue.openBlock(), vue.createBlock("div", _hoisted_4$1, [
          vue.renderSlot(_ctx.$slots, "right")
        ]))
      : vue.createCommentVNode("", true)
  ]))
}script$7.render = render$7;const _hoisted_1$4 = { class: "icon" };

function render$8(_ctx, _cache) {
  return (vue.openBlock(), vue.createBlock("span", _hoisted_1$4, "Fuck yeah"))
}var script$8 = {};
script$8.render = render$8;var sIcon=/*#__PURE__*/Object.freeze({__proto__:null,'default': script$8});/* eslint-disable import/prefer-default-export */var components=/*#__PURE__*/Object.freeze({__proto__:null,SButton: script,SButtonGroup: script$1,SInputText: script$2,SInputTextArea: script$3,SForm: script$4,SToggle: script$5,SNavigation: script$6,SHeader: script$7,SIcon: script$8});var install = function installSilly(app) {
  Object.entries(components).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To allow individual component use, export components
var components$1=/*#__PURE__*/Object.freeze({__proto__:null,'default': plugin,SButton: script,SButtonGroup: script$1,SInputText: script$2,SInputTextArea: script$3,SForm: script$4,SToggle: script$5,SNavigation: script$6,SHeader: script$7,SIcon: script$8});// only expose one global var, with named exports exposed as properties of
// that global var (eg. VivintIcon.iconList)

Object.entries(components$1).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') plugin[componentName] = component;
});module.exports=plugin;